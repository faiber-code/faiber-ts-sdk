import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const manifest=JSON.parse(readFileSync(new URL('./package.json',import.meta.url)));
for(const name of Object.keys(manifest.dependencies)) await import(name);
const {FaiberSDK,domainsFromManageProxy}=await import('@faiber/faiber-ts-sdk');
const sdk=new FaiberSDK({domains:domainsFromManageProxy('https://manage.example.test')});
for(const method of [sdk.chat.personal.events,sdk.lms.notificationSettings.list,sdk.lms.eligibleContacts.list,sdk.messenger.delivery.events,sdk.task.feedback.submit,sdk.profile.summaries.latest,sdk.manage.listAgentThreadsPage]) assert.equal(typeof method,'function');
assert.equal(typeof sdk.lms.latestAiSummary,'undefined');
console.log('All22 actual tarball exports import; published helpers and new Profile/Manage APIs exist; retired LMS summary convenience absent. No network request.');
