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
