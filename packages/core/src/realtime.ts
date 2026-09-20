import PusherModule, { type Options, type Channel, type ConnectionManager } from "pusher-js";

// pusher-js exposes a CommonJS constructor; its default type is ambiguous under NodeNext.
const Pusher = PusherModule as unknown as new (key: string, options: Options) => {
  subscribe(channel: string): Channel;
  unsubscribe(channel: string): void;
  disconnect(): void;
  connection: ConnectionManager;
};

/** Browser-safe configuration returned by a Faiber service; never include an app secret. */
export interface RealtimeConfig {
  ws_url: string;
  app_key: string;
  channel: string;
}
export interface RealtimeAuthorizationInput { [key: string]: string; socket_id: string; channel_name: string }
export interface RealtimeAuthorization { auth: string }
export interface RealtimeEvent { event: string; data: unknown }
export interface RealtimeSubscriptionOptions {
  config: RealtimeConfig;
  /** Authorize through the service's FaiberClient operation using the current user's credentials. */
  authorize(input: RealtimeAuthorizationInput): Promise<RealtimeAuthorization>;
  /** Events are invalidation hints. Reload authoritative records through the service SDK. */
  onEvent(event: RealtimeEvent): void;
  /** Called after every successful subscription, including reconnects, to recover missed updates. */
  onSubscribed?(): void;
  onError?(error: Error): void;
}
export interface RealtimeSubscription { close(): void }

/**
 * Subscribe to a private Sockudo channel using the Pusher-compatible protocol.
 * Authorization runs again on reconnect. The connection handles heartbeat and retry;
 * call close on logout/unmount. HTTPS pages require WSS. HTTP reads remain authoritative.
 */
export function subscribeRealtime(options: RealtimeSubscriptionOptions): RealtimeSubscription {
  const { config } = options;
  const url = new URL(config.ws_url);
  if (!["wss:", "ws:"].includes(url.protocol) || url.username || url.password || url.search || url.hash
      || (typeof location !== "undefined" && location.protocol === "https:" && url.protocol !== "wss:")) {
    throw new Error("Invalid Sockudo WebSocket URL");
  }
  if (!config.app_key || !config.channel.startsWith("private-")) throw new Error("A private realtime channel is required");
  let closed = false;
  const connection = new Pusher(config.app_key, {
    cluster: "faiber", wsHost: url.hostname,
    wsPort: Number(url.port || 80), wssPort: Number(url.port || 443),
    wsPath: url.pathname.replace(/\/$/, ""), forceTLS: url.protocol === "wss:",
    enabledTransports: ["ws", "wss"], disableStats: true,
    channelAuthorization: {
      transport: "ajax", endpoint: "",
      customHandler: (params, callback) => {
        void options.authorize({ socket_id: params.socketId, channel_name: params.channelName }).then(
          result => { if (!closed) callback(null, result); },
          error => { if (!closed) callback(error instanceof Error ? error : new Error("Realtime authorization failed"), null); },
        );
      },
    },
  });
  const channel = connection.subscribe(config.channel);
  channel.bind("pusher:subscription_succeeded", () => { if (!closed) options.onSubscribed?.(); });
  channel.bind("pusher:subscription_error", () => { if (!closed) options.onError?.(new Error("Realtime subscription failed")); });
  channel.bind_global((event: string, data: unknown) => {
    if (!closed && !event.startsWith("pusher:")) options.onEvent({ event, data });
  });
  connection.connection.bind("error", () => { if (!closed) options.onError?.(new Error("Realtime connection unavailable")); });
  return { close() {
    if (closed) return;
    closed = true;
    channel.unbind_all();
    channel.unbind_global();
    connection.unsubscribe(config.channel);
    connection.connection.unbind_all();
    connection.disconnect();
  } };
}
