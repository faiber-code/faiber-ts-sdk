import { FaiberSDK, type FaiberServiceApis } from "@faiber/faiber-ts-sdk";
import type { LoginInput, AuthTokensResponse } from "@faiber/faiber-idp";
import type { CreateProductInput, ProductListResponse } from "@faiber/faiber-modules";
import type { SendNotificationInput } from "@faiber/faiber-messenger";
import type { UpsertActivityInput } from "@faiber/faiber-fitapp";

const sdk = new FaiberSDK({ domains: { idp: "https://idp.example.test" } });
const apis: FaiberServiceApis = sdk;

const login: LoginInput = { email: "user@example.test", password: "secret" };
const product: CreateProductInput = { name: "Camera", status: 1 };
const notification: SendNotificationInput = { recipient: "user@example.test", body: "Hello" };
const completion: UpsertActivityInput = { plan_id: "plan-1", exercise_id: "exercise-1", plan_date: "2026-07-20", completed: true };

async function provePublicContracts(): Promise<void> {
  const loginResponse = await apis.idp.login(login);
  const loginBody: AuthTokensResponse = loginResponse.data;

  await apis.modules.products.create(product);
  const productsResponse = await apis.modules.products.list({ page_number: 1 });
  const products: ProductListResponse = productsResponse.data;

  await apis.messenger.send(notification);
  await apis.fitapp.upsertActivity(completion);
  void loginBody;
  void products;
}

void provePublicContracts;
