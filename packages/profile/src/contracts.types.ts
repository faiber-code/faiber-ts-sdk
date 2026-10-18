/** Wire models reviewed against the pinned service handlers and repositories. */
import type { ApiEnvelope, JsonObject, JsonValue } from '@faiber/sdk-core';
export type FitnessProduct = 'ai_workout'|'ai_meal'|'ai_bundle'|'ai_meal_upgrade'|'human'|'support'|'vip'|'platinum'|'trial_bundle';
export type FitnessWeekday = 'monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'|'sunday';
export interface FitnessText { fa: string; en: string }
export interface FitnessIntake { age: number; height_cm: number; weight_kg: number; waist_cm: number; goal: string; experience: string; training_days: FitnessWeekday[]; session_minutes: number; equipment: string[]; dietary_preferences: string; allergies: string[]; injuries: string; limitations: string; pregnant: boolean; medical_limitations: boolean; locale: 'fa'|'en' }
export interface FitnessIntakeDraft { user_id: string; body: FitnessIntake; version: number; updated_at: string }
export interface FitnessNutrition { calories: number; protein: number; carbs: number; fat: number }
export interface FitnessFoodPortion { foodId: string; grams: number; name?: FitnessText; nutrition?: FitnessNutrition }
export interface FitnessMeal { name: string; foods: FitnessFoodPortion[]; totals?: FitnessNutrition }
export interface FitnessExercise { id: string; sessionId: string; name: string; instructions: string; sets: number; restSeconds: number; reps: string; courseId?: string | null; videoUrl?: string | null; thumbnail?: string | null; categoryId?: string | null; catalogReleaseId?: string | null }
export interface FitnessWorkoutDay { title?: string; focus?: string; duration?: number; exercises: FitnessExercise[] }
export interface FitnessMealDay { breakfast: FitnessMeal; lunch: FitnessMeal; dinner: FitnessMeal; snack: FitnessMeal; totals?: FitnessNutrition }
/** Plan validators own catalog identities and nutrition; arbitrary presentation extensions are JSON data. */
export interface FitnessPlan { weeklyWorkouts: Record<FitnessWeekday,FitnessWorkoutDay>; weeklyMeals?: Partial<Record<FitnessWeekday,FitnessMealDay>>; title?: string; description?: string }
export interface FitnessModelSettings { model_ref: string; stt_model_ref: string; tts_model_ref: string; coach_assistant_id?: string; generator_assistant_id?: string; pilot_user_ids?: string[]; asset_products?: Partial<Record<FitnessProduct,string>> }
export interface FitnessGym { id: string; manager_user_id: string; ai_coach_user_id: string; name: string; is_main: boolean; enabled: boolean; settings: FitnessModelSettings; version: number; created_at: string }
export type FitnessOrderStatus = 'awaiting_payment'|'payment_failed'|'queued'|'generating'|'generation_failed'|'awaiting_coach'|'accepted'|'declined'|'active'|'refund_requested'|'refunded'|'cancelled';
export interface FitnessTariff { id: string; coach_user_id: string; asset_product_id: string; title: FitnessText; amount_irr: number; duration_days: number; includes_meals: boolean; enabled: boolean; version: number; coach_name?: FitnessText }
export interface FitnessProductTariff { asset_product_id: string; amount_irr: number; currency: string; duration_days: number; chat_limit?: number }
export interface FitnessOrder { id: string; user_id: string; gym_id: string; product: FitnessProduct; intake: FitnessIntake | JsonObject; tariff: FitnessTariff | FitnessProductTariff | null; coach_user_id: string | null; amount_irr: number; duration_days: number; includes_meals: boolean; parent_order_id: string | null; status: FitnessOrderStatus; transaction_id: string | null; redirect_url: string | null; idempotency_key: string; attempts: number; lease_until: string | null; last_error: string | null; active_revision_id: string | null; starts_at: string | null; expires_at: string | null; version: number; created_at: string; updated_at: string; legacy_chat: boolean; trial_id: string | null; plan?: FitnessPlan | null; proposals?: FitnessRevision[]; model_snapshot?: FitnessModelSettings }
export interface FitnessRevision { id: string; order_id: string; body: FitnessPlan; summary: string; base_revision_id: string | null; status: 'proposed'|'active'|'superseded'|'rejected'; created_by: string; created_at: string }
export interface FitnessRevisionReceipt { revision_id: string; status: 'proposed'|'active' }
export interface FitnessCoach { user_id: string; gym_id: string; enabled: boolean; name?: FitnessText; tariffs?: FitnessTariff[] }
export interface FitnessCatalogBase { id: string; kind: 'exercise'|'ingredient'|'dish'; category: string; name: FitnessText }
/** Knowledge-authored catalog provenance is a JSON object supplied by each release. */
export interface FitnessCatalogFood extends FitnessCatalogBase { kind:'ingredient'|'dish'; per100g: FitnessNutrition; allergens: string[]; source: JsonObject; estimated: boolean; portions: { grams:number; name?:FitnessText }[] }
export interface FitnessCatalogExercise extends FitnessCatalogBase { kind:'exercise'; courseId: string; videoUrl: string; sessionId?:string; equipment?:FitnessText; muscleGroup?:FitnessText; instructions?:FitnessText; limitations?:FitnessText }
export type FitnessCatalogItem = FitnessCatalogFood | FitnessCatalogExercise;
export interface FitnessCompactCatalogEntry { kind:'exercise'|'ingredient'|'dish'; name:string; per100g?:FitnessNutrition; allergens?:string[]; equipment?:string; muscleGroup?:string; sessionId?:string; courseId?:string }
export interface FitnessEvent { id:string;order_id:string;actor_id:string|null;kind:string;details:JsonObject;read_at:string|null;created_at:string }
export interface FitnessTrialLimits { responses:number;plans:number }
export interface FitnessTrial { id:string;user_id:string;gym_id:string;starts_at:string;expires_at:string;limits:FitnessTrialLimits;total:number;remaining:number;plans_total:number;plans_remaining:number;gift_id?:string }
export interface FitnessTrialGift { id:string;created_by:string;label:string;status:'active'|'inactive';expires_at:string;limits:FitnessTrialLimits;redeemed_by:string|null;redeemed_at:string|null;created_at:string;max_uses:number;used_count:number;remaining_uses:number;duration_days:number;token?:string }
export interface FitnessTrialGiftPage { items:FitnessTrialGift[];total:number;page:number;per_page:number }
export interface FitnessSelf { membership: {gym_id:string;name:string;enabled:boolean;ai_coach_user_id:string}|null; active_plans:FitnessOrder[]; can_manage:boolean; coach_assistant_id:string|null; chat_remaining:number; chat_access:boolean; trial:FitnessTrial|null }
export interface FitnessContext { user_id:string;reference_time:string;orders:FitnessOrder[];settings:{model_ref:string|null;version:number};profile:import('./types.js').Profile;catalog:Record<string,FitnessCompactCatalogEntry> }
export interface FitnessVoiceSettings { model_ref:string|null;stt_model_ref:string|null;tts_model_ref:string|null;version:number }
export interface FitnessProductOffer { product:FitnessProduct;amount_irr:number|null;chat_limit:number;duration_days:number }
export interface FitnessImportReceipt { imported:number;release_id:string }
export interface FitnessReadReceipt { read:true }
export interface FitnessReserveReceipt { reserved:true }
export interface FitnessSettleReceipt { settled:true }
export interface FitnessSaveDraftInput { body:FitnessIntake;expected_version:number }
export interface FitnessPlanInput { body:FitnessPlan;base_revision_id?:string|null }
export interface FitnessProposalInput { order_id:string;body:FitnessPlan;base_revision_id:string }
export interface FitnessProvisionInput { gym_id:string;manager_user_id:string;ai_coach_user_id:string;settings:FitnessModelSettings;enabled:boolean }
export interface FitnessTariffInput { id:string;coach_user_id:string;title:FitnessText;amount_irr:number;duration_days:number;includes_meals:boolean;enabled:boolean;expected_version:number }
export interface FitnessCatalogQuery { kind?:'exercise'|'ingredient'|'dish';category?:string;q?:string;offset?:number }

export interface FitnessSettingsInput { model_ref:string;stt_model_ref:string;tts_model_ref:string;expected_version:number }
export interface FitnessGiftCreateInput { max_uses?:number;request_id:string;created_by:string;label:string;status:'active'|'inactive';expires_at:string;limits:FitnessTrialLimits }
export interface FitnessGiftUpdateInput { max_uses?:number;label:string;status:'active'|'inactive';expires_at:string;limits:FitnessTrialLimits;rotate_token?:boolean }

