import {CommunityApi,TaskApi,type CommunityAnalysisInput,type CommunityGiftInput} from '../packages/task/src/index.js';
import {SocialApi} from '../packages/social/src/index.js';
import {DoEconomyApi,type DoPolicy,type DoEffectivePolicy} from '../packages/asset/src/index.js';
import {FaiberClient} from '../packages/core/src/index.js';
const client=new FaiberClient('task',{domains:{task:'https://task.example.test'}});
const community:CommunityApi=new TaskApi(client).community;
const input:CommunityAnalysisInput={request_id:'id',version:0,locale:'en',display_name:'Name',answers:{occupation:'Designer'}};
void community.analyze(input,{signal:new AbortController().signal});
const gift:CommunityGiftInput={request_id:'id',gift_id:'flower'};
void new SocialApi(client).operations.communityGiftPost('user',gift);
// @ts-expect-error Client callers never choose the transfer price.
const untrusted:CommunityGiftInput={...gift,coins:100};void untrusted;
declare const oldPolicy:DoPolicy;
void new DoEconomyApi(client).savePolicy({version:1,reason:'Audit reason',policy:oldPolicy});
declare const effective:DoEffectivePolicy;const schedule:number[]=effective.daily_checkin_rewards;void schedule;
