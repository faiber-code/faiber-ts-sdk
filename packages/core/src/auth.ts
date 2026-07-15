import type { TokenProvider, TokenSet } from "./types.js";
export class MemoryTokenProvider implements TokenProvider {
    #tokens: TokenSet | null;
    constructor(initial: TokenSet | null = null) { this.#tokens = initial; }
    getTokens() { return this.#tokens; }
    setTokens(tokens: TokenSet | null) { this.#tokens = tokens; }
}
export interface StorageLike {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export class StorageTokenProvider implements TokenProvider {
    constructor(private storage: StorageLike, private key = "faiber.auth") { }
    getTokens(): TokenSet | null {
        const value = this.storage.getItem(this.key);
        if (!value)
            return null;
        try {
            return JSON.parse(value) as TokenSet;
        }
        catch {
            return null;
        }
    }
    setTokens(tokens: TokenSet | null) {
        if (tokens)
            this.storage.setItem(this.key, JSON.stringify(tokens));
        else
            this.storage.removeItem(this.key);
    }
}
export function bearerAuthorization(tokens: TokenSet | null) { return tokens?.accessToken ? `${tokens.tokenType ?? "Bearer"} ${tokens.accessToken}` : null; }
