import { FaiberClient, OpenApiClient, type FaiberSdkConfig, type OpenApiPaths, type ServiceName } from "@faiber/sdk-core";
import { AssetApi } from "@faiber/faiber-asset";
import { CrmApi } from "@faiber/faiber-crm";
import { FlowApi } from "@faiber/faiber-flow";
import { IdpApi } from "@faiber/faiber-idp";
import { LmsApi } from "@faiber/faiber-lms";
import { KnowledgeApi } from "@faiber/faiber-knowledge";
import { ChatApi } from "@faiber/faiber-chat";
import { MessengerApi } from "@faiber/faiber-messenger";
import { ModulesApi } from "@faiber/faiber-modules";
import { PaymentApi } from "@faiber/faiber-payment";
import { ProfileApi } from "@faiber/faiber-profile";
import { ReservationApi } from "@faiber/faiber-reservation";
import { SessionApi } from "@faiber/faiber-session";
import { SocialApi } from "@faiber/faiber-social";
import { VersionApi } from "@faiber/faiber-version";
import { StateApi } from "@faiber/faiber-state-sdk";
export interface FaiberServiceApis {
    idp: IdpApi;
    profile: ProfileApi;
    modules: ModulesApi;
    asset: AssetApi;
    payment: PaymentApi;
    messenger: MessengerApi;
    crm: CrmApi;
    lms: LmsApi;
    reservation: ReservationApi;
    session: SessionApi;
    version: VersionApi;
    flow: FlowApi;
    social: SocialApi;
    knowledge: KnowledgeApi;
    chat: ChatApi;
    state: StateApi;
}
export class FaiberSDK {
    private readonly clients = new Map<ServiceName, FaiberClient>();
    private readonly apis = new Map<ServiceName, unknown>();
    constructor(readonly config: FaiberSdkConfig) { }
    service(name: ServiceName): FaiberClient {
        let client = this.clients.get(name);
        if (!client) {
            client = new FaiberClient(name, this.config);
            this.clients.set(name, client);
        }
        return client;
    }
    /** Typed access to every generated OpenAPI operation for a service. */
    operations<Paths extends OpenApiPaths>(name: ServiceName): OpenApiClient<Paths> {
        return new OpenApiClient<Paths>(this.service(name));
    }
    private api<T>(name: ServiceName, create: (client: FaiberClient) => T): T {
        let api = this.apis.get(name) as T | undefined;
        if (!api) {
            api = create(this.service(name));
            this.apis.set(name, api);
        }
        return api;
    }
    get idp(): IdpApi { return this.api("idp", (client) => new IdpApi(client)); }
    get profile(): ProfileApi { return this.api("profile", (client) => new ProfileApi(client)); }
    get modules(): ModulesApi { return this.api("modules", (client) => new ModulesApi(client)); }
    get asset(): AssetApi { return this.api("asset", (client) => new AssetApi(client)); }
    get payment(): PaymentApi { return this.api("payment", (client) => new PaymentApi(client)); }
    get messenger(): MessengerApi { return this.api("messenger", (client) => new MessengerApi(client)); }
    get crm(): CrmApi { return this.api("crm", (client) => new CrmApi(client)); }
    get lms(): LmsApi { return this.api("lms", (client) => new LmsApi(client)); }
    get reservation(): ReservationApi { return this.api("reservation", (client) => new ReservationApi(client)); }
    get session(): SessionApi { return this.api("session", (client) => new SessionApi(client)); }
    get version(): VersionApi { return this.api("version", (client) => new VersionApi(client)); }
    get flow(): FlowApi { return this.api("flow", (client) => new FlowApi(client)); }
    get social(): SocialApi { return this.api("social", (client) => new SocialApi(client)); }
    get knowledge(): KnowledgeApi { return this.api("knowledge", (client) => new KnowledgeApi(client)); }
    get chat(): ChatApi { return this.api("chat", (client) => new ChatApi(client)); }
    get state(): StateApi { return this.api("state", (client) => new StateApi(client)); }
}
export * from "@faiber/sdk-core";
export { AssetApi, ChatApi, CrmApi, FlowApi, IdpApi, KnowledgeApi, LmsApi, MessengerApi, ModulesApi, PaymentApi, ProfileApi, ReservationApi, SessionApi, SocialApi, StateApi, VersionApi };
export type { AuthTokensResponse, User as IdpUser } from "@faiber/faiber-idp";
export type { Profile, ProfileProperties } from "@faiber/faiber-profile";
export type { Lead } from "@faiber/faiber-crm";
export type { InteractiveContent } from "@faiber/faiber-lms";
export * from "@faiber/faiber-state-sdk";
export * as FaiberGameRuntime from "@faiber/faiber-game-sdk";
export { FaiberGame, component } from "@faiber/faiber-game-sdk";
