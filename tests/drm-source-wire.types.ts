import { DrmApi, type DrmMediaRecord, type DrmMediaType, type DrmPage, type DrmCompositionAnalysis, type DrmMixedMediaUpdate, type DrmConfig, type DrmPartInput, type DrmPackageQuery, type DrmUploadSessionResponse, type DrmHealth } from '@faiber/faiber-drm';
declare const api: DrmApi;
declare const media: DrmMediaRecord;
const image: DrmMediaType = 'image';
const filename: string | null = media.original_filename;
const transcript: string | null | undefined = media.transcription?.transcript;
const archived: string | null = media.archived_at;
declare const page: DrmPage<DrmMediaRecord>;
const first: DrmMediaRecord | undefined = page.data[0];
declare const analysis: DrmCompositionAnalysis;
const summary: string | null = analysis.summary;
declare const session: DrmUploadSessionResponse;
const partNumber: number | undefined = session.parts[0]?.part_number;
declare const health: DrmHealth;
const endpoint: string | null = health.storage.endpoint;
const clearCategory: DrmMixedMediaUpdate = { category_id: null, transcription_language: 'auto', status: 'draft' };
const config: DrmConfig = { allow_video_only_on_audio_error: true };
const part: DrmPartInput = { title: 'Exercise', state: 'Task', textual: { question: 'Why?' } };
const licenseQuery: DrmPackageQuery = { package_id: 'package-id' };
// @ts-expect-error package_id is required by the license handler
const missingPackage: DrmPackageQuery = {};
// @ts-expect-error invalid content state rejected by source validation
const invalidPart: DrmPartInput = { title: 'Exercise', state: 'unknown' };
// @ts-expect-error invalid language is rejected by source validation
const invalidLanguage: DrmMixedMediaUpdate = { transcription_language: 'xx' };
async function consume() {
  const listed = await api.media();
  const data: DrmMediaRecord[] = listed.data.data;
  const nullable: DrmCompositionAnalysis | null = (await api.mixedMediaAnalysis('id')).data;
  const bytes: ArrayBuffer = (await api.packageFile('package', 'video/segment.m4s')).data;
  const deleted: void = (await api.deleteMedia('id')).data;
  await api.uploadPart('session', 1, new Uint8Array([1]));
  await api.clearKeyLicense({ package_id: 'package-id' });
  await api.drmStatuses({ ids: 'one,two' });
  await api.regenerateMediaPackages('media', null);
  await api.retryPackageJob('job', undefined);
  // @ts-expect-error raw-byte part number must be numeric
  await api.uploadPart('session', '1', new Uint8Array([1]));
  // @ts-expect-error comma-separated ids query is required
  await api.drmStatuses();
  // @ts-expect-error license query is required
  await api.clearKeyLicense();
  return [data, nullable, bytes, deleted];
}
void [image, filename, transcript, archived, first, summary, partNumber, endpoint, clearCategory, config, part, licenseQuery, missingPackage, invalidPart, invalidLanguage, consume];
