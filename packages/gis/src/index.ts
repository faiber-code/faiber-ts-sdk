import { ServiceApi } from "@faiber/sdk-core";
import { GisOperations } from "./operations.js";
/** Source-reviewed GIS client. Native and deployment certification remains a release gate. */
export class GisApi extends ServiceApi {
  readonly operations = new GisOperations(this.client);
}
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
