import type { FaiberClient, RequestOptions } from "@faiber/sdk-core";
import type { TaskResponse } from "./types.js";

export interface MarketplaceActivation {
  status: "activated" | "reserved";
}

/** Delivers a store order after Asset confirms its receipt for the authenticated owner. */
export class MarketplaceTaskOperations {
  constructor(private readonly client: FaiberClient) {}

  activate(id: string, options?: RequestOptions) {
    return this.client.post<TaskResponse<MarketplaceActivation>>(
      `/api/v1/plans/marketplace/orders/${encodeURIComponent(id)}/activate`, undefined, options,
    );
  }
}
