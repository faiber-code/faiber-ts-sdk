import { FaiberSDK, type FaiberServiceApis } from "@faiber/faiber-ts-sdk";
import type { LoginInput, AuthTokensResponse } from "@faiber/faiber-idp";
import type { CreateProductInput, ProductListResponse } from "@faiber/faiber-modules";
import type { SendNotificationInput } from "@faiber/faiber-messenger";
import { FaiberGame, StateRealtimeClient, component, type CreateWorldInput } from "faiber-ts-sdk";

const sdk = new FaiberSDK({ domains: { idp: "https://idp.example.test" } });
const apis: FaiberServiceApis = sdk;

const login: LoginInput = { email: "user@example.test", password: "secret" };
const product: CreateProductInput = { name: "Camera", status: 1 };
const notification: SendNotificationInput = { recipient: "user@example.test", body: "Hello" };
const world: CreateWorldInput = { name: "Arena", slug: "arena", components: [], replication: { tick_rate: 60, snapshot_rate: 20, interest_radius: 128, history_ticks: 120 }, physics: { enabled: true, dimensions: 3, gravity: [0, -9.81, 0], deterministic: true } };
const Position = component<{ x: number; y: number }>("position");

async function provePublicContracts(): Promise<void> {
  const loginResponse = await apis.idp.login(login);
  const loginBody: AuthTokensResponse = loginResponse.data;

  await apis.modules.products.create(product);
  const productsResponse = await apis.modules.products.list({ page_number: 1 });
  const products: ProductListResponse = productsResponse.data;

  await apis.messenger.send(notification);
  await apis.state.createWorld(world);
  void FaiberGame;
  void StateRealtimeClient;
  void Position;
  void loginBody;
  void products;
}

void provePublicContracts;
