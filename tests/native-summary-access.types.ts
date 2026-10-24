import type {ChatApi} from '@faiber/faiber-chat';
import type {SessionApi} from '@faiber/faiber-session';
import type {NativeSummaryAccessResponse, NativeSummaryPolicyUpdate} from '@faiber/sdk-core';
declare const chat: ChatApi;
declare const session: SessionApi;
const policy: NativeSummaryPolicyUpdate={enabled:false,expected_revision:3,reason:'Pause collection'};
const saved: Promise<NativeSummaryAccessResponse>=session.operations.saveNativeSummaryAccessPolicy(policy).then(r=>r.data);
const restored: Promise<NativeSummaryAccessResponse>=chat.operations.restoreNativeSummaryObject('20000000-0000-4000-8000-000000000001',{reason:'Restore after review'}).then(r=>r.data);
// @ts-expect-error explicit current revision is required
session.operations.saveNativeSummaryAccessPolicy({enabled:true,reason:'Approve'});
// @ts-expect-error DELETE requires the review reason body
chat.operations.restoreNativeSummaryObject('20000000-0000-4000-8000-000000000001');
// @ts-expect-error source binding is output-only, not a policy configuration field
const invalid: NativeSummaryPolicyUpdate={...policy,principal_user_id:'other'};
void [saved,restored,invalid];
