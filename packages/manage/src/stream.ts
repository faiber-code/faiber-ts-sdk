import type { JsonObject, JsonValue } from "@faiber/sdk-core";
import type {
  ManageAgentActionEvent,
  ManageAgentCompleteEvent,
  ManageAgentEvent,
  ManageAgentQuestionEvent,
  ManageAgentStreamBody,
} from "./types.js";

function isReadableStream(body: ManageAgentStreamBody): body is ReadableStream<Uint8Array> {
  return typeof body !== "string" && "getReader" in body;
}

async function* streamChunks(body: ManageAgentStreamBody): AsyncGenerator<Uint8Array | string> {
  if (typeof body === "string") {
    yield body;
    return;
  }
  if (isReadableStream(body)) {
    const reader = body.getReader();
    try {
      while (true) {
        const part = await reader.read();
        if (part.done) break;
        yield part.value;
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }
  for await (const part of body) yield part;
}

function parseEventBlock(block: string): ManageAgentEvent | null {
  let event = "message";
  let id: string | undefined;
  let retry: number | undefined;
  const data: string[] = [];
  for (const line of block.replaceAll("\r\n", "\n").split("\n")) {
    if (!line || line.startsWith(":")) continue;
    const separator = line.indexOf(":");
    const field = separator === -1 ? line : line.slice(0, separator);
    const value = separator === -1 ? "" : line.slice(separator + 1).replace(/^ /, "");
    if (field === "event") event = value;
    else if (field === "data") data.push(value);
    else if (field === "id") id = value;
    else if (field === "retry") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) retry = parsed;
    }
  }
  if (!data.length) return null;
  const serialized = data.join("\n");
  let value: JsonValue | string = serialized;
  if (event !== "phase") {
    try {
      value = JSON.parse(serialized) as JsonValue;
    } catch {
      value = serialized;
    }
  }
  return {
    event,
    data: value,
    raw: block,
    ...(id === undefined ? {} : { id }),
    ...(retry === undefined ? {} : { retry }),
  };
}

/** Incrementally parses standard SSE blocks from browser ReadableStreams, Node streams, or text. */
export async function* parseManageAgentEvents(body: ManageAgentStreamBody): AsyncGenerator<ManageAgentEvent> {
  const decoder = new TextDecoder();
  let buffer = "";
  for await (const chunk of streamChunks(body)) {
    buffer += typeof chunk === "string" ? chunk : decoder.decode(chunk, { stream: true });
    while (true) {
      const lfBoundary = buffer.indexOf("\n\n");
      const crlfBoundary = buffer.indexOf("\r\n\r\n");
      const boundary = lfBoundary === -1
        ? crlfBoundary
        : crlfBoundary === -1
          ? lfBoundary
          : Math.min(lfBoundary, crlfBoundary);
      if (boundary === -1) break;
      const separatorLength = buffer.startsWith("\r\n\r\n", boundary) ? 4 : 2;
      const block = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + separatorLength);
      const parsed = parseEventBlock(block);
      if (parsed) yield parsed;
    }
  }
  buffer += decoder.decode();
  if (buffer.trim()) {
    const parsed = parseEventBlock(buffer);
    if (parsed) yield parsed;
  }
}

function objectData(event: ManageAgentEvent): JsonObject | null {
  return typeof event.data === "object" && event.data !== null && !Array.isArray(event.data)
    ? event.data as JsonObject
    : null;
}

export function isManageAgentActionEvent(event: ManageAgentEvent): event is ManageAgentActionEvent {
  const data = objectData(event);
  return event.event === "browser_action" && typeof data?.action_id === "string" && typeof data.name === "string";
}

export function isManageAgentQuestionEvent(event: ManageAgentEvent): event is ManageAgentQuestionEvent {
  const data = objectData(event);
  return event.event === "ask_user" && typeof data?.ask_id === "string" && typeof data.question === "string";
}

export function isManageAgentCompleteEvent(event: ManageAgentEvent): event is ManageAgentCompleteEvent {
  const data = objectData(event);
  return event.event === "complete" && typeof data?.message === "string";
}
