These are source-only fixtures for unsupported HTTP retirement boundaries.

- `lms.rs`: `infera-lms/src/router.rs::retired_summary` at
  `8d008cd4d9340180be28da9ba8a29ff763814532`.
- `agentic.rs`: `infera-agentic/src/lms_integration.rs::retired_summary` at
  `d76eee4af14bead9ce0e47fc1029bb206218a79c`.

The classifier binds exact body hashes, signatures, source paths, HTTP method,
and mounted paths. It preserves a visible unsupported HTTP 410 boundary and
never generates a callable SDK operation for it. A changed or conditional body
remains unclassified and must fail source review. These fixture tests do not
certify a deployed service or replace the owners' native retirement tests.
LMS educational report/evidence APIs remain separate supported capabilities.
