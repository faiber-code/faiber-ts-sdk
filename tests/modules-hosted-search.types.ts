import {FaiberSDK} from '../packages/sdk/dist/index.js';
import type {HostedCatalogQuery, CategoryListResponse, TagListResponse, SeoContentListResponse} from '../packages/modules/src/index.js';
const sdk=new FaiberSDK({domains:{}});
const query:HostedCatalogQuery={search:'%_ فارسی',page_number:2,page_size:20};
async function check(){
 const categories:CategoryListResponse=(await sdk.modules.categories.list(query)).data;
 const tags:TagListResponse=(await sdk.modules.tags.list(query)).data;
 const seo:SeoContentListResponse=(await sdk.modules.seo.list(query)).data;
 const generated=(await sdk.modules.operations.categoryListCategoriesGet(query)).data;
 const generatedTags=(await sdk.modules.operations.tagListTagsGet(query)).data;
 const generatedSeo=(await sdk.modules.operations.seoContentListSeoContentsGet(query)).data;
 const echoes:(string|null)[]=[categories.data.search,tags.data.search,seo.data.search,generated.data.search,generatedTags.data.search,generatedSeo.data.search];
 const count:number=categories.data.total_items;void [echoes,count];
 // @ts-expect-error search must be string when present
 sdk.modules.categories.list({search:7});
 // @ts-expect-error generated query has the same string constraint
 sdk.modules.operations.tagListTagsGet({search:false});
 // @ts-expect-error missing search is not a valid response (server serializes null)
 const missing:typeof generated.data={categories:[],page_number:1,page_size:10,total_items:0};
 void missing;
}
void check;
