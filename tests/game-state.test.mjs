import assert from "node:assert/strict";
import test from "node:test";
import { PredictionBuffer, transformPrediction } from "../packages/state/dist/index.js";
import { component, World } from "../packages/game/dist/index.js";

test("prediction replays pending inputs after an authoritative acknowledgement", () => {
  const prediction = new PredictionBuffer(transformPrediction, 8);
  let state = prediction.predict(1, { x: 0, y: 0, z: 0 }, { move_x: 6 }, 1 / 60);
  state = prediction.predict(2, state, { move_x: 6 }, 1 / 60);
  const reconciled = prediction.acknowledge(1, { x: 0.1, y: 0, z: 0 });
  assert.ok(reconciled.x > 0.1);
  assert.ok(reconciled.x <= 0.2);
});
test("ECS queries only return entities with the requested components", () => {
  const Position = component("position");
  const Velocity = component("velocity");
  const world = new World();
  const moving = world.spawn();
  const still = world.spawn();
  world.add(moving, Position, { x: 0 });
  world.add(moving, Velocity, { x: 2 });
  world.add(still, Position, { x: 3 });
  assert.deepEqual([...world.query2(Position, Velocity)].map(([entity]) => entity), [moving]);
});
