# @faiber/faiber-crm

Typed client for the current production CRM: workspace configuration, pipelines and boards,
teams, companies, contacts, leads, deals, SOS membership, workflow assignments, tasks, activities, marketing sources/campaigns,
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
await crm.removeLeadFromSos(leadId, {
  headers: { "Idempotency-Key": crypto.randomUUID() },
});
```

The package exposes all 58 currently mounted routes through `api.operations`, with concise
methods for each CRM business capability. Mutations use optimistic `version` fields and
the backend's `Idempotency-Key` header where required. All methods return complete Axios
responses and accept shared request options, including `AbortSignal` cancellation.

CRM authorization remains server enforced. Typical permissions are scoped by capability,
including `crm:lead:*`, `crm:deal:*`, `crm:company:*`, `crm:contact:*`, `crm:team:*`,
`crm:sos:*`, `crm:workflow_assignment:*`, `crm:task:*`, `crm:activity:*`, `crm:marketing:*`, `crm:report:*`, `crm:automation:read`,
`crm:settings:update`, and `crm:agent:run`; `crm:admin` is the service-wide override.

`deleteTeam` is version-safe and detaches active CRM records before soft deletion.
`removeTeamMember` deactivates a membership. SOS methods add or remove the SOS marker without
deleting the lead. Workflow assignments accept exactly one `team_id` or `user_id`; the
`assignTeamToWorkflow` and `assignUserToWorkflow` helpers enforce that shape.
