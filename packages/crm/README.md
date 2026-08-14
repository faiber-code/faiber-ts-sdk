# @faiber/faiber-crm

Typed client for the current production CRM: workspace configuration, pipelines and boards,
teams, companies, contacts, leads, deals, tasks, activities, marketing sources/campaigns,
reports, durable automation, and approval-gated Agentic insights.

```bash
npm install @faiber/faiber-crm
```

```ts
import { CrmApi, FaiberClient } from "@faiber/faiber-crm";

const crm = new CrmApi(new FaiberClient("crm", {
  domains: { crm: process.env.FAIBER_CRM_URL! },
  authMode: "bearer",
  getAccessToken: async () => accessToken,
}));

const leads = await crm.listLeads({ q: "Acme", status: "open" });
const overview = await crm.getOverview();
await crm.moveLeadStage(leadId, { stage_id: nextStageId, version: leadVersion });
```

The package exposes all 49 currently mounted routes through `api.operations`, with concise
methods for each CRM business capability. Mutations use optimistic `version` fields and
the backend's `Idempotency-Key` header where required. All methods return complete Axios
responses and accept shared request options, including `AbortSignal` cancellation.

CRM authorization remains server enforced. Typical permissions are scoped by capability,
including `crm:lead:*`, `crm:deal:*`, `crm:company:*`, `crm:contact:*`, `crm:team:*`,
`crm:task:*`, `crm:activity:*`, `crm:marketing:*`, `crm:report:*`, `crm:automation:read`,
`crm:settings:update`, and `crm:agent:run`; `crm:admin` is the service-wide override.

The previous singular `/api/v1/lead`, workflow, reminder, SOS, and worklog resources are
not mounted by the current CRM and were removed from the public convenience client rather
than issuing requests that always return 404/405.
