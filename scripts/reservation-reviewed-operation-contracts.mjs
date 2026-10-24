// Immutable Reservation 80aef6037cec20bb808903f15737160cef5f6a66: mounted handlers, models, middleware, methods; locked Flow SDK c9fbf8d.
export const reservationReviewedOperationContracts = {
  "reservation:GET /health": {
    "purpose": "No inputs; success envelope contains version; no dependency readiness guarantee. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Public read handler; no customer-specific authorization."
  },
  "reservation:GET /": {
    "purpose": "Same health envelope as /health; not a management dashboard. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Public read handler; no customer-specific authorization."
  },
  "reservation:GET /api/openapi.json": {
    "purpose": "Raw OpenAPI document; mounted slot show/edit, capacity report and integration routes are not fully represented by the declared paths. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Public read handler; no customer-specific authorization."
  },
  "reservation:GET /api/v1/services": {
    "purpose": "Paged service responses ordered numeric ID ascending; no active, name or search filter implemented. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:service:read, admin:service:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:POST /api/v1/services": {
    "purpose": "name length 1..200, duration_minutes 5..480; optional description, image_url, buffer_minutes 0..120 default0, is_active defaulttrue. Returns created service with HTTP200. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:service:create, admin:service:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/services/{id}": {
    "purpose": "Numeric service ID; missing404; returns fields including duration, buffer, active flag and RFC3339 created_at. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:service:read, admin:service:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:PATCH /api/v1/services/{id}": {
    "purpose": "Optional create fields with same bounds. Omitted and null optional text leave existing values unchanged; no explicit clear-to-null. Existing slot durations are preserved. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:service:update, admin:service:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:DELETE /api/v1/services/{id}": {
    "purpose": "Numeric service ID; missing404; referenced historical slot causes409 through restrictive reservation FK. Successful delete returns envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:service:delete, admin:service:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/providers": {
    "purpose": "Paged provider responses ordered ID ascending; no search, user or active filter implemented. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:POST /api/v1/providers": {
    "purpose": "name length1..200; optional user_id UUID,bio,avatar_url,is_active defaulttrue, capacity integer1..1000 default1. Linked IDP user existence is not checked here. Returns HTTP200 provider. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:create, admin:provider:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/providers/{id}": {
    "purpose": "Numeric provider ID; missing404; optional user UUID, text, active, capacity and created_at. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:PATCH /api/v1/providers/{id}": {
    "purpose": "Optional create fields; null/omitted text or user_id cannot explicitly clear. Changed capacity below current/future peak returns409; unchanged limit allowed even with legacy conflicts. Provider transaction lock serializes booking and configuration. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:update, admin:provider:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:DELETE /api/v1/providers/{id}": {
    "purpose": "Numeric provider ID; missing404; booked or cancelled historical slots prevent cascade deletion409; success envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:delete, admin:provider:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/providers/{id}/services": {
    "purpose": "Provider ID selects assignment rows then service rows. Unpaged array; no explicit missing-provider check, so missing provider can return empty array; order unspecified. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:POST /api/v1/providers/{id}/services": {
    "purpose": "Numeric provider ID and JSON service_id; existing assignment409; missing relations FK409. Check-then-insert concurrent duplicate outcome is not certified. Success envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:create, admin:provider:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:DELETE /api/v1/providers/{id}/services/{service_id}": {
    "purpose": "Two numeric IDs; absent assignment still succeeds. Existing slots/bookings remain; booking currently does not revalidate assignment. Success envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:delete, admin:provider:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/providers/{provider_id}/schedules": {
    "purpose": "Provider ID; unpaged schedule array, unspecified order, missing provider can yield empty list. Lowercase English weekday, HH:MM times, active flag. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:PUT /api/v1/providers/{provider_id}/schedules": {
    "purpose": "JSON schedules array; empty array clears all. Case-insensitive weekday; parsed 4..5 character time is normalized HH:MM; same-day end must exceed start. Active defaults true. All entries validated before transaction deletion; provider lock serializes replacement/generation. Overlapping schedules allowed; generation deduplicates candidate starts. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:update, admin:provider:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:POST /api/v1/slots": {
    "purpose": "Numeric provider/service plus strict YYYY-MM-DD from_date,to_date UTC, inclusive1..366days. Active assigned provider/service and valid stored configuration required. Duration5..480,buffer0..120. Fills capacity-many copies per start, preserves existing rows, returns HTTP200 envelope numeric count; max100000 created rows, all batches atomic. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:slot:create, admin:slot:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/slots/available": {
    "purpose": "Optional numeric provider_id/service_id and strict UTC date YYYY-MM-DD combine AND. Unpaged array ordered starts_at ascending with no stable tie order. Excludes invalid intervals, claimed slots and provider-full intervals; does not validate current active assignment. Date uses inclusive midnight/exclusive next midnight. Snapshot is advisory. Explicitly requires reserved_by_user_id IS NULL, excluding legacy held rows even when is_reserved is false. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Public read handler; no customer-specific authorization."
  },
  "reservation:GET /api/v1/slots/{id}": {
    "purpose": "Numeric slot ID; missing404; RFC3339 interval, provider/service numeric IDs, claim bit and optional customer UUID. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:slot:read, admin:slot:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:PATCH /api/v1/slots/{id}": {
    "purpose": "Optional provider_id,service_id,starts_at,ends_at,is_reserved. Times RFC3339 with end>start. Cannot independently toggle claim; any claimed/historically referenced structural edit409; equivalent patch allowed. Unreferenced edit requires active assigned service/provider and same-start pool below capacity. Locks providers in sorted order then slot. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:slot:update, admin:slot:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:DELETE /api/v1/slots/{id}": {
    "purpose": "Numeric slot ID; missing404; claimed, inconsistent owner or any reservation history409; success envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:slot:delete, admin:slot:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/reservations": {
    "purpose": "Optional user_id UUID,provider_id/service_id numeric,status exact lowercase pending/confirmed/cancelled/completed, bracket pagination; all combine AND. Created_at descending; ties not stabilized by ID. Responses currently starts_at:null because list does not join slot. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:reservation:read, admin:reservation:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:POST /api/v1/reservations": {
    "purpose": "JSON numeric time_slot_id,user_id UUID,optional notes. Provider/service derived from slot. HTTP200 confirmed reservation with starts_at populated. Provider lock and slot claim enforce interval capacity/one owner. Missing404, claimed/full409. Does not validate IDP customer existence, future date, current active provider/service or current assignment; no client idempotency receipt. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:reservation:create, admin:reservation:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/reservations/{id}": {
    "purpose": "Numeric reservation ID; missing404; status lowercase, customer UUID, relation numeric IDs, notes and created_at. starts_at:null on this route; requires separate slot read for interval. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:reservation:read, admin:reservation:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:PATCH /api/v1/reservations/{id}": {
    "purpose": "Optional exact lowercase status and notes; null cannot explicitly clear notes. Pending->confirmed/cancelled, confirmed->completed/cancelled, same-state retry allowed; cancelled/completed terminal. Cancellation releases only the currently owned slot transactionally, stale retry never releases rebooking; notes-only updates on terminal bookings still allowed. Returns record starts_at:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:reservation:update, admin:reservation:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:DELETE /api/v1/reservations/{id}": {
    "purpose": "Same transition rules as PATCH cancelled; missing404, completed conflict409, repeated cancelled succeeds. Preserves reservation row; successful envelope data:null. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:reservation:delete, admin:reservation:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  },
  "reservation:GET /api/v1/integration/flow": {
    "purpose": "Public GET; success envelope with configured RABBITMQ_QUEUE defaultreservation_queue and empty action list. Metadata is not proof of event publication, durable delivery or consumer deduplication. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Public read handler; no customer-specific authorization.",
    "response": "import(\"./contracts.types.js\").ReservationFlowIntegrationResponse"
  },
  "reservation:GET /api/v1/providers/{id}/capacity": {
    "purpose": "Read in a transaction with an exclusive provider lock shared with booking/capacity/cancellation. Computes future occupancy and conflict windows, reports them without cancelling or repairing bookings. Success uses {status:\"success\",message,data}; AppError uses {error:string}, extractor failures may be text.",
    "auth": "Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user."
  }
};
