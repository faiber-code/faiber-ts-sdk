import {
 AssetService, FaiberSDK, FaiberGame, IdpService, LmsService, MessengerService, ModulesService,
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
const order: ModulesService.CreateOrderInput = { status: 0, items: [{ variant_id: "variant-1", quantity: 2, unit_price: 3950000 }] };
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
  const linkedResponse = await apis.idp.linkedIdentities();
  const linkedFaiberSubject = linkedResponse.data.data.identities.find(
    identity => identity.provider === "faiber",
  )?.provider_id;
  const linkedBilling = await apis.idp.linkedFaiberBilling({ project: "fitapp", page_size: 14 });
  await apis.idp.topUpLinkedFaiberWallet({
    amount: 500_000,
    currency: linkedBilling.data.data.wallet.currency,
  });

  await apis.modules.products.create(product);
  await apis.modules.orders.create(order);
  const productsResponse = await apis.modules.products.list({ page_number: 1 });
  const products: ModulesService.ProductListResponse = productsResponse.data;
  const autocompleteResponse = await apis.modules.autocomplete({ q: "programming", scope: "mixed", locale: "en", limit: 8 });
  const suggestions: ModulesService.AutocompleteSuggestion[] = autocompleteResponse.data.items;

  await apis.messenger.send(notification);
  await apis.payment.createPayment({ amount: 7900000, service_name: "infera-modules", service_model: "order", service_id: "order-1", queue_name: "modules_queue" });
  await apis.profile.addresses("user-1");
  await apis.profile.saveAddress("user-1", { title: "Home", city: "Tehran", detail: "Example street" });
  await apis.profile.myAddresses();
  await apis.profile.saveMyAddress({ title: "Home", city: "Tehran", detail: "Example street" });
  const classroomSessions = await apis.lms.classroomSessions.list({ page_number: 1, page_size: 20 });
  const classroomSession: LmsService.ClassroomSession | undefined = classroomSessions.data.data.data[0];
  const classroomSessionTypes = await apis.lms.classroomSessionTypes();
  const classroomSessionType: LmsService.ClassroomSessionType | undefined = classroomSessionTypes.data.data[0];
  if (classroomSession) {
    const sessionLinks: LmsService.ClassroomSessionLinks = apis.lms.classroomSessionLinks(classroomSession);
    void sessionLinks;
  }
  void classroomSessionType;
  await apis.state.createWorld(world);
  const walletResponse = await apis.asset.wallet();
  const wallet: AssetService.Wallet = walletResponse.data.data;
  const dailyCostsResponse = await apis.asset.dailyCosts({ page_size: 14 });
  const dailyCosts: AssetService.DailyCostSummary[] = dailyCostsResponse.data.data.items;
  await apis.asset.topUpWallet({ amount: 500_000, ...(wallet.currency ? { currency: wallet.currency } : {}) });
  const projectPricing = await apis.asset.sandboxProjectPricing("fitapp");
  const fixedMonthlyPrice: number | null | undefined = projectPricing.data.data.fixed_monthly_price;
  void fixedMonthlyPrice;
  const adminWallet = await apis.asset.adminUserWallet("00000000-0000-0000-0000-000000000001", { limit: 25 });
  const adminBalance: number = adminWallet.data.data.wallet.balance;
  void adminBalance;
  await apis.asset.adjustAdminUserWallet("00000000-0000-0000-0000-000000000001", {
    direction: "credit",
    amount: 500_000,
    reason: "Support adjustment",
  });
  await apis.asset.setSandboxFinancialOwner("fitapp", {
    current_profile_id: "00000000-0000-0000-0000-000000000001",
    financial_owner_user_id: linkedFaiberSubject ?? "00000000-0000-0000-0000-000000000002",
  });
  await apis.asset.setSandboxFixedPrice(
    linkedFaiberSubject ?? "00000000-0000-0000-0000-000000000002",
    "fitapp",
    { monthly_price_override: 72_000 },
  );
  void FaiberGame;
  void StateRealtimeClient;
  void Position;
  void loginBody;
 void products;
 void suggestions;
 void dailyCosts;
 void linkedBilling;
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
