import type { ProfileApi, ProfileChatContext, ProfileLocalizedName, ProfileLifecycleRule, FitnessMeal, FitnessTrialTariff, SummaryLatest, SummaryJob } from '@faiber/faiber-profile';
declare const profile: ProfileApi;
declare const chat: ProfileChatContext;
declare const summary: SummaryLatest;
declare const job: SummaryJob;
const name: ProfileLocalizedName = { fa: null, en: 'Ava' };
const rule: ProfileLifecycleRule = {all:[{fact:'profile.status',value:'active'},{elapsed:{since:'state_anchors.student',unit:'days'},op:'gte',value:3}]};
const meal: FitnessMeal = {name:'Breakfast',foods:[],calories:350,protein:20,carbs:50,fat:7};
const tariff: FitnessTrialTariff = {source:'trial',amount_irr:0,duration_days:30};
const status: string|null|undefined = summary.job_status;
const id: string = job.configuration_id;
const names: ProfileLocalizedName|null|undefined = chat.profile.first_name;
// @ts-expect-error Media key query is required.
profile.operations.profileMediaShowGet('owner');
// @ts-expect-error Expected draft version is mandatory for update.
profile.summaries.updateConfiguration('configuration', {configuration:{role_id:'role'}});
profile.summaries.updateConfiguration('configuration', {configuration:{role_id:'role'},expected_version:1});
void [name,rule,meal,tariff,status,id,names];
