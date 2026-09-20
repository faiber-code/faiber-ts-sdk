import {
 AssetService, ChatService, CrmService, FaiberSDK, FaiberGame, IdpService, LmsService, MessengerService, ModulesService, ProfileService,
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
const chatMessage: ChatService.ChatMessage = {
  id: "00000000-0000-0000-0000-000000000010",
  conversation_id: "00000000-0000-0000-0000-000000000011",
  sequence: 1,
  sender_id: "00000000-0000-0000-0000-000000000001",
  sender_kind: "user",
  message_type: "text",
  content: { text: "Hello" },
  metadata: {},
  reply_to_id: null,
  thread_root_id: null,
  client_id: null,
  status: "sent",
  created_at: "2026-09-01T00:00:00Z",
  edited_at: null,
  deleted_at: null,
  legacy_source: null,
  legacy_id: null,
};
const chatSenderId: string | null = chatMessage.sender_id;

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
  const fullProfile = await apis.profile.full("00000000-0000-0000-0000-000000000001");
  const office: ProfileService.OfficeProfileData | null | undefined = fullProfile.data.data.profile.office;
  const classroomId: string | undefined = fullProfile.data.data.profile.lms?.classrooms[0]?.classroom_id;
  const avatarResponse = await apis.profile.avatar(
    "00000000-0000-0000-0000-000000000001",
    "profiles/00000000-0000-0000-0000-000000000001/avatar/example.png",
    { signal: AbortSignal.timeout(1_000) },
  );
  const avatarBlob: Blob = avatarResponse.data;
  const classroomSessions = await apis.lms.classroomSessions.list({ page_number: 1, page_size: 20 });
  const classroomSession: LmsService.ClassroomSession | undefined = classroomSessions.data.data.data[0];
  const classroomSessionTypes = await apis.lms.classroomSessionTypes();
  const classroomSessionType: LmsService.ClassroomSessionType | undefined = classroomSessionTypes.data.data[0];
  await apis.lms.batchClassrooms({ ids: ["00000000-0000-0000-0000-000000000001"] });
  await apis.lms.resolveLegacyClassroomIds({ classrooms: [42], courses: [7] });
  await apis.lms.deleteClassroom("00000000-0000-0000-0000-000000000001");
  await apis.lms.classrooms.delete("00000000-0000-0000-0000-000000000001");
  const classroomBase = {
    course_id: "00000000-0000-0000-0000-000000000002",
    name: "Autumn class",
    starts_at: "2026-09-20T09:08:11.383Z",
    status: "active",
  };
  await apis.lms.classrooms.create({
    ...classroomBase,
    weekly_schedule: [{ day_of_week: 0, starts_at: "15:00", timezone_offset_minutes: 210 }],
  });
  await apis.lms.operations.classroomStoreClassroomPost({
    ...classroomBase,
    weekly_schedule: [{ day: "سه‌شنبه", start_time: "14:00:00", delivery_type: "interactive" }],
  });
  const certificateLayout: LmsService.CertificateLayout = {
    fields: [
      { key: "student_name", x: 877, y: 545, font_size: 54, weight: 700, text_anchor: "middle" },
      { key: "issued_at", x: 340, y: 1050, font_size: 22, weight: 400, format: "legacy_date" },
    ],
    qr: { key: "verification_code", x: 1460, y: 940, size: 150 },
  };
  const certificateTemplate = await apis.lms.certificateTemplates.create({
    name: "Course completion",
    background_url: "https://media.example.test/certificate.png",
    canvas_width: 1754,
    canvas_height: 1240,
    layout: certificateLayout,
    status: "active",
  });
  const certificate = await apis.lms.certificates.create({
    user_id: "00000000-0000-0000-0000-000000000001",
    title: "Course completion",
    certificate_template_id: certificateTemplate.data.data.id,
    issued_at: "2026-09-14T00:00:00Z",
    status: "issued",
  });
  await apis.lms.certificates.update(certificate.data.data.id, { verification_code: "CERT-2026-001" });
  const certificateVerification = await apis.lms.verifyCertificate("CERT-2026-001");
  const certificateSvg = await apis.lms.certificateSvg("CERT-2026-001");
  const verifiedStudentName: string = certificateVerification.data.data.student_name;
  const rawSvg: string = certificateSvg.data;
  if (classroomSession) {
    const sessionLinks: LmsService.ClassroomSessionLinks = apis.lms.classroomSessionLinks(classroomSession);
    void sessionLinks;
  }
  void classroomSessionType;
  void verifiedStudentName;
  void rawSvg;
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
  void avatarBlob;
  void office;
  void classroomId;
 void chatSenderId;
void manageDomains;

sdk.manage.listAgentModels({ signal: AbortSignal.timeout(1_000) }).then(response => {
  response.data.cloud.forEach(model => model.provider.toUpperCase());
  response.data.ollama.think_levels.forEach(level => level.toUpperCase());
});
sdk.crm.listLeads({ status: "open" }).then(response => response.data.meta.request_id);
sdk.crm.getLead("lead-1").then(response => response.data.data.profile?.user_id);
const mutationOptions = { headers: { "Idempotency-Key": "dashboard-contract-test" } };
sdk.crm.deleteTeam("team-1", { version: 1 }, mutationOptions).then(response => response.data.data.deleted);
sdk.crm.removeTeamMember("team-1", "member-1", mutationOptions).then(response => response.data.data.is_active);
sdk.crm.addLeadToSos("lead-1", mutationOptions).then(response => response.data.data.lead_id);
sdk.crm.removeLeadFromSos("lead-1", mutationOptions).then(response => response.data.data.deleted);
sdk.crm.assignTeamToWorkflow("workflow-1", "team-1", mutationOptions).then(response => {
  const assignment: CrmService.CrmWorkflowAssignment = response.data.data;
  return assignment.team_id;
});
sdk.crm.listMemberWorkflows().then(response => response.data.data[0]?.daily_quota);
sdk.crm.updatePipeline("workflow-1", {
  version: 1,
  name: "Retention",
  priority: 10,
  hint: "Complete the oldest leads first",
  daily_quota: 12,
  can_create_lead: true,
  acquire_flags: ["retention"],
  actions: [{ key: "open_profile", label: "Open profile", url: "/profiles/{profile_id}" }],
}, mutationOptions).then(response => response.data.data.priority);
sdk.crm.getDailyStats().then(response => {
  const stats: CrmService.ApiDailyStatsGetResponseData = response.data.data;
  return stats.workflows[0]?.leads_count ?? stats.extra_tasks_done;
});
sdk.crm.getLeadStats().then(response => response.data.data.workflows[0]?.active);
sdk.crm.listLightLeads({
  profile_id: "profile-1",
  statuses: "open,qualified",
  active_from: "2026-09-01T00:00:00Z",
  active_to: "2026-09-30T23:59:59Z",
  sort: "task_priority",
}).then(response => response.data.data.items[0]?.profile_id);
sdk.crm.getLeadHistory("lead-1").then(response => response.data.data[0]?.profile?.first_name);
sdk.crm.deleteLeadReminders("lead-1", mutationOptions);
sdk.crm.deleteTask("task-1", mutationOptions).then(response => response.data.data.deleted);
sdk.crm.createActivityWithReminder({
  activity: { lead_id: "lead-1", activity_type: "call", outcome: "answered" },
  reminder: { lead_id: "lead-1", profile_id: "profile-1", title: "Follow up", due_at: "2026-09-15T08:00:00Z" },
}, mutationOptions).then(response => response.data.data.reminder.profile_id);
sdk.crm.listActivities().then(response => response.data.data.items[0]?.profile?.first_name);
sdk.crm.listWorklogs({ sort: "-start_date" }).then(response => response.data.data[0]?.duration);
sdk.crm.createWorkflow({
  name: "Customer success",
  slug: "customer-success",
  flags: ["onboarding", "enterprise"],
  acquire_flags: ["onboarding"],
  priority: 20,
  actions: [{ key: "qualification-form", kind: "internal", form: "qualification", required: true }],
}).then(response => response.data.data.can_create_lead);
sdk.crm.listWorkflows({ sort: "priority" }).then(response => response.data.data[0]?.name);
sdk.crm.getWorkflow("workflow-1").then(response => response.data.data.slug);
sdk.crm.updateWorkflow("workflow-1", {
  flags: ["onboarding", "enterprise"],
  acquire_flags: ["enterprise"],
  actions: [{ key: "crm-form", kind: "external", form: "https://forms.example.test/crm", required: true }],
  hint: null,
});
sdk.crm.deleteWorkflow("workflow-1").then(response => response.data.data.deleted);
sdk.crm.listWorkflowNodes("workflow-1", { sort: "priority" }).then(response => response.data.data[0]?.workflow_id);
sdk.crm.listAllWorkflowNodes({ sort: "priority" }).then(response => response.data.data[0]?.workflow_id);
sdk.crm.getWorkflowNode("node-1").then(response => response.data.data.name);
sdk.crm.getWorkflowNode("workflow-1", "node-1").then(response => response.data.data.name);
sdk.crm.createWorkflowNode("workflow-1", { name: "Qualified", slug: "qualified", priority: 10 });
sdk.crm.createWorkflowNodeInWorkflow("workflow-1", { name: "Qualified", slug: "qualified", priority: 10 });
sdk.crm.updateWorkflowNode("node-1", { actions: null, auto_win: true });
sdk.crm.updateWorkflowNode("workflow-1", "node-1", { actions: null, auto_win: true });
sdk.crm.deleteWorkflowNode("node-1").then(response => response.data.data);
sdk.crm.deleteWorkflowNode("workflow-1", "node-1").then(response => response.data.data.deleted);
sdk.modules.requests.create({
  name: "Course registration",
  route_to_crm: true,
  crm_flags: ["website", "next-course"],
}).then(response => response.data.data.route_to_crm);
sdk.task.workspace().then(response => response.data.data.sandbox_id);
sdk.task.openEvents({ signal: AbortSignal.timeout(1_000) }).then(response => response.data);
  void manageAction;
}

void provePublicContracts;
