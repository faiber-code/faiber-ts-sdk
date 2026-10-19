/** Reservation success shape; unit-valued mutations return data:null, not an object. */
export interface ReservationSuccess<T> {status:"success";message:string;data:T}
export type ReservationMutationReceipt=ReservationSuccess<null>;
export type ReservationProcessHealthResponse=ReservationSuccess<{version:string}>;
