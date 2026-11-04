import type { ProfileApi, ProfileChatContext, ProfileLocalizedName, ProfileLifecycleRule, FitnessMeal, FitnessTrialTariff, SummaryLatest, SummaryJob } from '@faiber/faiber-profile';
import type { FaiberSDK } from '@faiber/faiber-ts-sdk';
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

async function profileListingFields(sdk: FaiberSDK, userId: string, referrerUserId: string) {
  const list = await sdk.profile.byRole('student');
  const listed = list.data.data.profiles[0];
  const search = await sdk.profile.operations.profileSearchSearchPost({ search: 'Ava', include: ['properties'] });
  const hit = search.data.data.results[0];
  if (!listed || !hit) return;

  const birthday: string | null = listed.birthday;
  const createdAt: string = listed.created_at;
  const referrer: string | null = listed.referrer_uuid;
  const { core } = hit;
  const searchBirthday: string | null = core.birthday;
  const searchCreatedAt: string = core.created_at;
  const searchReferrer: string | null = core.referrer_uuid;
  await sdk.profile.educationInformation(userId, { referrer_uuid: referrerUserId });
  await sdk.profile.educationInformation(userId, { referrer_uuid: null });
  return [birthday, createdAt, referrer, searchBirthday, searchCreatedAt, searchReferrer];
}

void [name,rule,meal,tariff,status,id,names];
