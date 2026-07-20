import type { ApiEnvelope, CursorResult, Identifier, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";

export type RelationshipStatus = "invited" | "active" | "paused" | "ended";
export type PlanStatus = "draft" | "published" | "archived";
export type PlanKind = "workout" | "nutrition";

export interface CoachAthleteRelationship { id: Identifier; coach_id: Identifier; athlete_id: Identifier; status: RelationshipStatus; started_at?: string | null; ended_at?: string | null; created_at?: string; updated_at?: string; }
export interface CreateRelationshipInput { coach_id: Identifier; athlete_id: Identifier; status?: RelationshipStatus; }
export interface UpdateRelationshipInput { status?: RelationshipStatus; ended_at?: string | null; }
export type RelationshipListResponse = ResourceListResponse<CoachAthleteRelationship>;
export type RelationshipResponse = ResourceResponse<CoachAthleteRelationship>;

export interface Invitation { id: Identifier; coach_id: Identifier; athlete_email?: string | null; athlete_phone?: string | null; status: "pending" | "accepted" | "declined" | "expired"; expires_at?: string | null; created_at?: string; }
export interface CreateInvitationInput { athlete_email?: string; athlete_phone?: string; expires_at?: string; }
export interface UpdateInvitationInput { status: "accepted" | "declined"; }
export type InvitationListResponse = ResourceListResponse<Invitation>;
export type InvitationResponse = ResourceResponse<Invitation>;

export interface PlanExercise { id: Identifier; name: string; sets?: number; reps?: string; rest_seconds?: number; video_url?: string | null; notes?: string | null; }
export interface PlanMeal { id: Identifier; name: string; time?: string; calories?: number; protein?: number; carbs?: number; fat?: number; notes?: string | null; }
export interface PlanDay { day: string; exercises?: PlanExercise[]; meals?: PlanMeal[]; notes?: string | null; }
export interface FitnessPlan { id: Identifier; kind: PlanKind; coach_id: Identifier; athlete_id: Identifier; title: string; version: number; status: PlanStatus; days: PlanDay[]; coach_notes?: string | null; published_at?: string | null; created_at?: string; updated_at?: string; }
export interface CreateFitnessPlanInput { kind: PlanKind; athlete_id: Identifier; title: string; days: PlanDay[]; coach_notes?: string; }
export interface UpdateFitnessPlanInput { title?: string; days?: PlanDay[]; coach_notes?: string | null; status?: PlanStatus; }
export type FitnessPlanListResponse = ResourceListResponse<FitnessPlan>;
export type FitnessPlanResponse = ResourceResponse<FitnessPlan>;

export interface ActivityLog { id: Identifier; athlete_id: Identifier; plan_id: Identifier; exercise_id: Identifier; plan_date: string; completed: boolean; completed_at?: string | null; duration_seconds?: number | null; }
export interface UpsertActivityInput { athlete_id?: Identifier; plan_id: Identifier; exercise_id: Identifier; plan_date: string; completed: boolean; duration_seconds?: number; }
export type ActivityListResponse = ResourceListResponse<ActivityLog>;
export type ActivityResponse = ResourceResponse<ActivityLog>;

export interface BodyMeasurement { id: Identifier; athlete_id: Identifier; measured_at: string; weight?: number | null; body_fat_percent?: number | null; chest?: number | null; waist?: number | null; hips?: number | null; notes?: string | null; }
export interface CreateBodyMeasurementInput { athlete_id?: Identifier; measured_at: string; weight?: number | null; body_fat_percent?: number | null; chest?: number | null; waist?: number | null; hips?: number | null; notes?: string | null; }
export type UpdateBodyMeasurementInput = Partial<CreateBodyMeasurementInput>;
export type BodyMeasurementListResponse = ResourceListResponse<BodyMeasurement>;
export type BodyMeasurementResponse = ResourceResponse<BodyMeasurement>;

export interface Conversation { id: Identifier; coach_id: Identifier; athlete_id: Identifier; last_message_at?: string | null; unread_count?: number; created_at?: string; archived?: boolean; }
export interface CreateConversationInput { coach_id: Identifier; athlete_id: Identifier; }
export interface UpdateConversationInput { archived?: boolean; }
export type ConversationListResponse = ResourceListResponse<Conversation>;
export type ConversationResponse = ResourceResponse<Conversation>;
export interface Message { id: Identifier; conversation_id: Identifier; sender_id: Identifier; body: string; client_id?: string | null; sent_at: string; read_at?: string | null; }
export interface SendMessageInput { body: string; client_id: string; }
export interface MessageCursorResponse extends ApiEnvelope<CursorResult<Message>> {}
export interface MarkConversationReadInput { through_message_id?: Identifier; }
export interface DashboardSummary { workouts_completed: number; current_streak: number; active_minutes: number; calories_burned?: number; latest_measurement?: BodyMeasurement | null; }
export interface DashboardSummaryResponse extends ApiEnvelope<DashboardSummary> {}
