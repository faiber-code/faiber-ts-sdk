import { RestResource, ServiceApi, type CursorQuery, type Identifier, type QueryParams, type RequestOptions, type ResourceResponse } from "@faiber/sdk-core";
import type * as T from "./types.js";

export class FitappApi extends ServiceApi {
    readonly relationships = new RestResource<T.CoachAthleteRelationship, T.CreateRelationshipInput, T.UpdateRelationshipInput, T.RelationshipListResponse, T.RelationshipResponse>(this.client, "/api/v1/relationships");
    readonly invitations = new RestResource<T.Invitation, T.CreateInvitationInput, T.UpdateInvitationInput, T.InvitationListResponse, T.InvitationResponse>(this.client, "/api/v1/invitations");
    readonly plans = new RestResource<T.FitnessPlan, T.CreateFitnessPlanInput, T.UpdateFitnessPlanInput, T.FitnessPlanListResponse, T.FitnessPlanResponse>(this.client, "/api/v1/plans");
    readonly activities = new RestResource<T.ActivityLog, T.UpsertActivityInput, T.UpsertActivityInput, T.ActivityListResponse, T.ActivityResponse>(this.client, "/api/v1/activities");
    readonly measurements = new RestResource<T.BodyMeasurement, T.CreateBodyMeasurementInput, T.UpdateBodyMeasurementInput, T.BodyMeasurementListResponse, T.BodyMeasurementResponse>(this.client, "/api/v1/measurements");
    readonly conversations = new RestResource<T.Conversation, T.CreateConversationInput, T.UpdateConversationInput, T.ConversationListResponse, T.ConversationResponse>(this.client, "/api/v1/conversations");
    assignedPlans(params?: QueryParams, options?: RequestOptions) { return this.client.get<T.FitnessPlanListResponse>("/api/v1/plans/assigned", params, options); }
    publishPlan(id: Identifier, options?: RequestOptions) { return this.client.post<T.FitnessPlanResponse>(`/api/v1/plans/${encodeURIComponent(id)}/publish`, undefined, options); }
    upsertActivity(data: T.UpsertActivityInput, options?: RequestOptions<T.UpsertActivityInput>) { return this.client.put<T.ActivityResponse, T.UpsertActivityInput>("/api/v1/activities/completion", data, options); }
    dashboard(params?: QueryParams, options?: RequestOptions) { return this.client.get<T.DashboardSummaryResponse>("/api/v1/dashboard", params, options); }
    messages(id: Identifier, params?: CursorQuery, options?: RequestOptions) { return this.client.get<T.MessageCursorResponse>(`/api/v1/conversations/${encodeURIComponent(id)}/messages`, params, options); }
    sendMessage(id: Identifier, data: T.SendMessageInput, options?: RequestOptions<T.SendMessageInput>) { return this.client.post<ResourceResponse<T.Message>, T.SendMessageInput>(`/api/v1/conversations/${encodeURIComponent(id)}/messages`, data, options); }
    markRead(id: Identifier, data: T.MarkConversationReadInput = {}, options?: RequestOptions<T.MarkConversationReadInput>) { return this.client.put<T.ConversationResponse, T.MarkConversationReadInput>(`/api/v1/conversations/${encodeURIComponent(id)}/read`, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
