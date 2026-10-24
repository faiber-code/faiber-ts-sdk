import type {Version, VersionChannel, VersionScope, VersionOpenApiDocument, RouterStatusRouteGetResponse, RouterOpenapiJsonGetResponse} from '@faiber/faiber-version';
declare const version: Version;
const channel: VersionChannel = version.channel;
const scope: VersionScope = version.scope;
// @ts-expect-error database spellings are not serialized wire variants
const invalidChannel: VersionChannel = 'pre_release';
// @ts-expect-error scope wire variants are case-sensitive
const invalidScope: VersionScope = 'closed';
declare const health: RouterStatusRouteGetResponse;
const healthVersion: string = health.data.version;
declare const raw: RouterOpenapiJsonGetResponse;
const document: VersionOpenApiDocument = raw;
const openapi: string = document.openapi;
void [channel,scope,invalidChannel,invalidScope,healthVersion,openapi];

import type {ServiceVersionSummary, ServiceWithVersions, ServiceResponse} from '@faiber/faiber-version';
declare const summary: ServiceVersionSummary;
const title: string | null = summary.title;
const latest: Version | null = summary.last_version;
const description: string | null = version.description;
const changelog: string | null = version.change_log;
const url: string | null = version.download_url;
const modified: string | null = version.updated_at;
// @ts-expect-error nullable response keys cannot be undefined
const missingTitle: typeof summary.title = undefined;
// @ts-expect-error release metadata is present even when null
const missingDescription: typeof version.description = undefined;
declare const history: ServiceWithVersions;
// @ts-expect-error history has versions instead of last_version
const unsupportedLatest = history.last_version;
declare const serviceRead: ServiceResponse;
const status: 'success' = serviceRead.status;
const message: string = serviceRead.message;
void [title,latest,description,changelog,url,modified,missingTitle,missingDescription,unsupportedLatest,status,message];

import type {VersionApi} from '@faiber/faiber-version';
declare const versions: VersionApi;
// @ts-expect-error the service identifier is a slug string, never a numeric identifier
versions.operations.serviceServiceShowGet(42);
// @ts-expect-error history also uses an exact slug string
versions.operations.serviceServiceShowAllGet(42);
// @ts-expect-error a release UUID is a string, never a numeric identifier
versions.operations.versionVersionShowGet(42);
