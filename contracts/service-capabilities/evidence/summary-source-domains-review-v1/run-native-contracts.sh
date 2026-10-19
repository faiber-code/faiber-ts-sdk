#!/usr/bin/env bash
set -euo pipefail
base="$(cd "$(dirname "$0")" && pwd)"
name="summary-native-domains-$$"
docker run --pull never -d --name "$name" -e POSTGRES_PASSWORD=summary-test -e POSTGRES_DB=summary_test -p 127.0.0.1::5432 --tmpfs /var/lib/postgresql/data postgres:16-alpine >/dev/null
trap 'docker rm -f "$name" >/dev/null' EXIT
for step in {1..30}; do docker exec "$name" pg_isready -U postgres >/dev/null 2>&1 && break; sleep 1; done
port="$(docker port "$name" 5432/tcp | sed 's/.*://')"
sources=("$@")
if [ "${#sources[@]}" -eq 0 ]; then sources=(task chat session); fi
for source in "${sources[@]}"; do
 docker exec "$name" createdb -U postgres "summary_native_$source"
 SUMMARY_TEST_DATABASE_URL="postgres://postgres:summary-test@127.0.0.1:$port/summary_native_$source" CARGO_INCREMENTAL=0 CARGO_BUILD_JOBS=2 cargo test --manifest-path "$base/infera-$source/tests/summary-native/Cargo.toml" --offline -- --nocapture --test-threads=1 >"$base/$source-native-test.log" 2>&1
 done
