// Wire models reviewed against Task and Chat handlers. Keep the ergonomic facade and generated operations identical.
export const collaborationContracts = {
  "task:GET /api/v1/collaboration/config": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").CollaborationConfig>"
  },
  "task:GET /api/v1/memory-usage": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").MemoryUsage>"
  },
  "task:GET /api/v1/projects/{id}/memory-usage": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").MemoryUsage>"
  },
  "task:GET /api/v1/plans/memory-limits": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").PlanMemoryLimits>"
  },
  "task:PUT /api/v1/plans/admin/memory-limits": {
    "input": "import(\"./collaboration.js\").PlanMemoryLimits",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").PlanMemoryLimits>"
  },
  "task:GET /api/v1/projects/{id}/board-workflow": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").BoardWorkflow>"
  },
  "task:PUT /api/v1/projects/{id}/board-workflow": {
    "input": "import(\"./collaboration.js\").SaveBoardWorkflow",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").BoardWorkflow>"
  },
  "task:POST /api/v1/work-items/{id}/attachments": {
    "input": "import(\"./collaboration.js\").CreateAttachment",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").TaskAttachment>"
  },
  "task:GET /api/v1/attachments/{id}": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").TaskAttachment>"
  },
  "task:DELETE /api/v1/attachments/{id}": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").DeletedAttachment>"
  },
  "task:PUT /api/v1/attachments/{id}/content": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").TaskAttachment>"
  },
  "task:GET /api/v1/notes/{id}/media": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteMedia>"
  },
  "task:PUT /api/v1/notes/{id}/cover": {
    "input": "import(\"./collaboration.js\").SetNoteCover",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteMedia>"
  },
  "task:POST /api/v1/notes/{id}/media": {
    "input": "import(\"./collaboration.js\").AddNoteMedia",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteMedia>"
  },
  "task:DELETE /api/v1/notes/{id}/media/{attachment}": {
    "input": "import(\"./collaboration.js\").RemoveNoteMedia",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteMedia>"
  },
  "task:POST /api/v1/notes/{id}/imports": {
    "input": "import(\"./collaboration.js\").StartNoteImport",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteImportJob>"
  },
  "task:POST /api/v1/notes/{id}/source-imports": {
    "input": "import(\"./collaboration.js\").StartSourceImport",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteImportJob>"
  },
  "task:GET /api/v1/note-imports/{id}": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteImportJob>"
  },
  "task:POST /api/v1/note-imports/{id}": {
    "input": "import(\"./collaboration.js\").ControlNoteImport",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteImportJob>"
  },
  "task:POST /api/v1/note-imports/{id}/apply": {
    "input": "import(\"./collaboration.js\").ApplyNoteImport",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteImportJob>"
  },
  "task:GET /api/v1/notes/{id}/indexing": {
    "input": null,
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteIndexing>"
  },
  "task:POST /api/v1/notes/knowledge/search": {
    "input": "import(\"./collaboration.js\").NoteKnowledgeQuery",
    "response": "import(\"./types.js\").TaskResponse<import(\"./collaboration.js\").NoteKnowledgeResult>"
  },
  "chat:POST /api/v1/speech/voice": {
    "input": "import(\"./assistant-voice.js\").AssistantVoiceInput",
    "response": "import(\"./assistant-voice.js\").AssistantVoiceResponse"
  },
  "chat:GET /api/v1/admin/speech-settings": {
    "input": null,
    "response": "import(\"./types.js\").SpeechSettingsResponse"
  },
  "chat:PUT /api/v1/admin/speech-settings": {
    "input": "import(\"./types.js\").SpeechSettings",
    "response": "import(\"./types.js\").SpeechSettingsResponse"
  }
};
