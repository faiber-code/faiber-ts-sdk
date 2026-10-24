import type {IdpApi,UserRoleMembershipSnapshot,UserRoleMembershipSnapshotResponse,AddUserRoleMemberships,AddUserRoleMembershipsResult,AddUserRoleMembershipsResponse} from '@faiber/faiber-idp';
import type {AxiosResponse} from '@faiber/sdk-core';
declare const idp:IdpApi;
declare const snapshot:UserRoleMembershipSnapshot;
const read:Promise<AxiosResponse<UserRoleMembershipSnapshotResponse>>=idp.roleMemberships('user');
const add:Promise<AxiosResponse<AddUserRoleMembershipsResponse>>=idp.addRoleMemberships('user',{add_role_ids:['role']});
const row=snapshot.memberships[0];
const optionalRole:string|null|undefined=row?.role_name;
const generated:Promise<AxiosResponse<AddUserRoleMembershipsResponse>>=idp.operations.userRoleMembershipsPost('user',{add_role_ids:['role']});
idp.changeRoles('user',{roles:['role']},snapshot.revision);
idp.operations.userChangeRolesPut('user',{roles:['role']},snapshot.revision);
// @ts-expect-error replacement requires the actual reviewed revision
idp.changeRoles('user',{roles:['role']});
// @ts-expect-error generated PATCH must not bypass the revision precondition
idp.operations.userChangeRolesPatch('user',{roles:['role']});
// @ts-expect-error additions cannot carry a replacement role union
idp.addRoleMemberships('user',{roles:['role']});
// @ts-expect-error input is closed; IDP rejects unknown fields
const invalid:AddUserRoleMemberships={add_role_ids:['role'],replace:true};
declare const result:AddUserRoleMembershipsResult;
const revision:string=result.snapshot.revision;
void [read,add,generated,optionalRole,invalid,revision];
