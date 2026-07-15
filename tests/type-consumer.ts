import { FaiberSDK, type FaiberServiceApis } from "faiber-ts-sdk";
import type { LoginInput, AuthTokensResponse } from "@faiber/faiber-idp";
import type { CreateProductInput, ProductListResponse } from "@faiber/faiber-modules";
import type { SendNotificationInput } from "@faiber/faiber-messenger";

const sdk = new FaiberSDK({ domains: { idp: "https://idp.example.test" } });
const apis: FaiberServiceApis = sdk;

const login: LoginInput = { email: "user@example.test", password: "secret" };
const product: CreateProductInput = { name: "Camera", status: 1 };
const notification: SendNotificationInput = { recipient: "user@example.test", body: "Hello" };

async function provePublicContracts(): Promise<void> {
  const loginResponse = await apis.idp.login(login);
  const loginBody: AuthTokensResponse = loginResponse.data;

  await apis.modules.products.create(product);
  const productsResponse = await apis.modules.products.list({ page_number: 1 });
  const products: ProductListResponse = productsResponse.data;

  await apis.messenger.send(notification);
  void loginBody;
  void products;
}

void provePublicContracts;
