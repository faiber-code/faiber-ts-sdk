import assert from 'node:assert/strict';
import test from 'node:test';
import { maskRust, sourceIndex, resolveSymbol, functionEvidence } from '../scripts/capability-source.mjs';

test('source evidence ignores braces and fake declarations in raw strings, nested comments and test fixtures', () => {
  const rust = `/* nested /* fn fake() {} */ comment */
pub async fn actual<'a>(name: &'a str) -> String {
 let sql = r###"SELECT '{ fn fake() {} }'"###;
 let quote = '}'; // fn ignored() {}
 format!("{}", name)
}
#[cfg(test)] mod tests { fn fixture() {} }
`;
  const index = sourceIndex(rust, 'infera-x/src/routes.rs');
  assert.deepEqual(index.functions.map(x => x.name), ['actual']);
  assert.ok(index.functions[0].body.includes('SELECT'));
  assert.equal(maskRust(rust).length, rust.length);
  assert.equal(maskRust(rust).split('\n').length, rust.split('\n').length);
});

test('schema evidence retains renamed filters, flattening, default and nullable distinctions', () => {
  const index = sourceIndex(`#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Query {
 #[serde(rename = "filter[search]")] pub search: Option<String>,
 #[serde(default = "default_limit")] pub page_limit: u64,
 #[serde(flatten)] pub paging: Pagination,
 pub required_name: String,
}`, 'infera-x/src/models.rs');
  assert.deepEqual(index.models[0].fields.map(x => [x.name, x.optional, x.defaulted, x.flatten]), [
    ['filter[search]', true, false, false], ['pageLimit', false, true, false],
    ['paging', false, false, true], ['requiredName', false, false, false],
  ]);
});

test('ambiguous handler names stay unresolved and module qualifiers resolve exactly', () => {
  const files = ['one', 'two'].map(name => sourceIndex('pub async fn get() {}', `infera-x/src/${name}.rs`));
  assert.equal(resolveSymbol(files, 'get', 'infera-x/src/router.rs').resolved, null);
  assert.equal(resolveSymbol(files, 'get', 'infera-x/src/router.rs').candidates.length, 2);
  assert.equal(resolveSymbol(files, 'get', 'infera-x/src/router.rs', 'crate::two').resolved.path, 'infera-x/src/two.rs');
});

test('permission and mutation evidence retains its source location and never implies verification', () => {
  const file = sourceIndex(`pub async fn update() {
 ctx.require("knowledge:write")?;
 repository::update(&s, body).await?;
}`, 'infera-x/src/routes.rs');
  const evidence = functionEvidence(file.functions[0]);
  assert.deepEqual(evidence.declared_permissions, ['knowledge:write']);
  assert.ok(evidence.effects.some(x => x.expression.includes('repository::update')));
  assert.equal(evidence.verified, undefined);
});

test('simple role wrapper macros retain the actual invocation and substituted permission', () => {
  const file=sourceIndex(`macro_rules! role_index {
 ($name:ident, $path:expr, $perm:expr) => {
  #[should_have_permissions(path($path), permissions($perm))]
  async fn $name() { repository::list().await; }
 };
}
role_index!(teacher_index, "/profile/teacher", "profile:read_teacher");`, 'infera-profile/src/profile/routes.rs');
  const fn=file.functions.find(x=>x.name==='teacher_index');
  assert.ok(fn);
  assert.equal(fn.expansion.invocation_line,7);
  assert.deepEqual(functionEvidence(fn).declared_permissions,['profile:read_teacher']);
});

test('test-module stripping preserves runtime handlers after literals with unmatched braces and fake cfg attributes',()=>{
  const file=sourceIndex(`const DOC:&str=r#"#[cfg(test)] mod fake { bad }"#;
#[cfg(test)] mod tests {
 fn fixture() { let bytes=br"{"; /* a /* nested } */ comment */ }
}
pub async fn after_tests() { let text="}"; }
`, 'example/src/routes.rs');
  assert.deepEqual(file.functions.map(fn=>fn.name),['after_tests']);
});
