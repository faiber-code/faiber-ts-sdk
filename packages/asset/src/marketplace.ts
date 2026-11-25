import type { FaiberClient, RequestOptions } from "@faiber/sdk-core";

export type MarketplaceStore = "myket" | "bazaar";

export interface MarketplaceOffer {
  tier: string;
  sku: string;
  amount_rial: number;
  duration_days: number;
}

export interface MarketplaceOrder extends MarketplaceOffer {
  order_id: string;
  store: MarketplaceStore;
  package_name: string;
  kind: "consumable" | "subscription";
}

export interface StartMarketplaceOrder {
  store: MarketplaceStore;
  tier: string;
  request_id: string;
}

export interface MarketplaceProof {
  purchase_token: string;
  signed_data?: string;
  signature?: string;
}

export interface MarketplaceReceipt {
  purchaseId: string;
  store: MarketplaceStore;
  packageName: string;
  sku: string;
  kind: MarketplaceOrder["kind"];
  amountRial: number;
  purchasedAtMs: number;
  validUntilMs: number | null;
  autoRenewing: boolean | null;
}

export interface MarketplaceOrderStatus {
  order_id: string;
  status: "pending" | "verified";
  tier: string;
  store: MarketplaceStore;
  amount_rial: number;
  duration_days: number;
  receipt: MarketplaceReceipt | null;
}

export interface MarketplaceVerification {
  tier: string;
  duration_days: number;
  receipt: MarketplaceReceipt;
}

export interface MarketplaceResponse<T> {
  status: string;
  message: string;
  data: T;
}

/** Owner-scoped Asset operations for store offers, orders, and receipt verification. */
export class MarketplaceAssetOperations {
  constructor(private readonly client: FaiberClient) {}

  offers(project: string, store: MarketplaceStore, options?: RequestOptions) {
    const root = this.root(project);
    return this.client.get<MarketplaceResponse<MarketplaceOffer[]>>(`${root}/offers/${store}`, undefined, options);
  }

  createOrder(project: string, input: StartMarketplaceOrder, options?: RequestOptions<StartMarketplaceOrder>) {
    return this.client.post<MarketplaceResponse<MarketplaceOrder>, StartMarketplaceOrder>(`${this.root(project)}/orders`, input, options);
  }

  order(project: string, id: string, options?: RequestOptions) {
    return this.client.get<MarketplaceResponse<MarketplaceOrderStatus>>(`${this.root(project)}/orders/${encodeURIComponent(id)}`, undefined, options);
  }

  verify(project: string, id: string, proof: MarketplaceProof, options?: RequestOptions<MarketplaceProof>) {
    return this.client.post<MarketplaceResponse<MarketplaceVerification>, MarketplaceProof>(
      `${this.root(project)}/orders/${encodeURIComponent(id)}/verify`, proof, options,
    );
  }

  private root(project: string) {
    return `/api/v1/plans/marketplace/${encodeURIComponent(project)}`;
  }
}
