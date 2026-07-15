import { RestResource, ServiceApi, type Identifier, type JsonObject, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
export class ProfileApi extends ServiceApi {
  readonly profiles = new RestResource(this.client, "/api/v1/profile"); readonly countries = new RestResource(this.client, "/api/v1/country"); readonly provinces = new RestResource(this.client, "/api/v1/province"); readonly cities = new RestResource(this.client, "/api/v1/city"); readonly settings = new RestResource(this.client, "/api/v1/setting"); readonly surveys = new RestResource(this.client, "/api/v1/survey"); readonly work = new RestResource(this.client, "/api/v1/work"); readonly education = new RestResource(this.client, "/api/v1/education"); readonly greetings = new RestResource(this.client, "/api/v1/greetings");
  byRole(role: "manager"|"accountant"|"support"|"consultant"|"teacher"|"student"|"parent"|"other", params?: QueryParams, options?: RequestOptions) { return this.client.get(`/api/v1/profile/${role}`, params, options); }
  full(id: Identifier, options?: RequestOptions) { return this.client.get(`/api/v1/profile/${encodeURIComponent(id)}/full`, undefined, options); }
  media(id: Identifier, options?: RequestOptions) { return this.client.get(`/api/v1/profile/${encodeURIComponent(id)}/media`, undefined, options); }
  setStatus(id: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/profile/${encodeURIComponent(id)}/status`, data, options); }
  personalInformation(id: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/profile/update/personal-information/${encodeURIComponent(id)}`, data, options); }
  educationInformation(id: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/profile/update/education-information/${encodeURIComponent(id)}`, data, options); }
}
export * from "@faiber/sdk-core";
