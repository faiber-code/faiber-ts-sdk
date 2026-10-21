import type { AxiosResponse } from '@faiber/sdk-core';
import type {
  IdpApi, IdpEmptyResponse, AuthTokensResponse, RegistrationResponse,
  OAuthProviderListResponse, UserResponse, LoginPageAssetBytes,
  LoginPageSettingsResponse, IdpFlowIntegrationResponse,
  AuthLoginTokenGetResponse, AuthValidateOptionsResponse,
} from '@faiber/faiber-idp';
declare const idp: IdpApi;
const cookieLogin: Promise<AxiosResponse<IdpEmptyResponse>> = idp.webLogin({ grant_type: 'password', username: 'user', password: 'password', client_id: 'client', client_secret: 'server-only' });
const logout: Promise<AxiosResponse<IdpEmptyResponse>> = idp.logout();
const generatedLogout: Promise<AxiosResponse<IdpEmptyResponse>> = idp.operations.authLogoutGet();
const login: Promise<AxiosResponse<AuthTokensResponse>> = idp.operations.authLoginPost({ grant_type: 'password', username: 'user', password: 'password', client_id: 'client', client_secret: 'server-only' });
const registration: Promise<AxiosResponse<RegistrationResponse>> = idp.register({ email: 'user@example.test' });
const providers: Promise<AxiosResponse<OAuthProviderListResponse>> = idp.providers();
const forcedLogout: Promise<AxiosResponse<UserResponse>> = idp.logoutUser('user');
const passwordUpdate: Promise<AxiosResponse<UserResponse>> = idp.changePassword('user', { password: 'new-password' });
const asset: Promise<AxiosResponse<LoginPageAssetBytes>> = idp.operations.settingsLoginPageAssetGet('asset.png');
const settings: Promise<AxiosResponse<LoginPageSettingsResponse>> = idp.operations.settingsLoginPageSettingsPublicGet();
const metadata: Promise<AxiosResponse<IdpFlowIntegrationResponse>> = idp.operations.integrationFlowIntegrationShowGet();
const redirect: AuthLoginTokenGetResponse = undefined;
const preflight: AuthValidateOptionsResponse = undefined;
async function checkConsumers() {
  const users = await idp.users.list({ page: 1, per_page: 20, role_name: 'reviewer' });
  const user = users.data.data.users[0];
  if (user) { const display: string | null = user.display_name; const linked: string[] = user.linked_providers; void [display, linked]; }
  const deletedUser = await idp.users.delete('user');
  const nativeUserId: string = deletedUser.data.data.user.id;
  const deletedRole = await idp.roles.delete('role');
  const nativeRoleId: string = deletedRole.data.data.id;
  const providerNames: string[] = (await providers).data.data.providers;
  // @ts-expect-error Public registration does not return a managed user id/status/roles object.
  const managedId: string = (await registration).data.data.user.id;
  // @ts-expect-error Cookie-only login has no token data member.
  const cookieToken = (await cookieLogin).data.data.access_token;
  // @ts-expect-error Native deletion returns a user, not a fabricated deletion flag.
  const genericDeleted: boolean = deletedUser.data.data.deleted;
  // @ts-expect-error Native directory requires its search query.
  idp.operations.userUsersDirectoryGet();
  void [nativeUserId, nativeRoleId, providerNames, managedId, cookieToken, genericDeleted];
}
void [cookieLogin, logout, generatedLogout, login, registration, providers, forcedLogout, passwordUpdate, asset, settings, metadata, redirect, preflight, checkConsumers];
