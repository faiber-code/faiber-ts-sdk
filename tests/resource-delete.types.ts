import type { AxiosResponse } from 'axios';
import { RestResource, type ApiEnvelope, type DeleteResponse, type PageQuery, type ResourceListResponse, type ResourceResponse } from '@faiber/sdk-core';
interface Entity { id: string; name: string }
declare const legacy: RestResource<Entity>;
declare const nullDeletion: RestResource<Entity, Partial<Entity>, Partial<Entity>, ResourceListResponse<Entity>, ResourceResponse<Entity>, PageQuery, ApiEnvelope<null>>;
const legacyResult: Promise<AxiosResponse<DeleteResponse>> = legacy.delete('one');
const actualResult: Promise<AxiosResponse<ApiEnvelope<null>>> = nullDeletion.delete('one');
// @ts-expect-error A service returning null must not promise a fabricated deleted flag.
const inventedResult: Promise<AxiosResponse<DeleteResponse>> = nullDeletion.delete('one');
void [legacyResult, actualResult, inventedResult];
