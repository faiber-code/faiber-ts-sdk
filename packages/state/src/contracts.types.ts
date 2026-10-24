/** Wire models reviewed against the pinned service handlers and repositories. */
import type { JsonValue } from '@faiber/sdk-core';
/** State v1 and v2 return {data}; neither adds status/message fields. */
export interface GameResult<T> { data: T }
/** Game-authored board, challenge, metrics and answer payloads vary with the registered game/ruleset. */
export type GamePayload = JsonValue;
export interface GameCatalogEntry { id: string; titleEn: string; titleFa: string; summaryEn: string; summaryFa: string; mechanic: string; mode: string; minPlayers: number; maxPlayers: number; entryCoins: number; rounds: number; accent: string; icon: string; rulesetRevision: number; burnPercent: number }
export interface GameCreateInput { gameId?: string; difficulty?: string; paid?: boolean }
export interface GameQueueInput { difficulty?: string; paid?: boolean }
export interface GameCommandInput { commandId: string; expectedVersion: number; answer?: GamePayload; action?: GamePayload; usedHint?: boolean }
export interface GameSessionView { id: string; viewerId: string | null; gameId: string; status: string; difficulty: string; round: number; totalRounds: number; score: number; attempts: number; hints: number; version: number; sequence: number; rulesetRevision: number; board: GamePayload | null; lastEvent: GamePayload | null; yourActionSubmitted: boolean; turnDeadline: string | null; challenge: GamePayload | null; metrics: GamePayload; createdAt: string; finishedAt: string | null }
export interface GameQueueReceipt { id: string; status: 'matched'|'queued'; sessionId: string | null; expiresInSeconds: number }
export interface GameQueueTicket { id: string; status: string; sessionId: string | null; createdAt: string }
export interface GameLobbyCreated { id: string; code: string; status: 'waiting'; expiresInSeconds: number }
export interface GameLobbyView { id: string; code: string; status: string; sessionId: string | null; expiresAt: string }
export interface GameProgress { gameId: string; difficulty: string; samples: number; averageScore: number; averageAttempts: number; sufficientData: boolean }
export interface GameWorldProgress { gameId: string; completed: number; wins: number; bestScore: number; worldStage: number; updatedAt: string }
export type KheradgahMode = 'ranked_duel'|'ranked_alliance'|'open_court';
export interface KheradgahQueueInput { mode: KheradgahMode }
export interface KheradgahTicket { id: string; gameId: string; userId: string; mode: KheradgahMode; status: string; matchId: string | null; createdAt: string }
export interface KheradgahConnectionTicket { matchId: string; ticket: string; websocketUrl: string; expiresAt: string }
export interface KheradgahHero { heroId: number; vitality: number; ward: boolean; cooldown: number }
export interface KheradgahPlayer { userId: string; resolve: number; insight: number; hand: number[] | null; handCount: number; council: KheradgahHero[]; submittedAnswer: boolean; submittedOrder: boolean; correctAnswers: number | null }
export interface KheradgahQuestion { id: string; revision: number; prompt: string; kind: 'numeric'|'short_text'|'boolean'; school: string }
export interface KheradgahView { gameId: string; matchId: string; mode: KheradgahMode; status: string; round: number; stateVersion: number; serverSequence: number; deadline: string; school: string; players: KheradgahPlayer[]; question: KheradgahQuestion | null; winnerIds: string[]; createdAt: string; you: string }
export type KheradgahOrder = {kind:'deploy';hero_id:number;seat:number}|{kind:'attack';seat:number;target_user_id:string}|{kind:'guard';seat:number}|{kind:'pass'};
export type KheradgahCommand = {clientCommandId:string;expectedStateVersion:number} & ({kind:'submit_answer';payload:{answer:string}}|{kind:'submit_order';payload:KheradgahOrder}|{kind:'pass'|'concede';payload?:null});
export interface KheradgahCommandResult { clientCommandId: string; accepted: boolean; code: string; stateVersion: number }
export type KheradgahServerFrame = {type:'snapshot';view:KheradgahView}|{type:'command_result';result:KheradgahCommandResult}|{type:'command_result';accepted:false;code:string}|{type:'error';code:string};
export interface KheradgahRealtimeOptions { WebSocket?: typeof WebSocket; signal?: AbortSignal }

export interface GameLobbyJoined { sessionId:string;status:"matched" }
export type StateRoomRealtimeOptions = import("./realtime.js").RealtimeOptions & { signal?:AbortSignal };

/** Static process advertisement; not a persistence or provider readiness check. */
export interface StateProcessHealthResponse {
 data: { service: "infera-state"; status: "healthy"; transports: ["websocket"]; rulesets: ["kheradgah.v1"]; wasm: true };
}

export interface GameEconomyInput { entryCoins: number; burnPercent: number; enabled: boolean }
export interface GameEconomy extends GameEconomyInput { gameId: string; rulesetRevision: number }
export interface GameOperationsBreakdown { gameId: string; status: string; paid: boolean; settlementStatus: string; count: number }
export interface GameOperationsSummary { sessions: number; active: number; finished: number; paid: number; pendingSettlements: number; breakdown: GameOperationsBreakdown[] }
export interface GameOperationMember { userId: string; score: number; ready: boolean; forfeited: boolean; joinedAt: string }
export interface GameOperationSession { id: string; gameId: string; ownerId: string; difficulty: string; status: string; paid: boolean; entryCoins: number; burnPercent: number; round: number; totalRounds: number; score: number; attempts: number; hints: number; version: number; sequence: number; metrics: GamePayload; settlementStatus: string; eventCount: number; members: GameOperationMember[]; createdAt: string; finishedAt: string | null }
/** payload is stored, game-authored event JSON; the enclosing event record is stable. */
export interface GameOperationEvent { id: string; userId: string; sequence: number; kind: string; payload: GamePayload; createdAt: string }
export interface GameOperationPage<T> { items: T[]; page: number; pageSize: number; total: number; pages: number }
export type GameOperationSessionsResponse = GameResult<GameOperationPage<GameOperationSession>>;
export type GameOperationEventsResponse = GameResult<GameOperationPage<GameOperationEvent>>;
export type GameOperationsSummaryResponse = GameResult<GameOperationsSummary>;
export type GameEconomiesResponse = GameResult<GameEconomy[]>;
export type GameEconomyResponse = GameResult<GameEconomy>;
export type MatchmakingResponse = GameResult<import("./match.js").MatchmakingTicket>;
export type MatchViewResponse<View = import("./match.js").MatchView> = GameResult<View>;
export type MatchConnectionResponse = GameResult<KheradgahConnectionTicket>;

/** Concrete revision-two multiplayer Player DTO. carrying is null when no civilian is held. */
export interface GameBoardPlayer { id: string; score: number; position: number; carrying: number | null; delivered: number[]; claims: number[]; multiplicationsLeft: number; fuel: number; cargo: number; water: number; energy: number; materials: number; houses: number; transportLeft: number; developments: string[] }
/** Public multiplayer Board projection excludes the private seed; scene is game-specific JSON and hides private puzzle solutions. */
export interface GameMultiplayerBoard { game: string; turn: number; maxTurns: number; scene: GamePayload; players: GameBoardPlayer[]; submittedIds: string[] }
