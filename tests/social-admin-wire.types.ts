import type {SocialAdminPolicyInput,SocialAdminCreateRestrictionInput,SocialAdminPostDetail,AdminPostsGetResponse,AdminMediaGetQuery,AdminReplayIntegrationPostResponse} from '@faiber/faiber-social';
const policy:SocialAdminPolicyInput={category_id:'category-uuid',config:{subject:{required:true}}};
// @ts-expect-error unsupported top-level policy section
const invalidPolicy:SocialAdminPolicyInput={category_id:'category-uuid',config:{unsupported:{}}};
const restriction:SocialAdminCreateRestrictionInput={user_id:'user-uuid',scope:'comment',reason:'Operator review'};
// @ts-expect-error only supported scopes are allowed
const invalidRestriction:SocialAdminCreateRestrictionInput={user_id:'user-uuid',scope:'billing',reason:'Review'};
declare const posts:AdminPostsGetResponse;
const total:number=posts.meta.total;
declare const detail:SocialAdminPostDetail;
const encryptedProjectionAbsent:string|null=detail.capabilities.location?.public_label??null;
const mime:AdminMediaGetQuery={status:'image/jpeg'};
declare const replay:AdminReplayIntegrationPostResponse;
const pending:'pending'=replay.data.status;
void [policy,invalidPolicy,restriction,invalidRestriction,total,encryptedProjectionAbsent,mime,pending];
