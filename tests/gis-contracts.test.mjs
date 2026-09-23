import test from "node:test";
import assert from "node:assert/strict";
import { AxiosHeaders } from "axios";
import { FaiberSDK, MemoryTokenProvider } from "../packages/sdk/dist/index.js";
test("GIS preserves geometry revisions, ownership boundaries and explicit public routes", async () => {
  const calls = [];
  const sdk = new FaiberSDK({
    domains: { gis: "https://gis.test" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "fixture" }),
    axios: {
      adapter: async (config) => {
        calls.push(config);
        return {
          data: { data: {} },
          status: 200,
          statusText: "OK",
          headers: new AxiosHeaders(),
          config,
        };
      },
    },
  });
  await sdk.gis.writeGeometries("dataset", {
    expected_revision: 4,
    reason: "Correct surveyed position",
    features: [
      {
        id: "point",
        geometry: { type: "Point", coordinates: [49.58, 37.28] },
        properties: { name: "رشت" },
      },
    ],
  });
  await sdk.gis.mapStyle("private-map", "light");
  await sdk.gis.publicMapStyle("central-rasht");
  await sdk.gis.importArea({
    name: "City area",
    scope: "user",
    bounds: [49.57, 37.27, 49.59, 37.29],
  });
  await sdk.gis.personalPlace("own");
  await sdk.gis.references("place");
  assert.deepEqual(
    calls.map((r) => r.url),
    [
      "/api/v1/datasets/dataset/features",
      "/api/v1/maps/private-map/style",
      "/api/v1/public/maps/central-rasht/style",
      "/api/v1/imports",
      "/api/v1/my-places/own",
      "/api/v1/places/place/references",
    ],
  );
  assert.equal(JSON.parse(calls[0].data).expected_revision, 4);
  assert.deepEqual(
    JSON.parse(calls[0].data).features[0].geometry.coordinates,
    [49.58, 37.28],
  );
  assert.equal(JSON.parse(calls[3].data).scope, "user");
  assert.ok(
    calls.every((r) => r.headers.get("Authorization") === "Bearer fixture"),
  );
});

test("GIS map revisions and tile binary transport match mounted routes", async () => {
  const calls = [];
  const sdk = new FaiberSDK({
    domains: { gis: "https://gis.test" },
    authMode: "cookie",
    axios: {
      adapter: async (config) => {
        calls.push(config);
        return {
          data: { data: {} },
          status: 200,
          statusText: "OK",
          headers: new AxiosHeaders(),
          config,
        };
      },
    },
  });
  await sdk.gis.mapPublication("map", {
    status: "published",
    expected_revision: 2,
    reason: "Approved map",
  });
  await sdk.gis.publicTile("dataset", 17, 1, 2);
  await sdk.gis.map("map");
  assert.deepEqual(JSON.parse(calls[0].data), {
    status: "published",
    expected_revision: 2,
    reason: "Approved map",
  });
  assert.equal(calls[1].responseType, "arraybuffer");
  assert.equal(calls[2].url, "/api/v1/maps/map");
  assert.ok(calls.every((r) => r.withCredentials));
});
