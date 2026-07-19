# Faiber TypeScript SDK Contributor Guide

This repository is the public TypeScript SDK monorepo for Faiber services. Changes must keep source contracts, consumer documentation, Git releases, and npm packages synchronized.

## Audience and documentation

- Public package READMEs are written for developers installing packages from npm, not for maintainers developing this monorepo.
- Every publishable package must contain a `README.md` with its exact npm install command, import path, configuration example, authentication guidance, at least one realistic API call, error/cancellation behavior, and a link to the complete SDK when relevant.
- Do not put monorepo build commands, local service startup instructions, release scripts, or maintainer-only OpenAPI generation steps in package READMEs.
- The root README is the complete npm consumer guide. It must document the facade, individual packages, service domains, authentication and refresh, pagination/search, uploads/media, typed inputs and outputs, Axios behavior, cancellation, and errors.
- Examples must use exported methods and types that exist in the released version. Never document a planned API as available.
- Keep examples framework-neutral unless a section is explicitly labeled for a framework or runtime.
- Security guidance must prefer secure HttpOnly cookies or in-memory tokens. Persistent browser storage must be described as an explicit tradeoff, never an automatic default.

## Package names

- All public packages belong to the `@faiber` npm organization.
- The complete facade is `@faiber/faiber-ts-sdk`.
- Shared infrastructure is `@faiber/sdk-core`.
- Service packages use `@faiber/faiber-<service>`, currently:
  - `@faiber/faiber-idp`
  - `@faiber/faiber-profile`
  - `@faiber/faiber-modules`
  - `@faiber/faiber-asset`
  - `@faiber/faiber-payment`
  - `@faiber/faiber-messenger`
  - `@faiber/faiber-crm`
  - `@faiber/faiber-lms`
  - `@faiber/faiber-reservation`
  - `@faiber/faiber-session`
  - `@faiber/faiber-version`
  - `@faiber/faiber-flow`
- Do not publish the private monorepo root.
- Do not reintroduce or publish new versions under the historical unscoped `faiber-ts-sdk` name.

## Version consistency

- A release uses one version across the root workspace, core, every service package, and the facade.
- Every internal dependency must reference that exact release version. Do not leave mixed internal versions.
- Update `package-lock.json` whenever package names, versions, or dependencies change.
- The facade is published only after all packages it depends on are available at the same version.
- Follow semantic versioning: patches for compatible fixes/docs, minors for compatible capabilities, and majors for breaking public contracts.

## API and type quality

- Public methods must have named, exported input and output interfaces. Avoid `any` and unexplained `unknown` in consumer-facing APIs.
- Preserve full Axios responses so users retain status, headers, request IDs, and transport context.
- Keep convenience APIs ergonomic, while `FaiberClient` and `OpenApiClient` provide typed access for custom or newly released operations.
- Support normal Axios options, including signals, timeouts, headers, adapters, and interceptors.
- Upload APIs must use standards-compliant `FormData` and work in supported browser and Node runtimes.
- Correct service contract drift before release. HTTP methods, routes, parameter names, nullability, identifiers, pagination, and response envelopes must match the service API.

## Required release gates

Run these from the repository root before committing a release:

```bash
npm install
npm run build
NPM_CONFIG_CACHE=/tmp/faiber-npm-cache npm run pack:check
git diff --check
```

- The build must pass for every workspace.
- The pack check must show the expected README, declarations, JavaScript, source maps, and package metadata.
- Do not publish stale `dist` output.
- If the global npm cache has ownership problems, use the isolated cache shown above instead of changing system ownership as part of a release.

## Git release contract

- Releases are made from `main` after the release gates pass.
- Use a release commit such as `release: publish TypeScript SDK 0.1.2`.
- The Git tag must exactly match the package version, with no automatic `v` prefix. For version `0.1.2`, the tag is `0.1.2`.
- Use an annotated tag:

```bash
git tag -a 0.1.2 -m "Faiber TypeScript SDK 0.1.2"
```

- Push the release commit before the tag:

```bash
git push origin main
git push origin 0.1.2
```

- Never move, recreate, or force-push a published release tag.
- The committed package versions, npm versions, and Git tag must always match.

## npm publication

- Confirm the npm account is authenticated and authorized for the `@faiber` organization.
- Scoped packages are public and must be published with `--access public`.
- Always use explicit local paths beginning with `./`; `npm publish packages/core` may be interpreted as a package or Git spec.
- Publish in dependency order:
  1. `./packages/core`
  2. all service packages
  3. `./packages/sdk`
- Recommended release loop:

```bash
for package in core idp profile modules asset payment messenger crm lms reservation session version flow sdk; do
  NPM_CONFIG_CACHE=/tmp/faiber-npm-cache npm publish "./packages/$package" --access public
done
```

- npm may require browser approval for a publish session. Keep the active process open until authorization completes.
- Publication is irreversible. Verify package names, versions, tarball contents, organization scope, and public access before approval.
- Stop on the first publish error. Do not publish the facade when one of its same-version dependencies failed.

## Post-publication verification

Verify every published version directly from the registry:

```bash
npm view @faiber/sdk-core version
npm view @faiber/faiber-idp version
npm view @faiber/faiber-profile version
npm view @faiber/faiber-modules version
npm view @faiber/faiber-asset version
npm view @faiber/faiber-payment version
npm view @faiber/faiber-messenger version
npm view @faiber/faiber-crm version
npm view @faiber/faiber-lms version
npm view @faiber/faiber-reservation version
npm view @faiber/faiber-session version
npm view @faiber/faiber-version version
npm view @faiber/faiber-flow version
npm view @faiber/faiber-ts-sdk version
```

Check that each result matches the Git tag and committed package version. Report partial releases explicitly; never claim publication succeeded based only on a zero shell exit code.
