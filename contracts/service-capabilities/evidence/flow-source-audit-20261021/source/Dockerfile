# Rust deps cached via cargo-chef. panel/ is excluded from Rust COPY layers so
# frontend-only commits do not invalidate the cargo build step.
FROM rust:1.92.0 AS chef
ARG CARGO_REGISTRY=sparse+https://index.crates.io/
ENV CARGO_HTTP_TIMEOUT=120 CARGO_HTTP_LOW_SPEED_LIMIT=1 CARGO_HTTP_MULTIPLEXING=false CARGO_NET_RETRY=10
RUN set -e; \
    REG="$CARGO_REGISTRY"; \
    if [ -n "$REG" ] && [ "${REG#sparse+}" = "$REG" ]; then \
      case "$REG" in http://*|https://*) REG="sparse+${REG}";; esac; \
    fi; \
    case "$REG" in sparse+http://*|sparse+https://*) REG="${REG%/}/";; esac; \
    if [ -n "$REG" ] \
      && [ "$REG" != "sparse+https://index.crates.io/" ] \
      && [ "$REG" != "https://index.crates.io/" ]; then \
      mkdir -p "$CARGO_HOME" && printf '%s\n' \
        '[source.crates-io]' \
        'replace-with = "infera-control"' \
        '[source.infera-control]' \
        "registry = \"${REG}\"" \
        > "$CARGO_HOME/config.toml"; \
    fi
RUN cargo install cargo-chef --locked
WORKDIR /usr/src/app

FROM chef AS planner
COPY Cargo.toml Cargo.lock* ./
COPY src src
COPY entity entity
COPY migration migration
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /usr/src/app/recipe.json recipe.json
RUN --mount=type=cache,id=infera-flow-cargo-registry,target=/usr/local/cargo/registry,sharing=locked \
    --mount=type=cache,id=infera-flow-cargo-git,target=/usr/local/cargo/git,sharing=locked \
    --mount=type=cache,id=infera-flow-cargo-target,target=/usr/src/app/target,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json
COPY Cargo.toml Cargo.lock* ./
COPY src src
COPY entity entity
COPY migration migration
RUN --mount=type=cache,id=infera-flow-cargo-registry,target=/usr/local/cargo/registry,sharing=locked \
    --mount=type=cache,id=infera-flow-cargo-git,target=/usr/local/cargo/git,sharing=locked \
    --mount=type=cache,id=infera-flow-cargo-target,target=/usr/src/app/target,sharing=locked \
    cargo build --release && \
    strip target/release/infera_flow && \
    cp target/release/infera_flow /usr/local/bin/infera_flow

FROM node:22-alpine AS nodebuilder

WORKDIR /usr/src/app
ARG NPM_REGISTRY=https://registry.npmjs.org/
ARG VITE_API_URL
ENV npm_config_registry=${NPM_REGISTRY} \
    npm_config_replace_registry_host=always
ENV VITE_API_URL=$VITE_API_URL
COPY panel/package.json panel/package-lock.json* ./
RUN --mount=type=cache,id=infera-flow-npm,target=/root/.npm,sharing=locked \
    npm ci --prefer-offline --no-audit --no-fund
COPY panel/ ./
RUN npm run build

FROM ubuntu:24.04

ARG APT_MIRROR=
ARG APT_HTTP_PROXY=
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
RUN set -eux; \
    if [ -n "$APT_HTTP_PROXY" ]; then printf 'Acquire::http::Proxy "%s";\nAcquire::https::Proxy "%s";\n' "$APT_HTTP_PROXY" "$APT_HTTP_PROXY" > /etc/apt/apt.conf.d/01infera-proxy; \
    elif [ -n "$APT_MIRROR" ]; then printf 'Types: deb\nURIs: %s\nSuites: noble noble-updates noble-backports noble-security\nComponents: main restricted universe multiverse\nSigned-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg\n' "${APT_MIRROR%/}" > /etc/apt/sources.list.d/ubuntu.sources; \
    else sed -i 's#http://#https://#g' /etc/apt/sources.list.d/ubuntu.sources; fi; \
    apt-get update; apt-get install -y --no-install-recommends ca-certificates libssl3 libc6; rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/bin/infera_flow /usr/local/bin/
COPY --from=nodebuilder /usr/src/app/dist/ ./panel/dist/

EXPOSE 8060
CMD ["/usr/local/bin/infera_flow", "serve"]
