use sea_orm::{ConnectionTrait, EntityTrait, PaginatorTrait, QuerySelect, Select};

use crate::models::{PagedPaginationMeta, PagedResult, PaginationQuery};

pub fn resolve_page(query: &PaginationQuery) -> (u64, u64) {
    let page = query
        .page
        .as_ref()
        .and_then(|p| p.number)
        .unwrap_or(1)
        .max(1);
    let size = query
        .page
        .as_ref()
        .and_then(|p| p.size)
        .unwrap_or(20)
        .clamp(1, 100);
    (page, size)
}

pub async fn paginate<E, C>(
    query: Select<E>,
    db: &C,
    page_query: &PaginationQuery,
) -> Result<PagedResult<<E as EntityTrait>::Model>, sea_orm::DbErr>
where
    E: EntityTrait,
    <E as EntityTrait>::Model: Sync,
    C: ConnectionTrait,
{
    let (page, size) = resolve_page(page_query);
    let total_items: u64 = PaginatorTrait::count(query.clone(), db).await?;
    let total_pages = if size == 0 {
        0
    } else {
        total_items.div_ceil(size)
    };
    let data = query
        .offset((page.saturating_sub(1)) * size)
        .limit(size)
        .all(db)
        .await?;

    Ok(PagedResult {
        data,
        meta: PagedPaginationMeta {
            page,
            page_size: size,
            total_items,
            total_pages,
        },
    })
}
