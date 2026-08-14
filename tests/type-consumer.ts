import {
 FaiberSDK, FaiberGame, IdpService, MessengerService, ModulesService,
  StateRealtimeClient, component, domainsFromManageProxy,
  type CreateWorldInput, type FaiberServiceApis, type ManageService,
} from "@faiber/faiber-ts-sdk";

const sdk = new FaiberSDK({ domains: { idp: "https://idp.example.test" } });
const apis: FaiberServiceApis = sdk;

const login: IdpService.LoginInput = {
  grant_type: "password", username: "user@example.test", password: "secret",
  client_id: "sandbox-web", client_secret: "public-client-secret",
};
const product: ModulesService.CreateProductInput = { name: "Camera", status: 1 };
const notification: MessengerService.SendNotificationInput = { recipient: "user@example.test", body: "Hello" };
const world: CreateWorldInput = { name: "Arena", slug: "arena", components: [], replication: { tick_rate: 60, snapshot_rate: 20, interest_radius: 128, history_ticks: 120 }, physics: { enabled: true, dimensions: 3, gravity: [0, -9.81, 0], deterministic: true } };
const Position = component<{ x: number; y: number }>("position");
const manageDomains = domainsFromManageProxy("https://manage.example.test");
const manageAction: ManageService.ManageServiceAction = {
  service: "modules", method: "GET", path: "/api/v1/shop/products",
};

async function provePublicContracts(): Promise<void> {
  const loginResponse = await apis.idp.login(login);
  const loginBody: IdpService.AuthTokensResponse = loginResponse.data;

  await apis.modules.products.create(product);
  const productsResponse = await apis.modules.products.list({ page_number: 1 });
  const products: ModulesService.ProductListResponse = productsResponse.data;

  await apis.messenger.send(notification);
  await apis.state.createWorld(world);
  void FaiberGame;
  void StateRealtimeClient;
  void Position;
  void loginBody;
 void products;
void manageDomains;

sdk.manage.listAgentModels({ signal: AbortSignal.timeout(1_000) }).then(response => {
  response.data.cloud.forEach(model => model.provider.toUpperCase());
  response.data.ollama.think_levels.forEach(level => level.toUpperCase());
});
sdk.crm.listLeads({ status: "open" }).then(response => response.data.meta.request_id);
sdk.task.workspace().then(response => response.data.data.sandbox_id);
sdk.task.openEvents({ signal: AbortSignal.timeout(1_000) }).then(response => response.data);
  void manageAction;
}

void provePublicContracts;
