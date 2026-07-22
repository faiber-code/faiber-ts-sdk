import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class CrmOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/integration/docs; permission: admin:integration:read. */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/lead; permission: lead:read, lead:read_all, lead:read_own. */
  leadIndexGet(params?: T.LeadIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead`, params });
  }
  /** POST /api/v1/lead; permission: lead:create. */
  leadCreatePost(data: T.LeadCreatePostInput, options?: RequestOptions<T.LeadCreatePostInput>) {
    return this.client.request<T.LeadCreatePostResponse, T.LeadCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead`, data: data });
  }
  /** GET /api/v1/lead-campaign; permission: public/session-derived. */
  leadCampaignIndexGet(options?: RequestOptions) {
    return this.client.request<T.LeadCampaignIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-campaign` });
  }
  /** POST /api/v1/lead-campaign; permission: public/session-derived. */
  leadCampaignCreatePost(data: T.LeadCampaignCreatePostInput, options?: RequestOptions<T.LeadCampaignCreatePostInput>) {
    return this.client.request<T.LeadCampaignCreatePostResponse, T.LeadCampaignCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead-campaign`, data: data });
  }
  /** DELETE /api/v1/lead-campaign/{id}; permission: public/session-derived. */
  leadCampaignDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCampaignDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/lead-campaign/{id}; permission: public/session-derived. */
  leadCampaignShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCampaignShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/lead-campaign/{id}; permission: public/session-derived. */
  leadCampaignUpdatePut(id: Identifier, data: T.LeadCampaignUpdatePutInput, options?: RequestOptions<T.LeadCampaignUpdatePutInput>) {
    return this.client.request<T.LeadCampaignUpdatePutResponse, T.LeadCampaignUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead-campaign/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/lead-source; permission: public/session-derived. */
  leadSourceIndexGet(options?: RequestOptions) {
    return this.client.request<T.LeadSourceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-source` });
  }
  /** POST /api/v1/lead-source; permission: public/session-derived. */
  leadSourceCreatePost(data: T.LeadSourceCreatePostInput, options?: RequestOptions<T.LeadSourceCreatePostInput>) {
    return this.client.request<T.LeadSourceCreatePostResponse, T.LeadSourceCreatePostInput>({ ...options, method: "POST", url: `/api/v1/lead-source`, data: data });
  }
  /** DELETE /api/v1/lead-source/{id}; permission: public/session-derived. */
  leadSourceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadSourceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead-source/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/lead-source/{id}; permission: public/session-derived. */
  leadSourceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadSourceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead-source/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/lead-source/{id}; permission: public/session-derived. */
  leadSourceUpdatePut(id: Identifier, data: T.LeadSourceUpdatePutInput, options?: RequestOptions<T.LeadSourceUpdatePutInput>) {
    return this.client.request<T.LeadSourceUpdatePutResponse, T.LeadSourceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead-source/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/lead/{id}; permission: lead:delete. */
  leadDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/lead/{id}; permission: lead:read, lead:read_all, lead:read_own. */
  leadShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/lead/{id}; permission: lead:update. */
  leadUpdatePut(id: Identifier, data: T.LeadUpdatePutInput, options?: RequestOptions<T.LeadUpdatePutInput>) {
    return this.client.request<T.LeadUpdatePutResponse, T.LeadUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/lead/{id}/check-status; permission: lead:update. */
  leadCheckStatusGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadCheckStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/check-status` });
  }
  /** GET /api/v1/lead/{id}/log; permission: lead_log:read. */
  leadListLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadListLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/log` });
  }
  /** POST /api/v1/lead/{id}/log; permission: lead_log:create. */
  leadCreateLogPost(id: Identifier, data: T.LeadCreateLogPostInput, options?: RequestOptions<T.LeadCreateLogPostInput>) {
    return this.client.request<T.LeadCreateLogPostResponse, T.LeadCreateLogPostInput>({ ...options, method: "POST", url: `/api/v1/lead/${encodeURIComponent(id)}/log`, data: data });
  }
  /** DELETE /api/v1/lead/{id}/log/{log_id}; permission: lead_log:delete. */
  leadDestroyLogDelete(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyLogDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /** GET /api/v1/lead/{id}/log/{log_id}; permission: lead_log:read. */
  leadShowLogGet(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowLogGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /** PUT /api/v1/lead/{id}/log/{log_id}; permission: lead_log:update. */
  leadUpdateLogPut(id: Identifier, logId: Identifier, data: T.LeadUpdateLogPutInput, options?: RequestOptions<T.LeadUpdateLogPutInput>) {
    return this.client.request<T.LeadUpdateLogPutResponse, T.LeadUpdateLogPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}`, data: data });
  }
  /** PUT /api/v1/lead/{id}/move-to-done; permission: lead:update. */
  leadMoveToDonePut(id: Identifier, data: T.LeadMoveToDonePutInput, options?: RequestOptions<T.LeadMoveToDonePutInput>) {
    return this.client.request<T.LeadMoveToDonePutResponse, T.LeadMoveToDonePutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/move-to-done`, data: data });
  }
  /** GET /api/v1/lead/{id}/touch; permission: lead_touch:read. */
  leadListTouchesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadListTouchesGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/touch` });
  }
  /** POST /api/v1/lead/{id}/touch; permission: lead_touch:create. */
  leadCreateTouchPost(id: Identifier, data: T.LeadCreateTouchPostInput, options?: RequestOptions<T.LeadCreateTouchPostInput>) {
    return this.client.request<T.LeadCreateTouchPostResponse, T.LeadCreateTouchPostInput>({ ...options, method: "POST", url: `/api/v1/lead/${encodeURIComponent(id)}/touch`, data: data });
  }
  /** DELETE /api/v1/lead/{id}/touch/{touch_id}; permission: lead_touch:delete. */
  leadDestroyTouchDelete(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyTouchDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /** GET /api/v1/lead/{id}/touch/{touch_id}; permission: lead_touch:read. */
  leadShowTouchGet(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadShowTouchGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /** PUT /api/v1/lead/{id}/touch/{touch_id}; permission: lead_touch:update. */
  leadUpdateTouchPut(id: Identifier, touchId: Identifier, data: T.LeadUpdateTouchPutInput, options?: RequestOptions<T.LeadUpdateTouchPutInput>) {
    return this.client.request<T.LeadUpdateTouchPutResponse, T.LeadUpdateTouchPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}`, data: data });
  }
  /** POST /api/v1/lead/developer; permission: lead:create. */
  leadCreateDeveloperPost(data: T.LeadCreateDeveloperPostInput, options?: RequestOptions<T.LeadCreateDeveloperPostInput>) {
    return this.client.request<T.LeadCreateDeveloperPostResponse, T.LeadCreateDeveloperPostInput>({ ...options, method: "POST", url: `/api/v1/lead/developer`, data: data });
  }
  /** GET /api/v1/lead/developer/ready; permission: lead:read, lead:read_all, lead:read_own. */
  leadDeveloperReadyGet(params?: T.LeadDeveloperReadyGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadDeveloperReadyGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/developer/ready`, params });
  }
  /** GET /api/v1/lead/foreign_key; permission: lead:read, lead:read_all, lead:read_own. */
  leadByForeignKeyGet(params?: T.LeadByForeignKeyGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadByForeignKeyGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/foreign_key`, params });
  }
  /** DELETE /api/v1/lead/foreign_key/{foreign_key}/profile_id/{profile_id}/flags/{flags}; permission: lead:delete. */
  leadDestroyByForeignKeyDelete(foreignKey: Identifier, profileId: Identifier, flags: Identifier, options?: RequestOptions) {
    return this.client.request<T.LeadDestroyByForeignKeyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/lead/foreign_key/${encodeURIComponent(foreignKey)}/profile_id/${encodeURIComponent(profileId)}/flags/${encodeURIComponent(flags)}` });
  }
  /** PUT /api/v1/lead/foreign_key/{foreign_key}/profile_id/{profile_id}/flags/{flags}; permission: lead:update. */
  leadUpdateByForeignKeyPut(foreignKey: Identifier, profileId: Identifier, flags: Identifier, data: T.LeadUpdateByForeignKeyPutInput, options?: RequestOptions<T.LeadUpdateByForeignKeyPutInput>) {
    return this.client.request<T.LeadUpdateByForeignKeyPutResponse, T.LeadUpdateByForeignKeyPutInput>({ ...options, method: "PUT", url: `/api/v1/lead/foreign_key/${encodeURIComponent(foreignKey)}/profile_id/${encodeURIComponent(profileId)}/flags/${encodeURIComponent(flags)}`, data: data });
  }
  /** GET /api/v1/lead/light; permission: lead:read, lead:read_all, lead:read_own. */
  leadLightGet(params?: T.LeadLightGetQuery, options?: RequestOptions) {
    return this.client.request<T.LeadLightGetResponse>({ ...options, method: "GET", url: `/api/v1/lead/light`, params });
  }
  /** GET /api/v1/reminder; permission: reminder:read. */
  reminderIndexGet(options?: RequestOptions) {
    return this.client.request<T.ReminderIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/reminder` });
  }
  /** POST /api/v1/reminder; permission: reminder:create. */
  reminderCreatePost(data: T.ReminderCreatePostInput, options?: RequestOptions<T.ReminderCreatePostInput>) {
    return this.client.request<T.ReminderCreatePostResponse, T.ReminderCreatePostInput>({ ...options, method: "POST", url: `/api/v1/reminder`, data: data });
  }
  /** DELETE /api/v1/reminder/{id}; permission: reminder:delete. */
  reminderDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReminderDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reminder/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/reminder/{id}; permission: reminder:update. */
  reminderUpdatePut(id: Identifier, data: T.ReminderUpdatePutInput, options?: RequestOptions<T.ReminderUpdatePutInput>) {
    return this.client.request<T.ReminderUpdatePutResponse, T.ReminderUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/reminder/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/reminder/lead_id/{lead_id}; permission: reminder:delete. */
  reminderDestroyByLeadDelete(leadId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReminderDestroyByLeadDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reminder/lead_id/${encodeURIComponent(leadId)}` });
  }
  /** GET /api/v1/reminder/until-today; permission: reminder:read. */
  reminderUntilTodayGet(options?: RequestOptions) {
    return this.client.request<T.ReminderUntilTodayGetResponse>({ ...options, method: "GET", url: `/api/v1/reminder/until-today` });
  }
  /** GET /api/v1/sos; permission: sos:read, sos:read_all, sos:read_own. */
  sosIndexGet(params?: T.SosIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.SosIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/sos`, params });
  }
  /** POST /api/v1/sos; permission: sos:create. */
  sosCreatePost(data: T.SosCreatePostInput, options?: RequestOptions<T.SosCreatePostInput>) {
    return this.client.request<T.SosCreatePostResponse, T.SosCreatePostInput>({ ...options, method: "POST", url: `/api/v1/sos`, data: data });
  }
  /** DELETE /api/v1/sos/{id}; permission: sos:delete. */
  sosDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/sos/{id}; permission: sos:read. */
  sosShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/sos/{id}; permission: sos:update. */
  sosUpdatePut(id: Identifier, data: T.SosUpdatePutInput, options?: RequestOptions<T.SosUpdatePutInput>) {
    return this.client.request<T.SosUpdatePutResponse, T.SosUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/sos/{id}/log; permission: sos_log:read. */
  sosListLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosListLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/log` });
  }
  /** POST /api/v1/sos/{id}/log; permission: sos_log:create. */
  sosCreateLogPost(id: Identifier, data: T.SosCreateLogPostInput, options?: RequestOptions<T.SosCreateLogPostInput>) {
    return this.client.request<T.SosCreateLogPostResponse, T.SosCreateLogPostInput>({ ...options, method: "POST", url: `/api/v1/sos/${encodeURIComponent(id)}/log`, data: data });
  }
  /** DELETE /api/v1/sos/{id}/log/{log_id}; permission: sos_log:delete. */
  sosDestroyLogDelete(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyLogDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /** GET /api/v1/sos/{id}/log/{log_id}; permission: sos_log:read. */
  sosShowLogGet(id: Identifier, logId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowLogGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}` });
  }
  /** PUT /api/v1/sos/{id}/log/{log_id}; permission: sos_log:update. */
  sosUpdateLogPut(id: Identifier, logId: Identifier, data: T.SosUpdateLogPutInput, options?: RequestOptions<T.SosUpdateLogPutInput>) {
    return this.client.request<T.SosUpdateLogPutResponse, T.SosUpdateLogPutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}/log/${encodeURIComponent(logId)}`, data: data });
  }
  /** GET /api/v1/sos/{id}/touch; permission: sos_touch:read. */
  sosListTouchesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosListTouchesGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/touch` });
  }
  /** POST /api/v1/sos/{id}/touch; permission: sos_touch:create. */
  sosCreateTouchPost(id: Identifier, data: T.SosCreateTouchPostInput, options?: RequestOptions<T.SosCreateTouchPostInput>) {
    return this.client.request<T.SosCreateTouchPostResponse, T.SosCreateTouchPostInput>({ ...options, method: "POST", url: `/api/v1/sos/${encodeURIComponent(id)}/touch`, data: data });
  }
  /** DELETE /api/v1/sos/{id}/touch/{touch_id}; permission: sos_touch:delete. */
  sosDestroyTouchDelete(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosDestroyTouchDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /** GET /api/v1/sos/{id}/touch/{touch_id}; permission: sos_touch:read. */
  sosShowTouchGet(id: Identifier, touchId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosShowTouchGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}` });
  }
  /** PUT /api/v1/sos/{id}/touch/{touch_id}; permission: sos_touch:update. */
  sosUpdateTouchPut(id: Identifier, touchId: Identifier, data: T.SosUpdateTouchPutInput, options?: RequestOptions<T.SosUpdateTouchPutInput>) {
    return this.client.request<T.SosUpdateTouchPutResponse, T.SosUpdateTouchPutInput>({ ...options, method: "PUT", url: `/api/v1/sos/${encodeURIComponent(id)}/touch/${encodeURIComponent(touchId)}`, data: data });
  }
  /** GET /api/v1/sos/all; permission: sos:read, sos:read_all, sos:read_own. */
  sosAllGet(params?: T.SosAllGetQuery, options?: RequestOptions) {
    return this.client.request<T.SosAllGetResponse>({ ...options, method: "GET", url: `/api/v1/sos/all`, params });
  }
  /** POST /api/v1/sos/exit_assignee/{profile_id}; permission: sos:update, sos:update_all, sos:update_own. */
  sosExitAssigneeRoutePost(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.SosExitAssigneeRoutePostResponse>({ ...options, method: "POST", url: `/api/v1/sos/exit_assignee/${encodeURIComponent(profileId)}` });
  }
  /** GET /api/v1/stats/daily; permission: stats:read. */
  statsDailyGet(options?: RequestOptions) {
    return this.client.request<T.StatsDailyGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/daily` });
  }
  /** GET /api/v1/stats/lead; permission: stats:read, stats:read_all, stats:read_own. */
  statsLeadGet(options?: RequestOptions) {
    return this.client.request<T.StatsLeadGetResponse>({ ...options, method: "GET", url: `/api/v1/stats/lead` });
  }
  /** GET /api/v1/team; permission: team:read. */
  teamIndexGet(params?: T.TeamIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TeamIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/team`, params });
  }
  /** POST /api/v1/team; permission: team:create. */
  teamCreatePost(data: T.TeamCreatePostInput, options?: RequestOptions<T.TeamCreatePostInput>) {
    return this.client.request<T.TeamCreatePostResponse, T.TeamCreatePostInput>({ ...options, method: "POST", url: `/api/v1/team`, data: data });
  }
  /** GET /api/v1/team-users; permission: team_user:read. */
  teamUserIndexGet(params?: T.TeamUserIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TeamUserIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/team-users`, params });
  }
  /** POST /api/v1/team-users; permission: team_user:create. */
  teamUserCreatePost(data: T.TeamUserCreatePostInput, options?: RequestOptions<T.TeamUserCreatePostInput>) {
    return this.client.request<T.TeamUserCreatePostResponse, T.TeamUserCreatePostInput>({ ...options, method: "POST", url: `/api/v1/team-users`, data: data });
  }
  /** DELETE /api/v1/team-users/{id}; permission: team_user:delete. */
  teamUserDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamUserDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/team-users/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/team-users/{id}; permission: team_user:read. */
  teamUserShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamUserShowGetResponse>({ ...options, method: "GET", url: `/api/v1/team-users/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/team-users/{id}; permission: team_user:update. */
  teamUserUpdatePut(id: Identifier, data: T.TeamUserUpdatePutInput, options?: RequestOptions<T.TeamUserUpdatePutInput>) {
    return this.client.request<T.TeamUserUpdatePutResponse, T.TeamUserUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/team-users/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/team-users/multi-profiles; permission: team_user:create. */
  teamUserMultiProfilesPost(data: T.TeamUserMultiProfilesPostInput, options?: RequestOptions<T.TeamUserMultiProfilesPostInput>) {
    return this.client.request<T.TeamUserMultiProfilesPostResponse, T.TeamUserMultiProfilesPostInput>({ ...options, method: "POST", url: `/api/v1/team-users/multi-profiles`, data: data });
  }
  /** DELETE /api/v1/team/{id}; permission: team:delete. */
  teamDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/team/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/team/{id}; permission: team:read. */
  teamShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TeamShowGetResponse>({ ...options, method: "GET", url: `/api/v1/team/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/team/{id}; permission: team:update. */
  teamUpdatePut(id: Identifier, data: T.TeamUpdatePutInput, options?: RequestOptions<T.TeamUpdatePutInput>) {
    return this.client.request<T.TeamUpdatePutResponse, T.TeamUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/team/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/webhook; permission: public/session-derived. */
  webhookIndexGet(options?: RequestOptions) {
    return this.client.request<T.WebhookIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/webhook` });
  }
  /** POST /api/v1/webhook; permission: public/session-derived. */
  webhookCreatePost(data: T.WebhookCreatePostInput, options?: RequestOptions<T.WebhookCreatePostInput>) {
    return this.client.request<T.WebhookCreatePostResponse, T.WebhookCreatePostInput>({ ...options, method: "POST", url: `/api/v1/webhook`, data: data });
  }
  /** DELETE /api/v1/webhook/{id}; permission: public/session-derived. */
  webhookDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebhookDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/webhook/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/webhook/{id}; permission: public/session-derived. */
  webhookShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WebhookShowGetResponse>({ ...options, method: "GET", url: `/api/v1/webhook/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/webhook/{id}; permission: public/session-derived. */
  webhookUpdatePut(id: Identifier, data: T.WebhookUpdatePutInput, options?: RequestOptions<T.WebhookUpdatePutInput>) {
    return this.client.request<T.WebhookUpdatePutResponse, T.WebhookUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/webhook/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/workflow; permission: workflow:read, workflow:read_all, workflow:read_own. */
  workflowIndexGet(params?: T.WorkflowIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorkflowIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow`, params });
  }
  /** POST /api/v1/workflow; permission: workflow:create. */
  workflowCreatePost(data: T.WorkflowCreatePostInput, options?: RequestOptions<T.WorkflowCreatePostInput>) {
    return this.client.request<T.WorkflowCreatePostResponse, T.WorkflowCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow`, data: data });
  }
  /** GET /api/v1/workflow-members; permission: workflow_member:read. */
  workflowMemberIndexGet(options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members` });
  }
  /** DELETE /api/v1/workflow-members/{id}; permission: workflow_member:delete. */
  workflowMemberDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow-members/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/workflow-members/{id}; permission: workflow_member:read. */
  workflowMemberShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members/${encodeURIComponent(id)}` });
  }
  /** POST /api/v1/workflow-members/{id}; permission: workflow_member:create. */
  workflowMemberCreatePost(id: Identifier, data: T.WorkflowMemberCreatePostInput, options?: RequestOptions<T.WorkflowMemberCreatePostInput>) {
    return this.client.request<T.WorkflowMemberCreatePostResponse, T.WorkflowMemberCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow-members/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/workflow-members/{id}; permission: workflow_member:update. */
  workflowMemberUpdatePut(id: Identifier, data: T.WorkflowMemberUpdatePutInput, options?: RequestOptions<T.WorkflowMemberUpdatePutInput>) {
    return this.client.request<T.WorkflowMemberUpdatePutResponse, T.WorkflowMemberUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow-members/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/workflow-members/workflow/{workflow_id}; permission: workflow_member:read. */
  workflowMemberByWorkflowGet(workflowId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberByWorkflowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-members/workflow/${encodeURIComponent(workflowId)}` });
  }
  /** GET /api/v1/workflow-node; permission: workflow_node:read, workflow_node:read_all, workflow_node:read_own. */
  workflowNodeIndexGet(params?: T.WorkflowNodeIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node`, params });
  }
  /** DELETE /api/v1/workflow-node/{id}; permission: workflow_node:delete. */
  workflowNodeDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/workflow-node/{id}; permission: workflow_node:read. */
  workflowNodeShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowNodeShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow-node/${encodeURIComponent(id)}` });
  }
  /** POST /api/v1/workflow-node/{id}; permission: workflow_node:create. */
  workflowNodeCreatePost(id: Identifier, data: T.WorkflowNodeCreatePostInput, options?: RequestOptions<T.WorkflowNodeCreatePostInput>) {
    return this.client.request<T.WorkflowNodeCreatePostResponse, T.WorkflowNodeCreatePostInput>({ ...options, method: "POST", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/workflow-node/{id}; permission: workflow_node:update. */
  workflowNodeUpdatePut(id: Identifier, data: T.WorkflowNodeUpdatePutInput, options?: RequestOptions<T.WorkflowNodeUpdatePutInput>) {
    return this.client.request<T.WorkflowNodeUpdatePutResponse, T.WorkflowNodeUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow-node/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/workflow/{id}; permission: workflow:delete. */
  workflowDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/workflow/{id}; permission: workflow:read, workflow:read_all, workflow:read_own. */
  workflowShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkflowShowGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/workflow/{id}; permission: workflow:update. */
  workflowUpdatePut(id: Identifier, data: T.WorkflowUpdatePutInput, options?: RequestOptions<T.WorkflowUpdatePutInput>) {
    return this.client.request<T.WorkflowUpdatePutResponse, T.WorkflowUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/workflow/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/workflow/member-based; permission: workflow:read, workflow:read_all, workflow:read_own. */
  workflowMemberBasedGet(options?: RequestOptions) {
    return this.client.request<T.WorkflowMemberBasedGetResponse>({ ...options, method: "GET", url: `/api/v1/workflow/member-based` });
  }
  /** GET /api/v1/worklog; permission: worklog:read, worklog:read_all, worklog:read_own. */
  worklogIndexGet(params?: T.WorklogIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.WorklogIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog`, params });
  }
  /** POST /api/v1/worklog; permission: worklog:create. */
  worklogCreatePost(data: T.WorklogCreatePostInput, options?: RequestOptions<T.WorklogCreatePostInput>) {
    return this.client.request<T.WorklogCreatePostResponse, T.WorklogCreatePostInput>({ ...options, method: "POST", url: `/api/v1/worklog`, data: data });
  }
  /** DELETE /api/v1/worklog/{id}; permission: worklog:delete. */
  worklogDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorklogDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/worklog/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/worklog/{id}; permission: worklog:read, worklog:read_all, worklog:read_own. */
  worklogShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorklogShowGetResponse>({ ...options, method: "GET", url: `/api/v1/worklog/${encodeURIComponent(id)}` });
  }
  /** PUT /api/v1/worklog/{id}; permission: worklog:update. */
  worklogUpdatePut(id: Identifier, data: T.WorklogUpdatePutInput, options?: RequestOptions<T.WorklogUpdatePutInput>) {
    return this.client.request<T.WorklogUpdatePutResponse, T.WorklogUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/worklog/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /health; permission: public/session-derived. */
  routerStatusRouteGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /** GET /up; permission: public/session-derived. */
  routerStatusRouteGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}

