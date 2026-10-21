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

import type {SocialFollowTargetKind,SocialDiscoveryPost,DiscoveryRelationshipGetResponse,CreatePostInput} from '@faiber/faiber-social';
const kind:SocialFollowTargetKind='place';
// @ts-expect-error graph targets have exact supported kinds
const badKind:SocialFollowTargetKind='organization';
const idempotentPost:CreatePostInput={body:'Publish once',request_key:'request-uuid',capabilities:{version:1,location:{latitude:35.7,longitude:51.4,public_label:'Area',access_policy:'author_only'}}};
declare const publicPost:SocialDiscoveryPost;
const expires:string|null=publicPost.expires_at;
declare const relationship:DiscoveryRelationshipGetResponse;
const following:boolean=relationship.data.following;
void [kind,badKind,idempotentPost,expires,following];

// Final immutable Social pin: concrete claims/capabilities, nullable Option inputs, and raw bytes.
import type {ApiGetMediaGetResponse,ApiCreateClaimPostInput,ApiClaimDetailGetResponse,ApiMyClaimsGetResponse,ApiReceiveFundingEventPostInput,ApiReceiveFundingEventPostResponse,ApiSetFeedLocationPutResponse,ApiGetFeedLocationGetResponse,ApiModeratePostResponse,ApiUpdatePostPatchInput,ApiCreateCategoryPostInput,ApiCreatePostPostInput} from '@faiber/faiber-social';
const nullablePost:ApiUpdatePostPatchInput={category_id:null,title:null,body:null,kind:null,media:null};
const nullableCategory:ApiCreateCategoryPostInput={slug:'community',name:{en:'Community'},icon:null,color:null};
const nullableCreate:ApiCreatePostPostInput={body:'Body',category_id:null,request_key:null,capabilities:null};
const claimInput:ApiCreateClaimPostInput={message:'I can help',evidence:{photos:['asset-uuid']}};
// @ts-expect-error the service only accepts seven supported reactions, not arbitrary strings
const invalidReaction:import('@faiber/faiber-social').ApiSetPostReactionPutInput={reaction_type:'confetti'};
// @ts-expect-error supported funding states exclude initial awaiting_funding
const invalidFunding:ApiReceiveFundingEventPostInput={external_event_id:'event',post_id:'post',external_reference:'ref',status:'awaiting_funding',unit:'money',code:'USD',amount:'2'};
declare const bytes:ApiGetMediaGetResponse;
const binary:ArrayBuffer|Uint8Array=bytes;
declare const claimDetail:ApiClaimDetailGetResponse;
const mutual:boolean=claimDetail.data.mutual_contact_consent;
const outcome:string|null|undefined=claimDetail.data.resolution?.outcome;
declare const claimPage:ApiMyClaimsGetResponse;
const claimTotal:number=claimPage.meta.total;
declare const fundingResult:ApiReceiveFundingEventPostResponse;
if(!fundingResult.data.duplicate){const status:import('@faiber/faiber-social').SocialFundingStatus=fundingResult.data.status;void status;}
// @ts-expect-error duplicate acknowledgments intentionally omit status
if(fundingResult.data.duplicate){const status=fundingResult.data.status;void status;}
declare const savedLocation:ApiSetFeedLocationPutResponse;
const latitude:number=savedLocation.data.latitude;
declare const optionalLocation:ApiGetFeedLocationGetResponse;
const maybeLatitude:number|undefined=optionalLocation.data?.latitude;
declare const moderated:ApiModeratePostResponse;
const action:import('@faiber/faiber-social').ModerateTargetInput['action']=moderated.data.action;
// @ts-expect-error prior state belongs to audit records, not action receipts
const previous=moderated.data.previous_status;
void [nullablePost,nullableCategory,nullableCreate,claimInput,invalidReaction,invalidFunding,binary,mutual,outcome,claimTotal,latitude,maybeLatitude,action,previous];
