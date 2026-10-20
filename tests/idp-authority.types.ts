import type {IdpApi,EffectivePermissionResponse,ActiveRoleFilter} from '@faiber/faiber-idp';
import type {AxiosResponse} from 'axios';
declare const idp:IdpApi;
const current:Promise<AxiosResponse<EffectivePermissionResponse>>=idp.authority.currentPermissions('id',{service:'gis'});
const scoped=idp.authority.activeRoleUsers({role_name:'reviewer',role_id:'id',page:1,per_page:100});
const marker:Promise<ActiveRoleFilter|undefined>=scoped.then(r=>r.data.data.role_filter);
// @ts-expect-error role_name is required, not an unfiltered directory request
idp.authority.activeRoleUsers({page:1});
// @ts-expect-error canonical service must be explicit
idp.authority.currentPermissions('id',{});
void [current,marker];
