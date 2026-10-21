import type { StateApi, World, StateHealthResponse, MatchView, GameOperationSession, GameOperationSessionsResponse, KheradgahCommand } from '@faiber/faiber-state-sdk';
export async function stateWireTypes(api: StateApi) {
  const response = await api.operations.routesGameOperationSessionsGet({ page_size: 25, paid: false });
  const page: GameOperationSessionsResponse = response.data;
  const session: GameOperationSession | undefined = page.data.items[0];
  const finish: string | null | undefined = session?.finishedAt;
  const members: boolean | undefined = session?.members[0]?.ready;
  const world: World = (await api.world('uuid')).data.data;
  const managed: boolean = world.managed;
  const health: StateHealthResponse = (await api.health()).data;
  const transport: 'websocket' = health.data.transports[0];
  const revision: 'kheradgah.v1' = health.data.rulesets[0];
  const match: MatchView = (await api.matchView('uuid')).data.data;
  const vitality: number | undefined = match.players[0]?.council[0]?.vitality;
  const createdAt: string = match.createdAt;
  const questionRevision: number | undefined = match.question?.revision;
  const command: KheradgahCommand = { clientCommandId: 'uuid', expectedStateVersion: 1, kind: 'submit_order', payload: { kind: 'deploy', hero_id: 2, seat: 0 } };
  // @ts-expect-error the stable SQL projection has no legacy status field
  page.status;
  // @ts-expect-error game event records require a concrete user identifier
  const invalidEvent: import('@faiber/faiber-state-sdk').GameOperationEvent = { id: 'uuid', sequence: 1, kind: 'answer', payload: {}, createdAt: 'now' };
  // @ts-expect-error deploy uses backend snake_case hero_id
  const invalidCommand: KheradgahCommand = { clientCommandId: 'uuid', expectedStateVersion: 1, kind: 'submit_order', payload: { kind: 'deploy', heroId: 2, seat: 0 } };
  void [finish, members, managed, transport, revision, vitality, createdAt, questionRevision, command, invalidEvent, invalidCommand];
}
