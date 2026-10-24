use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "flow_run_steps")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,
    pub flow_run_id: Uuid,
    pub node_id: String,
    pub condition_passed: bool,
    pub emitted_event: Option<String>,
    #[sea_orm(column_type = "JsonBinary", nullable)]
    pub payload: Option<Json>,
    pub created_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::flow_run::Entity",
        from = "Column::FlowRunId",
        to = "super::flow_run::Column::Id"
    )]
    FlowRun,
}

impl Related<super::flow_run::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::FlowRun.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
