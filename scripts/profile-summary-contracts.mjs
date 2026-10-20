// Reviewed Profile summary wire types; stable operation names survive regeneration.
export const profileSummaryContracts = {
  "profile:GET /api/v1/ai-summaries/settings": {
    "methodName": "aiSummarySettingsGet",
    "typeBase": "AiSummarySettingsGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummarySettings>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:PUT /api/v1/ai-summaries/settings": {
    "methodName": "aiSummarySettingsPut",
    "typeBase": "AiSummarySettingsPut",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummarySettings>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped.",
    "input": "import(\"./summaries.types.js\").SummarySettings"
  },
  "profile:GET /api/v1/ai-summaries/roles": {
    "methodName": "aiSummaryRolesGet",
    "typeBase": "AiSummaryRolesGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryRole[]>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/models": {
    "methodName": "aiSummaryModelsGet",
    "typeBase": "AiSummaryModelsGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryModel[]>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/sources": {
    "methodName": "aiSummarySourcesGet",
    "typeBase": "AiSummarySourcesGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryCapability[]>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:POST /api/v1/ai-summaries/sources/{source}/check": {
    "methodName": "aiSummarySourceCheckPost",
    "typeBase": "AiSummarySourceCheckPost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummarySourceCheck>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/configurations": {
    "methodName": "aiSummaryConfigurationsGet",
    "typeBase": "AiSummaryConfigurationsGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord[]>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:POST /api/v1/ai-summaries/configurations": {
    "methodName": "aiSummaryConfigurationCreatePost",
    "typeBase": "AiSummaryConfigurationCreatePost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped.",
    "input": "import(\"./summaries.types.js\").SummaryConfigurationWrite"
  },
  "profile:GET /api/v1/ai-summaries/configurations/{id}": {
    "methodName": "aiSummaryConfigurationGet",
    "typeBase": "AiSummaryConfigurationGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:PUT /api/v1/ai-summaries/configurations/{id}": {
    "methodName": "aiSummaryConfigurationPut",
    "typeBase": "AiSummaryConfigurationPut",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped.",
    "input": "import(\"./summaries.types.js\").SummaryConfigurationWrite"
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/validate": {
    "methodName": "aiSummaryValidatePost",
    "typeBase": "AiSummaryValidatePost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryValidation>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/publish": {
    "methodName": "aiSummaryPublishPost",
    "typeBase": "AiSummaryPublishPost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/preview": {
    "methodName": "aiSummaryPreviewPost",
    "typeBase": "AiSummaryPreviewPost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryPreviewResponse>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Preview an eligible subject using the structured draft. Global generation must be enabled; global off returns 409. The role may remain disabled for a draft preview, which never publishes a configuration.",
    "input": "import(\"./summaries.types.js\").SummaryPreviewWrite"
  },
  "profile:PATCH /api/v1/ai-summaries/configurations/{id}/status": {
    "methodName": "aiSummaryStatusPatch",
    "typeBase": "AiSummaryStatusPatch",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryConfigurationRecord>",
    "auth": "profile:ai_summary:configure",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped.",
    "input": "import(\"./summaries.types.js\").SummaryStatusWrite"
  },
  "profile:GET /api/v1/ai-summaries/latest": {
    "methodName": "aiSummaryLatestGet",
    "query": "import(\"./summaries.types.js\").SummaryLatestQuery",
    "requiredQuery": true,
    "typeBase": "AiSummaryLatestGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryLatest>",
    "auth": "profile:ai_summary:read_own or profile:ai_summary:read_all",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/summaries": {
    "methodName": "aiSummarySummariesGet",
    "query": "import(\"./summaries.types.js\").SummaryListQuery",
    "typeBase": "AiSummarySummariesGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryPage<import(\"./summaries.types.js\").SummaryRun>>",
    "auth": "profile:ai_summary:read_own or profile:ai_summary:read_all",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/runs/{id}": {
    "methodName": "aiSummaryRunGet",
    "typeBase": "AiSummaryRunGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryRun>",
    "auth": "profile:ai_summary:read_own or profile:ai_summary:read_all",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:GET /api/v1/ai-summaries/jobs": {
    "methodName": "aiSummaryJobsGet",
    "query": "import(\"./summaries.types.js\").SummaryListQuery",
    "typeBase": "AiSummaryJobsGet",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryPage<import(\"./summaries.types.js\").SummaryJob>>",
    "auth": "profile:ai_summary:manage",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  },
  "profile:POST /api/v1/ai-summaries/refresh": {
    "methodName": "aiSummaryRefreshPost",
    "typeBase": "AiSummaryRefreshPost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryRefreshResponse>",
    "auth": "profile:ai_summary:manage",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped.",
    "input": "import(\"./summaries.types.js\").SummaryRefreshWrite"
  },
  "profile:POST /api/v1/ai-summaries/jobs/{id}/retry": {
    "methodName": "aiSummaryRetryPost",
    "typeBase": "AiSummaryRetryPost",
    "response": "import(\"@faiber/sdk-core\").ApiEnvelope<import(\"./summaries.types.js\").SummaryRetryResponse>",
    "auth": "profile:ai_summary:manage",
    "purpose": "Read persisted role summaries or administer their Profile-owned lifecycle. GET operations never invoke a model; content reads remain subject and deployment scoped."
  }
};
