import type { ClientEvent, InputFrame, JoinTicket, Room, ServerEvent, StatePatch } from "./types.js";
export interface StateRealtimeEventMap {
  snapshot: Room;
  patch: StatePatch;
  player_joined: Extract<ServerEvent, { type: "player_joined" }>;
  player_left: Extract<ServerEvent, { type: "player_left" }>;
  ack: Extract<ServerEvent, { type: "ack" }>;
  pong: Extract<ServerEvent, { type: "pong" }>;
  error: Error;
  close: CloseEvent;
}
/** Host-provided UDP gateway; send the JSON InputFrame including its room ticket. QUIC is not a mounted State transport. */
export interface DatagramTransport { send(frame: InputFrame): void | Promise<void>; close(): void }
export interface RealtimeOptions { WebSocket?: typeof WebSocket; datagram?: DatagramTransport; reconnect?: boolean; reconnectDelayMs?: number }
/** Room replication authenticated with a five-minute scoped join ticket. HTTP identity/organization checks occur when issuing the ticket. */
export class StateRealtimeClient {
  private socket?: WebSocket;
  private listeners = new Map<keyof StateRealtimeEventMap, Set<(value: never) => void>>();
  private sequence = 0;
  private closed = false;
  private retry?: ReturnType<typeof setTimeout>;
  constructor(readonly ticket: JoinTicket, private readonly options: RealtimeOptions = {}) {}
  /** Open the ticket WebSocket; rejects if closed, expired or unavailable. */
  connect(): Promise<void> {
    const Socket = this.options.WebSocket ?? globalThis.WebSocket;
    if (!Socket) return Promise.reject(new Error("WebSocket is unavailable; provide RealtimeOptions.WebSocket"));
    if (this.closed) return Promise.reject(new Error("State realtime client is closed"));
    if (Date.parse(this.ticket.expires_at) <= Date.now()) return Promise.reject(new Error("State room ticket is expired; join again"));
    const url = new URL(this.ticket.websocket_url);
    url.searchParams.set("room_id", this.ticket.room_id);
    url.searchParams.set("player_id", this.ticket.player_id);
    url.searchParams.set("ticket", this.ticket.ticket);
    return new Promise((resolve, reject) => {
      const socket = new Socket(url);
      this.socket = socket;
      socket.onopen = () => resolve();
      socket.onerror = () => reject(new Error("Unable to connect to Infera State"));
      socket.onmessage = event => this.receive(String(event.data));
      socket.onclose = event => {
        reject(new Error("State room connection closed before opening"));
        this.emit("close", event);
        if (!this.closed && this.options.reconnect !== false && Date.parse(this.ticket.expires_at) > Date.now()) {
          this.retry = setTimeout(() => { void this.connect().catch(reason => this.emit("error", reason instanceof Error ? reason : new Error(String(reason)))); }, this.options.reconnectDelayMs ?? 750);
        }
      };
    });
  }
  /** Subscribe to a decoded server event; returns an unsubscribe function. */
  on<K extends keyof StateRealtimeEventMap>(type: K, listener: (value: StateRealtimeEventMap[K]) => void): () => void {
    let set = this.listeners.get(type);
    if (!set) { set = new Set(); this.listeners.set(type, set); }
    set.add(listener as (value: never) => void);
    return () => { set?.delete(listener as (value: never) => void); };
  }
  /** Send dynamic input JSON; unreliable/acked delivery uses an injected datagram transport when available. Returns the increasing client sequence. */
  sendInput(values: InputFrame["values"], delivery: InputFrame["delivery"] = "unreliable"): number {
    const sequence = ++this.sequence;
    const frame: InputFrame = { room_id: this.ticket.room_id, player_id: this.ticket.player_id, ticket: this.ticket.ticket, sequence, delivery, values };
    if (delivery !== "reliable" && this.options.datagram) {
      void Promise.resolve(this.options.datagram.send(frame)).catch(reason => this.emit("error", reason instanceof Error ? reason : new Error(String(reason))));
    } else this.send({ type: "input", frame });
    return sequence;
  }
  /** Request the current room tick; delivered as a pong event. */
  ping(): void { this.send({ type: "ping" }); }
  /** Acknowledge a sequence. The current backend accepts this frame without a response. */
  acknowledge(sequence: number): void { this.send({ type: "ack", sequence }); }
  /** Stop retries and close both transports. */
  close(): void { this.closed = true; clearTimeout(this.retry); this.options.datagram?.close(); this.socket?.close(); }
  private send(value: ClientEvent): void {
    const Socket = this.options.WebSocket ?? globalThis.WebSocket;
    if (!Socket || this.socket?.readyState !== Socket.OPEN) throw new Error("State realtime connection is not open");
    this.socket.send(JSON.stringify(value));
  }
  private receive(raw: string): void {
    try {
      const event = JSON.parse(raw) as ServerEvent;
      if (event.type === "snapshot") this.emit("snapshot", event.room);
      else if (event.type === "patch") this.emit("patch", event.patch);
      else if (event.type === "player_joined") this.emit("player_joined", event);
      else if (event.type === "player_left") this.emit("player_left", event);
      else if (event.type === "ack") this.emit("ack", event);
      else if (event.type === "pong") this.emit("pong", event);
      else if (event.type === "error") this.emit("error", new Error(`${event.code}: ${event.message}`));
    } catch (reason) { this.emit("error", reason instanceof Error ? reason : new Error(String(reason))); }
  }
  private emit<K extends keyof StateRealtimeEventMap>(type: K, value: StateRealtimeEventMap[K]): void { for (const listener of this.listeners.get(type) ?? []) listener(value as never); }
}
