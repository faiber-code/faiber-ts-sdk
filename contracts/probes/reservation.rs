// Discovery characterization, not a passing contract certification.
// Run only against the disposable database created by the discovery runner.
use chrono::{Duration, Utc};
use entity::{provider, reservation_service, time_slot};
use infera_reservation::{
    db::{connect_pg, run_migrations},
    reservation::{methods, models::{CreateReservationRequest, ReservationListQuery, UpdateReservationRequest}},
    work_schedule::{methods as schedules, models::{ScheduleEntry, UpsertScheduleRequest}},
};
use sea_orm::{ActiveModelTrait, ActiveValue::Set, EntityTrait};
use uuid::Uuid;

#[tokio::test]
async fn characterize_filters_transitions_and_schedule_replacement() {
    let url = std::env::var("DATABASE_URL").expect("disposable DATABASE_URL is required");
    assert!(url.contains("infera_contracts"), "probe is restricted to the named disposable database");
    let db=connect_pg().await.expect("database connection");
    run_migrations(&db).await;
    let service=reservation_service::ActiveModel {
        name:Set("Discovery service".into()), duration_minutes:Set(30), buffer_minutes:Set(0), is_active:Set(true), ..Default::default()
    }.insert(&db).await.unwrap();
    let provider=provider::ActiveModel {name:Set("Discovery provider".into()),is_active:Set(true),..Default::default()}.insert(&db).await.unwrap();
    let start=Utc::now().fixed_offset()+Duration::days(1);
    let slot=time_slot::ActiveModel {
        provider_id:Set(provider.id),service_id:Set(service.id),starts_at:Set(start),ends_at:Set(start+Duration::minutes(30)),
        is_reserved:Set(false),reserved_by_user_id:Set(None),..Default::default()
    }.insert(&db).await.unwrap();
    let user=Uuid::new_v4();
    let first=methods::create(&db,CreateReservationRequest{time_slot_id:slot.id,user_id:user,notes:None}).await.unwrap();
    let list=methods::list(&db,&ReservationListQuery {
        user_id:Some(user),provider_id:None,service_id:None,status:Some("cancelled".into()),
        page:infera_reservation::models::PaginationQuery{page:None},
    }).await.unwrap();
    let status_filter_returns_confirmed=list.data.iter().any(|row|row.id==first.id);
    let invalid=methods::update(&db,first.id,UpdateReservationRequest{status:Some("not-a-status".into()),notes:None}).await;
    let invalid_status_accepted=invalid.is_ok();
    methods::update(&db,first.id,UpdateReservationRequest{status:Some("cancelled".into()),notes:None}).await.unwrap();
    let patch_cancel_keeps_claim=time_slot::Entity::find_by_id(slot.id).one(&db).await.unwrap().unwrap().is_reserved;
    methods::cancel(&db,first.id).await.unwrap();
    let second=methods::create(&db,CreateReservationRequest{time_slot_id:slot.id,user_id:Uuid::new_v4(),notes:None}).await.unwrap();
    methods::cancel(&db,first.id).await.unwrap();
    let stale_cancel_releases_new_claim=!time_slot::Entity::find_by_id(slot.id).one(&db).await.unwrap().unwrap().is_reserved;
    let second_still_confirmed=methods::get(&db,second.id).await.unwrap().status==entity::enums::ReservationStatus::Confirmed;
    schedules::upsert(&db,provider.id,UpsertScheduleRequest{schedules:vec![ScheduleEntry{
        day_of_week:"monday".into(),start_time:"09:00".into(),end_time:"17:00".into(),is_active:Some(true),
    }]}).await.unwrap();
    let schedule_error=schedules::upsert(&db,provider.id,UpsertScheduleRequest{schedules:vec![ScheduleEntry{
        day_of_week:"not-a-day".into(),start_time:"09:00".into(),end_time:"17:00".into(),is_active:Some(true),
    }]}).await.is_err();
    let invalid_schedule_erases_previous=schedule_error&&schedules::list(&db,provider.id).await.unwrap().is_empty();
    let invalid_date_accepted=infera_reservation::time_slot::methods::list_available(&db,&infera_reservation::time_slot::models::AvailableSlotsQuery{
        service_id:Some(service.id),provider_id:Some(provider.id),date:Some("not-a-date".into()),
    }).await.is_ok();
    println!("DISCOVERY_OBSERVATION {}",serde_json::json!({
        "schema_version":"1.0", "kind":"characterization_not_certification", "storage":"disposable_real_postgresql",
        "status_filter_returns_confirmed":status_filter_returns_confirmed,
        "invalid_status_accepted":invalid_status_accepted,
        "patch_cancel_keeps_claim":patch_cancel_keeps_claim,
        "stale_cancel_releases_new_claim":stale_cancel_releases_new_claim,
        "second_booking_still_confirmed":second_still_confirmed,
        "invalid_schedule_erases_previous":invalid_schedule_erases_previous,
        "invalid_date_accepted":invalid_date_accepted,
    }));
}
