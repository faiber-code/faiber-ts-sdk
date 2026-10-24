import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { productionRust } from '../scripts/rust-source.mjs';

const baseline = JSON.parse(await readFile(new URL('./fixtures/published-operation-names.json', import.meta.url), 'utf8'));
const retiredLmsSummaryMethods=new Set(['aiSummaryJobsGet','aiSummaryLatestGet','aiSummaryModelsGet','aiSummaryRefreshManyPost','aiSummarySettingsGet','aiSummaryUpdateSettingsPut','aiSummarySummariesGet','aiSummaryRefreshPost']);
test('contract synchronization preserves existing operation names except documented 1.0.0 summary endpoint retirements', async () => {
  for (const [service, names] of Object.entries(baseline)) {
    const source = await readFile(new URL(`../packages/${service}/src/operations.ts`, import.meta.url), 'utf8');
    const methods = new Set([...source.matchAll(/^  (\w+)\(/gm)].map(m => m[1]));
    for (const name of names) {if(service==='session'&&name==='integrationPerformanceContextPost'){assert.ok(!methods.has(name),'retired Session performance-context method');continue;}if(service==='lms'&&retiredLmsSummaryMethods.has(name)){assert.ok(!methods.has(name),`retired LMS summary method ${name}`);continue;}assert.ok(methods.has(name), `${service}.${name} was removed`);}
  }
});

test('Rust fixtures cannot become production endpoints, including braces inside literals', () => {
  const source = 'pub fn routes() { Router::new().route("/real", get(real)) }\n#[cfg(test)]\nmod tests { const TEXT: &str = "}"; const RAW:&str=r#"{"#; fn mock(){Router::new().route("/fixture",get(mock));} }\npub fn after() {}';
  const code = productionRust(source);
  assert.ok(code.includes('/real'));
  assert.ok(code.includes('pub fn after'));
  assert.ok(!code.includes('/fixture'));
});

test('extraction respects pub(crate), nested qualified handlers and namespaced permissions', async () => {
  const root = await mkdtemp(join(tmpdir(), 'faiber-parser-regression-'));
  try {
    const services = Object.keys(JSON.parse(await readFile(new URL('../service-contracts.json', import.meta.url), 'utf8')));
    for (const service of services) {
      const directory = service === 'version' ? 'infera_version' : `infera-${service}`;
      await mkdir(join(root, directory, 'src'), { recursive: true });
      await writeFile(join(root, directory, 'src/router.rs'), 'pub fn routes()->Router{Router::new().route("/health",get(status))}\nasync fn status()->Json<String>{unimplemented!()}');
    }
    await writeFile(join(root, 'infera-task/src/routes.rs'), 'pub fn app()->Router{Router::new().route("/health",get(status))} async fn status()->Json<String>{unimplemented!()}');
    await mkdir(join(root, 'infera-lms/src/report'), { recursive: true });
    await writeFile(join(root, 'infera-lms/src/router.rs'), 'pub fn routes()->Router{Router::new().nest("/api/v1/reports",crate::report::routes::routes())}');
    await writeFile(join(root, 'infera-lms/src/report/routes.rs'), `
      pub fn routes()->Router{Router::new().route("/staff",get(staff)).route("/parents",get(parents))}
      #[utoipa::path(get,path="/reports/staff")]
      #[should_have_permissions(path("api/v1/reports/staff"),methods("GET"),permissions("lms:report:read_own"))]
      pub(crate) async fn staff()->Json<APIResponse<String>>{unimplemented!()}
      #[utoipa::path(get,path="/reports/parents")]
      async fn parents()->Json<APIResponse<String>>{unimplemented!()}
      #[cfg(test)]mod tests{fn mock(){Router::new().route("/fixture",get(parents));}}
    `);
    await mkdir(join(root, 'infera-profile/src/profile'), { recursive: true });
    await mkdir(join(root, 'infera-profile/src/profile_search'), { recursive: true });
    await writeFile(join(root, 'infera-profile/src/router.rs'), 'pub fn routes()->Router{Router::new().nest("/api/v1/profile",crate::profile::routes::routes())}');
    await writeFile(join(root, 'infera-profile/src/profile/routes.rs'), 'pub fn routes()->Router{Router::new().merge(crate::profile_search::routes::routes())}');
    await writeFile(join(root, 'infera-profile/src/profile_search/routes.rs'), 'pub fn routes()->Router{Router::new().route("/people/resolve",post(super::people::resolve))}');
    await writeFile(join(root, 'infera-profile/src/profile_search/people.rs'), '#[infera_idp_macro::should_have_permissions(path("/api/v1/profile/people/resolve"),methods("POST"),permissions("profile:lookup"))]\npub async fn resolve(Json(input):Json<ResolvePeople>)->Json<APIResponse<PeopleResult>>{unimplemented!()}');
    const output = join(root, 'contracts.json');
    const result = spawnSync(process.execPath, [new URL('../scripts/extract-service-contracts.mjs', import.meta.url).pathname, output], { env: { ...process.env, FAIBER_SERVICES_ROOT: root }, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const contracts = JSON.parse(await readFile(output, 'utf8'));
    assert.deepEqual(contracts.lms.map(e => e.path), ['/api/v1/reports/parents', '/api/v1/reports/staff']);
    assert.deepEqual(contracts.lms.find(e => e.handler === 'staff').permissions, ['lms:report:read_own']);
    assert.equal(contracts.profile[0].path, '/api/v1/profile/people/resolve');
    assert.deepEqual(contracts.profile[0].permissions, ['profile:lookup']);
    assert.equal(contracts.profile[0].body, 'ResolvePeople');
  } finally { await rm(root, { recursive: true, force: true }); }
});
