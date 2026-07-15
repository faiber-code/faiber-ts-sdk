import { InferaClient, type FaiberSdkConfig, type ServiceName } from "@faiber/sdk-core";
import { IdpApi } from "@faiber/infera-idp"; import { ProfileApi } from "@faiber/infera-profile"; import { ModulesApi } from "@faiber/infera-modules"; import { AssetApi } from "@faiber/infera-asset"; import { PaymentApi } from "@faiber/infera-payment"; import { MessengerApi } from "@faiber/infera-messenger"; import { CrmApi } from "@faiber/infera-crm"; import { LmsApi } from "@faiber/infera-lms"; import { ReservationApi } from "@faiber/infera-reservation"; import { SessionApi } from "@faiber/infera-session"; import { VersionApi } from "@faiber/infera-version"; import { FlowApi } from "@faiber/infera-flow";
export class FaiberSDK {
  private readonly clients = new Map<ServiceName, InferaClient>();
  private readonly apis = new Map<ServiceName, unknown>();
  constructor(readonly config: FaiberSdkConfig) {}
  service(name: ServiceName) { let client = this.clients.get(name); if (!client) { client = new InferaClient(name, this.config); this.clients.set(name, client); } return client; }
  private api<T>(name: ServiceName, create: (client: InferaClient) => T): T { let api = this.apis.get(name) as T | undefined; if (!api) { api = create(this.service(name)); this.apis.set(name, api); } return api; }
  get idp() { return this.api("idp", (client) => new IdpApi(client)); } get profile() { return this.api("profile", (client) => new ProfileApi(client)); }
  get modules() { return this.api("modules", (client) => new ModulesApi(client)); } get asset() { return this.api("asset", (client) => new AssetApi(client)); }
  get payment() { return this.api("payment", (client) => new PaymentApi(client)); } get messenger() { return this.api("messenger", (client) => new MessengerApi(client)); }
  get crm() { return this.api("crm", (client) => new CrmApi(client)); } get lms() { return this.api("lms", (client) => new LmsApi(client)); }
  get reservation() { return this.api("reservation", (client) => new ReservationApi(client)); } get session() { return this.api("session", (client) => new SessionApi(client)); }
  get version() { return this.api("version", (client) => new VersionApi(client)); } get flow() { return this.api("flow", (client) => new FlowApi(client)); }
}
export * from "@faiber/sdk-core";
export { IdpApi, ProfileApi, ModulesApi, AssetApi, PaymentApi, MessengerApi, CrmApi, LmsApi, ReservationApi, SessionApi, VersionApi, FlowApi };
