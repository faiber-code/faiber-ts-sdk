/** Reservation success shape; unit-valued mutations return data:null, not an object. */
export interface ReservationSuccess<T> {status:"success";message:string;data:T}
export type ReservationMutationReceipt=ReservationSuccess<null>;
export type ReservationProcessHealthResponse=ReservationSuccess<{version:string}>;

/** Field metadata from locked infera-flow-sdk c9fbf8dde6f9a843b55f7a05c3ae37eff40b20d1. */
export interface ReservationIntegrationField {name:string;field_type:string;required:boolean;description:string}
export interface ReservationIntegrationEvent {event_name:string;payload_fields:ReservationIntegrationField[]}
/** Public metadata only; current Reservation implementation advertises an empty events array. */
export interface ReservationFlowIntegration {queue:string;events:ReservationIntegrationEvent[]}
export type ReservationFlowIntegrationResponse=ReservationSuccess<ReservationFlowIntegration>;
