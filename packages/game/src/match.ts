import { MatchRealtimeClient, type GameCommand, type MatchConnectionTicket, type MatchView } from "@faiber/faiber-state-sdk";

export interface MatchTransport<View extends MatchView = MatchView> {
  createConnection(matchId: string): Promise<MatchConnectionTicket>;
  fetchView(matchId: string): Promise<View>;
}

/** Client-side match coordinator. It never evaluates answers, card legality,
 * damage, rewards, or winners; every visible state originates from State. */
export class MatchSession<View extends MatchView = MatchView> {
  private realtime?: MatchRealtimeClient<View>;
  private current?: View;
  private listeners = new Set<(view: View) => void>();

  constructor(readonly matchId: string, private readonly transport: MatchTransport<View>) {}
  get view() { return this.current; }
  onView(listener: (view: View) => void) { this.listeners.add(listener); if (this.current) listener(this.current); return () => this.listeners.delete(listener); }

  async connect() {
    this.current = await this.transport.fetchView(this.matchId);
    this.emit();
    const ticket = await this.transport.createConnection(this.matchId);
    this.realtime = new MatchRealtimeClient<View>(ticket, {
      refreshTicket: () => this.transport.createConnection(this.matchId),
      onEvent: event => { if (event.type === "snapshot") { this.current = event.view; this.emit(); } },
    });
    await this.realtime.connect();
  }

  command<Payload>(kind: GameCommand<Payload>["kind"], payload?: Payload) {
    if (!this.current) throw new Error("Match session is not connected");
    this.realtime?.send({ clientCommandId: crypto.randomUUID(), expectedStateVersion: this.current.stateVersion, kind, payload });
  }

  close() { this.realtime?.close(); }
  private emit() { if (this.current) for (const listener of this.listeners) listener(this.current); }
}
