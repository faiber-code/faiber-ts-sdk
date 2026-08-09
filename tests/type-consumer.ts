import {
  FaiberSDK, FaiberGame, IdpService, MessengerService, ModulesService,
  StateRealtimeClient, component, type CreateWorldInput, type FaiberServiceApis,
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
}

void provePublicContracts;
