const SHORT_ID_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

/**
 * Derive the stable six-character v1 display/search alias from a classroom UUID or
 * a profile row's `id` (not its IDP `user_id`). Works offline in Node and browsers.
 * Accepts canonical hyphenated or compact UUIDs, case-insensitively.
 * @throws TypeError if the input is not a UUID.
 * This is a lossy alias: searches may return multiple records. Use the returned
 * full UUID for reads/mutations; never use a short ID for authorization.
 */
export function shortIdFromUuid(uuid: string): string {
    if (typeof uuid !== "string" || !/^(?:[0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i.test(uuid)) {
        throw new TypeError("Expected a UUID");
    }
    const hex = uuid.replace(/-/g, "");
    let hash = 2166136261;
    for (let i = 0; i < hex.length; i += 2) {
        hash = Math.imul(hash ^ Number.parseInt(hex.slice(i, i + 2), 16), 16777619) >>> 0;
    }
    let result = "";
    for (let i = 0; i < 6; i++) {
        result = SHORT_ID_ALPHABET[hash & 31] + result;
        hash >>>= 5;
    }
    return result;
}
