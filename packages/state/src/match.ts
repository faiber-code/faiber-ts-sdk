export type MatchMode = "ranked_duel" | "ranked_alliance" | "open_court";

export interface EnqueueMatchmakingInput { mode: MatchMode }
export interface MatchmakingTicket {
  id: string; gameId: string; userId: string; mode: MatchMode;
  status: "queued" | "matched" | "cancelled"; matchId: string | null; createdAt: string;
}
export interface MatchConnectionTicket { matchId: string; ticket: string; websocketUrl: string; expiresAt: string }
export interface MatchPlayerView<Hero = import("./contracts.types.js").KheradgahHero> {
  userId: string; resolve: number; insight: number; hand: number[] | null; handCount: number;
  council: Hero[]; submittedAnswer: boolean; submittedOrder: boolean; correctAnswers: number | null;
}
export interface MatchQuestion { id: string; prompt: string; revision: number; kind: "numeric" | "short_text" | "boolean"; school: string }
export interface MatchView<Hero = import("./contracts.types.js").KheradgahHero> {
  gameId: string; matchId: string; mode: MatchMode; status: "in_progress" | "finished";
  round: number; stateVersion: number; serverSequence: number; deadline: string; school: string;
  players: MatchPlayerView<Hero>[]; question: MatchQuestion | null; winnerIds: string[]; createdAt: string; you: string;
}
/** Registered command payload JSON; use KheradgahCommand for the discriminated built-in answer/order contract. */
export interface GameCommand<Payload = import("./contracts.types.js").GamePayload> {
  clientCommandId: string; expectedStateVersion: number;
  kind: "submit_answer" | "submit_order" | "pass" | "concede"; payload?: Payload;
}
export interface CommandResult { clientCommandId: string; accepted: boolean; code: string; stateVersion: number }
export type MatchRealtimeEvent<View = MatchView> =
  | { type: "snapshot"; view: View }
  | { type: "command_result"; result: CommandResult }
  | { type: "command_result"; accepted: false; code: string }
  | { type: "error"; code: string; message?: string };

export interface MatchRealtimeOptions<View = MatchView> {
  WebSocket?: typeof WebSocket;
  /** Required for automatic reconnect: each match ticket is consumed by its hello. */
  refreshTicket?: () => Promise<MatchConnectionTicket>;
  reconnect?: boolean;
  maxReconnectDelayMs?: number;
  onEvent?: (event: MatchRealtimeEvent<View>) => void;
}

/** Reliable, identity-bound match channel. Tickets are delivered in the first
 * frame rather than URL query parameters and may be refreshed for reconnect. */
export class MatchRealtimeClient<View = MatchView> {
  private socket?: WebSocket;
  private closed = false;
  private attempt = 0;
  private listeners = new Set<(event: MatchRealtimeEvent<View>) => void>();

  constructor(private ticket: MatchConnectionTicket, private readonly options: MatchRealtimeOptions<View> = {}) {}

  onEvent(listener: (event: MatchRealtimeEvent<View>) => void) { this.listeners.add(listener); return () => this.listeners.delete(listener); }

  connect(): Promise<void> {
    const Socket = this.options.WebSocket ?? globalThis.WebSocket;
    if (!Socket) return Promise.reject(new Error("WebSocket is unavailable"));
    if (this.closed) return Promise.reject(new Error("Match client is closed"));
    return new Promise((resolve, reject) => {
      const socket = new Socket(this.ticket.websocketUrl);
      this.socket = socket;
      socket.onopen = () => { this.attempt = 0; socket.send(JSON.stringify({ type: "hello", ticket: this.ticket.ticket })); resolve(); };
      socket.onmessage = message => this.receive(String(message.data));
      socket.onerror = () => reject(new Error("Unable to connect to Faiber State"));
      socket.onclose = () => { reject(new Error("Match connection closed before opening")); if (!this.closed && this.options.reconnect !== false && this.options.refreshTicket) void this.reconnect(); };
    });
  }

  send<Payload>(command: GameCommand<Payload>) {
    const Socket = this.options.WebSocket ?? globalThis.WebSocket;
    if (!Socket || this.socket?.readyState !== Socket.OPEN) throw new Error("Match connection is not open");
    this.socket.send(JSON.stringify({ type: "command", command }));
  }

  close() { this.closed = true; this.socket?.close(); }

  private receive(raw: string) {
    try {
      const event = JSON.parse(raw) as MatchRealtimeEvent<View>;
      this.options.onEvent?.(event);
      for (const listener of this.listeners) listener(event);
    } catch { /* Invalid server frames are ignored and cannot mutate client state. */ }
  }

  private async reconnect() {
    const base = Math.min(this.options.maxReconnectDelayMs ?? 8_000, 500 * 2 ** this.attempt++);
    await new Promise(resolve => setTimeout(resolve, base / 2 + Math.random() * base / 2));
    if (this.closed || !this.options.refreshTicket) return;
    try {
      this.ticket = await this.options.refreshTicket();
      if (!this.closed) await this.connect().catch(() => {});
    } catch {
      if (!this.closed) void this.reconnect();
    }
  }
}
