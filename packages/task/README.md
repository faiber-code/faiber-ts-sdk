# @faiber/faiber-task

Typed client for Faiber Tasks, the sandbox-local authority for software, marketing and operational work.

```bash
npm install @faiber/faiber-task
```

Install the package, construct a FaiberClient for service task, then pass it to TaskApi.

Methods return complete Axios responses and accept standard request options, including AbortSignal. Mutating aggregates use If-Match; retried creates require an idempotency key. IDP provides identity and global permission while Task enforces scoped grants.
