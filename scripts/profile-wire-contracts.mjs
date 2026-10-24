// Source-reviewed wire corrections at Profile 5e45db008e503504033af3763b4487f00f5be2b4.
export const profileWireContracts = {
  "profile:POST /api/v1/address/get": {
    "methodName": "optionAddressGetPost",
    "typeBase": "OptionAddressGetPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredProfileAddress[]>",
    "purpose": "Read stored addresses by resolving supplied IDP user_ids to Profile UUIDs. The local mount is public.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:DELETE /api/v1/city/{id}": {
    "methodName": "cityDestroyDelete",
    "typeBase": "CityDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/city/force/{id}": {
    "methodName": "cityForceDestroyDelete",
    "typeBase": "CityForceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/city/undo/{id}": {
    "methodName": "cityRestoreGet",
    "typeBase": "CityRestoreGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Restore the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/country/{id}": {
    "methodName": "countryDestroyDelete",
    "typeBase": "CountryDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/country/force/{id}": {
    "methodName": "countryForceDestroyDelete",
    "typeBase": "CountryForceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/country/undo/{id}": {
    "methodName": "countryRestoreGet",
    "typeBase": "CountryRestoreGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Restore the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/custom-type/{id}": {
    "methodName": "customTypeDestroyDelete",
    "typeBase": "CustomTypeDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete a custom type; acknowledgement data is an empty object.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/dependency": {
    "methodName": "optionDependencyGet",
    "typeBase": "OptionDependencyGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileDependencies>",
    "purpose": "Read constant gender/status/employee_type choices.",
    "auth": "declared IDP permission dependency:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/identity": {
    "methodName": "optionIdentityGet",
    "typeBase": "OptionIdentityGet",
    "response": "ApiEnvelope<import(\"./types.js\").Profile>",
    "purpose": "Read the current gateway identity profile using Get-scope property/service visibility.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/log-action": {
    "methodName": "logActionStorePost",
    "typeBase": "LogActionStorePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLogAction>",
    "purpose": "Insert an action/meta audit row and return its stored ID/timestamp. meta is arbitrary JSON.",
    "auth": "declared IDP permission log_action:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/log-action/{slug}": {
    "methodName": "logActionStoreSlugPost",
    "typeBase": "LogActionStoreSlugPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLogAction>",
    "purpose": "Insert an audit row with the path slug overriding request action; metadata remains arbitrary JSON.",
    "auth": "declared IDP permission log_action:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/log-action/direct/{slug}": {
    "methodName": "logActionStoreDirectPost",
    "typeBase": "LogActionStoreDirectPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLogAction>",
    "purpose": "Insert an audit row through the public direct mount with the path slug overriding request action.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/logger": {
    "methodName": "loggerIndexGet",
    "typeBase": "LoggerIndexGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLog[]>",
    "purpose": "Read all stored audit logs without pagination; local router has no authentication middleware. request/response/meta remain arbitrary JSON.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/logger/{log}": {
    "methodName": "loggerShowGet",
    "typeBase": "LoggerShowGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLog | null>",
    "purpose": "Read a stored audit log by UUID; missing row returns data:null.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:POST /api/v1/parent/children/get": {
    "methodName": "optionParentChildrenGetPost",
    "typeBase": "OptionParentChildrenGetPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredParentLink[]>",
    "purpose": "Read children for parent user_ids, merging legacy links with active parent/child relation types and deduplicating pairs. The local mount is public.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:POST /api/v1/parent/get": {
    "methodName": "optionParentGetPost",
    "typeBase": "OptionParentGetPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredParentLink[]>",
    "purpose": "Read legacy parent-link rows for student user_ids. The local mount is public.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile-media/{uuid}/avatar": {
    "methodName": "profileAvatarShowGetApiV1ProfileMediaUuidAvatar",
    "typeBase": "ProfileAvatarShowGetApiV1ProfileMediaUuidAvatar",
    "response": "ArrayBuffer | Uint8Array",
    "binaryDownload": true,
    "requiredQuery": true,
    "purpose": "Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.",
    "auth": "public read; key restricted to requested owner UUID"
  },
  "profile:GET /api/v1/profile-media/{uuid}/images": {
    "methodName": "profileImageShowGet",
    "typeBase": "ProfileImageShowGet",
    "response": "ArrayBuffer | Uint8Array",
    "binaryDownload": true,
    "requiredQuery": true,
    "purpose": "Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.",
    "auth": "public read; key restricted to requested owner UUID"
  },
  "profile:DELETE /api/v1/profile-property-definition/{id}": {
    "methodName": "profilePropertyDestroyDelete",
    "typeBase": "ProfilePropertyDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/profile-property-definition/force/{id}": {
    "methodName": "profilePropertyForceDestroyDelete",
    "typeBase": "ProfilePropertyForceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:force_delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile-property-definition/undo/{id}": {
    "methodName": "profilePropertyRestoreGet",
    "typeBase": "ProfilePropertyRestoreGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Restore the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:restore; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/profile/{student_uuid}/delete/parent/{parent_uuid}": {
    "methodName": "profileDeleteParentDelete",
    "typeBase": "ProfileDeleteParentDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Delete matching legacy student/parent IDP UUID links and return an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/profile/{uuid}": {
    "methodName": "profileDestroyDelete",
    "typeBase": "ProfileDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete a profile by IDP user UUID; returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/profile/{uuid}/avatar": {
    "methodName": "profileAvatarDeleteDelete",
    "typeBase": "ProfileAvatarDeleteDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Clear the owned/authorized user avatar reference and attempt object cleanup; returns an empty acknowledgement.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/profile/{uuid}/avatar": {
    "methodName": "profileAvatarShowGetApiV1ProfileUuidAvatar",
    "typeBase": "ProfileAvatarShowGetApiV1ProfileUuidAvatar",
    "response": "ArrayBuffer | Uint8Array",
    "binaryDownload": true,
    "requiredQuery": true,
    "purpose": "Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.",
    "auth": "public read; key restricted to requested owner UUID"
  },
  "profile:POST /api/v1/profile/{uuid}/avatar": {
    "methodName": "profileAvatarStorePost",
    "typeBase": "ProfileAvatarStorePost",
    "response": "import(\"./types.js\").ProfileMediaResponse",
    "auth": "authenticated target user or profile:update permission",
    "purpose": "Upload the multipart file field as JPEG, PNG or WebP (up to 5 MiB). Returns url and key; 413 rejects oversize, 415 unsupported media, 422 absent/empty file, and 503 unconfigured storage."
  },
  "profile:DELETE /api/v1/profile/{uuid}/delete/address/{title}": {
    "methodName": "profileDeleteAddressDelete",
    "typeBase": "ProfileDeleteAddressDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Delete an address by exact title and IDP user UUID; returns an empty acknowledgement even if the title has no row.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/profile/{uuid}/images": {
    "methodName": "profileImageStorePost",
    "typeBase": "ProfileImageStorePost",
    "response": "import(\"./types.js\").ProfileMediaResponse",
    "auth": "authenticated target user or profile:update permission",
    "purpose": "Upload the multipart file field as JPEG, PNG or WebP (up to 5 MiB). Returns url and key; 413 rejects oversize, 415 unsupported media, 422 absent/empty file, and 503 unconfigured storage."
  },
  "profile:GET /api/v1/profile/{uuid}/media": {
    "methodName": "profileMediaShowGet",
    "typeBase": "ProfileMediaShowGet",
    "response": "ArrayBuffer | Uint8Array",
    "binaryDownload": true,
    "requiredQuery": true,
    "purpose": "Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.",
    "auth": "authenticated IDP context; key restricted to requested profile UUID"
  },
  "profile:PATCH /api/v1/profile/{uuid}/properties": {
    "methodName": "profileUpdatePropertiesPatch",
    "typeBase": "ProfileUpdatePropertiesPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfilePropertyMutation>",
    "purpose": "Validate active configured properties, update them atomically and rebuild search. Returns updated_keys and array-item added/removed IDs and counts; unknown/inactive keys return 422.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/{uuid}/properties": {
    "methodName": "profileUpdatePropertiesPut",
    "typeBase": "ProfileUpdatePropertiesPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfilePropertyMutation>",
    "purpose": "Validate active configured properties, update them atomically and rebuild search. Returns updated_keys and array-item added/removed IDs and counts; unknown/inactive keys return 422.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/add/address/{uuid}": {
    "methodName": "profileAddAddressPatch",
    "typeBase": "ProfileAddAddressPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace the address with the same title for an IDP user UUID in a transaction; blank titles return 422. Returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/add/address/{uuid}": {
    "methodName": "profileAddAddressPut",
    "typeBase": "ProfileAddAddressPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace the address with the same title for an IDP user UUID in a transaction; blank titles return 422. Returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/add/app/{uuid}": {
    "methodName": "profileAddAppPatch",
    "typeBase": "ProfileAddAppPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace schema-free app JSON for an IDP user UUID and return an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/add/app/{uuid}": {
    "methodName": "profileAddAppPut",
    "typeBase": "ProfileAddAppPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace schema-free app JSON for an IDP user UUID and return an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/add/parent/{uuid}": {
    "methodName": "profileAddParentPatch",
    "typeBase": "ProfileAddParentPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace the legacy parent link for a student IDP UUID; request user_id is the parent IDP UUID. Returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/add/parent/{uuid}": {
    "methodName": "profileAddParentPut",
    "typeBase": "ProfileAddParentPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace the legacy parent link for a student IDP UUID; request user_id is the parent IDP UUID. Returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/profile/force/{uuid}": {
    "methodName": "profileForceDestroyDelete",
    "typeBase": "ProfileForceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete an undeleted profile by IDP user UUID; returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:force_delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/get-chat-list/{uuid}": {
    "methodName": "profileChatListGet",
    "typeBase": "ProfileChatListGet",
    "response": "ApiEnvelope<never[]>",
    "purpose": "Read the compatibility chat-list route, which currently always returns an empty array.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile/get/address/{uuid}": {
    "methodName": "profileGetAddressGet",
    "typeBase": "ProfileGetAddressGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredProfileAddress[]>",
    "purpose": "Read stored addresses by IDP user UUID, resolving the separate local Profile UUID.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/get/parent/{uuid}": {
    "methodName": "profileGetParentGet",
    "typeBase": "ProfileGetParentGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredParentLink | null>",
    "purpose": "Read the optional legacy parent-link row by student IDP UUID; missing link is data:null.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/me/addresses": {
    "methodName": "profileGetMyAddressesGet",
    "typeBase": "ProfileGetMyAddressesGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").StoredProfileAddress[]>",
    "purpose": "Read addresses for the identity supplied by the authenticated gateway context.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PATCH /api/v1/profile/me/addresses": {
    "methodName": "profileSaveMyAddressPatch",
    "typeBase": "ProfileSaveMyAddressPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace an address by title for the current gateway identity. Other addresses remain unchanged; blank titles return 422.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/profile/me/addresses": {
    "methodName": "profileSaveMyAddressPut",
    "typeBase": "ProfileSaveMyAddressPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace an address by title for the current gateway identity. Other addresses remain unchanged; blank titles return 422.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/profile/me/addresses/{title}": {
    "methodName": "profileDeleteMyAddressDelete",
    "typeBase": "ProfileDeleteMyAddressDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Delete the current gateway identity address by exact title and return an empty acknowledgement.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/profile/students/pes/schema": {
    "methodName": "profileStudentPesSchemaGet",
    "typeBase": "ProfileStudentPesSchemaGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").PesSchema>",
    "purpose": "Read the constant PES schema descriptor {count:integer,amount:number}.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile/supports/pes/schema": {
    "methodName": "profileSupportPesSchemaGet",
    "typeBase": "ProfileSupportPesSchemaGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").PesSchema>",
    "purpose": "Read the constant PES schema descriptor {count:integer,amount:number}.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile/undo/{uuid}": {
    "methodName": "profileRestoreGet",
    "typeBase": "ProfileRestoreGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Restore a profile by IDP user UUID, including a previously deleted row; returns an empty acknowledgement.",
    "auth": "declared IDP permission profile:restore; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/update/{uuid}/meta": {
    "methodName": "profileAddMetaPatch",
    "typeBase": "ProfileAddMetaPatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace schema-free metadata JSON for an IDP user UUID and return an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/update/{uuid}/meta": {
    "methodName": "profileAddMetaPut",
    "typeBase": "ProfileAddMetaPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Replace schema-free metadata JSON for an IDP user UUID and return an empty acknowledgement.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/province/{id}": {
    "methodName": "provinceDestroyDelete",
    "typeBase": "ProvinceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/province/force/{id}": {
    "methodName": "provinceForceDestroyDelete",
    "typeBase": "ProvinceForceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/province/undo/{id}": {
    "methodName": "provinceRestoreGet",
    "typeBase": "ProvinceRestoreGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Restore the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/state-action/dry-run": {
    "methodName": "lifecycleDryRunActionPost",
    "typeBase": "LifecycleDryRunActionPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ActionDryRun>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleActionInput",
    "purpose": "Validate action configuration and evaluate its condition against empty facts; returns execution eligibility without executing or enqueueing.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-evaluation/validate-rule": {
    "methodName": "lifecycleValidateRulePost",
    "typeBase": "LifecycleValidateRulePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").RuleValidation>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleRuleInput",
    "purpose": "Validate and evaluate the lifecycle AST against supplied JSON facts; returns valid/matched, invalid rules return 422.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/survey": {
    "methodName": "surveyIndexGet",
    "typeBase": "SurveyIndexGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileSurvey[]>",
    "purpose": "Read all survey rows without pagination. meta is arbitrary stored JSON.",
    "auth": "declared IDP permission survey:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/survey": {
    "methodName": "surveyStorePost",
    "typeBase": "SurveyStorePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileSurvey>",
    "purpose": "Create a survey row. Request key type is serialized as survey_type on the returned row; enrollment_id/type/meta may be omitted or null.",
    "auth": "declared IDP permission survey:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/trusted-service/{id}": {
    "methodName": "trustedServiceDestroyDelete",
    "typeBase": "TrustedServiceDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission trusted_service:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:DELETE /api/v1/trusted-service/{id}/event/{event_id}": {
    "methodName": "trustedServiceEventDestroyDelete",
    "typeBase": "TrustedServiceEventDestroyDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:delete; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /campaign": {
    "methodName": "campaignIndexGet",
    "typeBase": "CampaignIndexGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileCampaign[]>",
    "purpose": "Read active campaigns in their current date window, ordered by sort_order and creation time. visibility metadata is returned as data and is not a row predicate.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /campaign-profile/me/contributions": {
    "methodName": "campaignMyContributionsGet",
    "typeBase": "CampaignMyContributionsGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").CampaignContribution[]>",
    "purpose": "Read current user contribution history with purpose snapshots; confirmed_at is not serialized.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /campaign/{id}": {
    "methodName": "campaignShowGet",
    "typeBase": "CampaignShowGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileCampaign>",
    "purpose": "Read one campaign projection by UUID; the detail query does not restrict status or date window.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /campaign/{id}/contributions": {
    "methodName": "campaignContributePost",
    "typeBase": "CampaignContributePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").CampaignContributionReceipt>",
    "purpose": "Record a positive money/sha contribution for an available campaign using current user and idempotency_key. Disabled methods return 409, invalid amount/method 422; duplicate user/key reuses the existing receipt.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/profile-relation/{id}": {
    "methodName": "relationDeleteRelationDelete",
    "typeBase": "RelationDeleteRelationDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Permanently delete a relation and its inverse atomically.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/referral-source/{id}": {
    "methodName": "referralDeleteDelete",
    "typeBase": "ReferralDeleteDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete and deactivate a referral source.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/relation-type/{id}": {
    "methodName": "relationDeleteTypeDelete",
    "typeBase": "RelationDeleteTypeDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete and deactivate a relation type.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/state-action/{id}": {
    "methodName": "lifecycleDeleteActionDelete",
    "typeBase": "LifecycleDeleteActionDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Disable an action; this command does not physically delete its row.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/state-definition/{id}": {
    "methodName": "lifecycleDeleteStateDelete",
    "typeBase": "LifecycleDeleteStateDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete/deactivate a state definition and trigger immediate-system reevaluation.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:DELETE /api/v1/state-system/{id}": {
    "methodName": "lifecycleDeleteSystemDelete",
    "typeBase": "LifecycleDeleteSystemDelete",
    "response": "ApiEnvelope<import(\"./wire.types.js\").EmptyMutationData>",
    "purpose": "Soft-delete and deactivate a lifecycle system; acknowledge with an empty object.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/integration/flow": {
    "methodName": "integrationFlowIntegrationShowGet",
    "typeBase": "IntegrationFlowIntegrationShowGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileFlowIntegration>",
    "purpose": "Read the broker queue and event payload field metadata for Profile Flow integration; this does not execute workflows.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:PUT /api/v1/ai-summaries/configurations/{id}": {
    "methodName": "aiSummaryConfigurationPut",
    "typeBase": "AiSummaryConfigurationPut",
    "input": "import(\"./summaries.types.js\").SummaryConfigurationUpdate",
    "purpose": "Replace a configuration draft with required expected_version; role_id is immutable, missing version returns 422, changed version returns 409.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/profile/get": {
    "methodName": "profileBulkGetPost",
    "typeBase": "ProfileBulkGetPost",
    "response": "ApiEnvelope<import(\"./types.js\").ProfileListData>",
    "purpose": "Read undeleted profiles for IDP user UUIDs and attach legacy parent summaries. Empty batches return an empty list; the local mount has no auth middleware.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:POST /api/v1/profile/country/get": {
    "methodName": "profileCountryGetPost",
    "typeBase": "ProfileCountryGetPost",
    "response": "ApiEnvelope<import(\"./types.js\").ProfileListData>",
    "purpose": "Read undeleted profiles matching any requested country UUID, optionally restricted by nonempty user_ids.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:POST /api/v1/profile/province/get": {
    "methodName": "profileProvinceGetPost",
    "typeBase": "ProfileProvinceGetPost",
    "response": "ApiEnvelope<import(\"./types.js\").ProfileListData>",
    "purpose": "Read undeleted profiles matching any requested province UUID, optionally restricted by nonempty user_ids.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:POST /api/v1/profile/city/get": {
    "methodName": "profileCityGetPost",
    "typeBase": "ProfileCityGetPost",
    "response": "ApiEnvelope<import(\"./types.js\").ProfileListData>",
    "purpose": "Read undeleted profiles matching any requested city UUID, optionally restricted by nonempty user_ids.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile": {
    "methodName": "profileIndexGet",
    "typeBase": "ProfileIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/manager": {
    "methodName": "profileManagerIndexGet",
    "typeBase": "ProfileManagerIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to manager.",
    "auth": "declared IDP permission profile:read_manager; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/accountant": {
    "methodName": "profileAccountantIndexGet",
    "typeBase": "ProfileAccountantIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to accountant.",
    "auth": "declared IDP permission profile:read_accountant; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/support": {
    "methodName": "profileSupportIndexGet",
    "typeBase": "ProfileSupportIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to support.",
    "auth": "declared IDP permission profile:read_support; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/consultant": {
    "methodName": "profileConsultantIndexGet",
    "typeBase": "ProfileConsultantIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to consultant.",
    "auth": "declared IDP permission profile:read_consultant; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/teacher": {
    "methodName": "profileTeacherIndexGet",
    "typeBase": "ProfileTeacherIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to teacher.",
    "auth": "declared IDP permission profile:read_teacher; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/student": {
    "methodName": "profileStudentIndexGet",
    "typeBase": "ProfileStudentIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to student.",
    "auth": "declared IDP permission profile:read_student; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/parent": {
    "methodName": "profileParentIndexGet",
    "typeBase": "ProfileParentIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to parent.",
    "auth": "declared IDP permission profile:read_parent; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/other": {
    "methodName": "profileOtherIndexGet",
    "typeBase": "ProfileOtherIndexGet",
    "response": "import(\"./types.js\").ProfileListResponse",
    "purpose": "List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to other.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/{uuid}": {
    "methodName": "profileShowGet",
    "typeBase": "ProfileShowGet",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Read a profile by IDP user UUID first, falling back to local Profile UUID; return Get-scope properties/services and Office/LMS projections.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/{uuid}": {
    "methodName": "profileUpdatePatch",
    "typeBase": "ProfileUpdatePatch",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Atomically patch profile scalars, app/meta and validated properties, then rebuild search. Resolves IDP user UUID first and local Profile UUID second. Omission preserves values; job:null clears, while other nullable scalar nulls deserialize as omission in this pinned model.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/{uuid}/full": {
    "methodName": "profileShowFullGet",
    "typeBase": "ProfileShowFullGet",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Read by IDP user UUID or fallback Profile UUID with Full-scope properties/services and Office/LMS projections.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile/{uuid}/admin": {
    "methodName": "profileShowAdminGet",
    "typeBase": "ProfileShowAdminGet",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Read an admin profile by IDP user UUID with admin-visible properties and trusted service data.",
    "auth": "declared IDP permission profile:read_admin; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/{uuid}/freemium-session-limit": {
    "methodName": "profileUpdateFreemiumPut",
    "typeBase": "ProfileUpdateFreemiumPut",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set freemium_session_limit for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:freemium_session_limit; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/{uuid}/freemium-session-limit": {
    "methodName": "profileUpdateFreemiumPatch",
    "typeBase": "ProfileUpdateFreemiumPatch",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set freemium_session_limit for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:freemium_session_limit; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/{uuid}/status": {
    "methodName": "profileUpdateStatusPut",
    "typeBase": "ProfileUpdateStatusPut",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set status for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:update_status; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/{uuid}/status": {
    "methodName": "profileUpdateStatusPatch",
    "typeBase": "ProfileUpdateStatusPatch",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set status for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:update_status; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/{uuid}/employee-type": {
    "methodName": "profileUpdateEmployeeTypePut",
    "typeBase": "ProfileUpdateEmployeeTypePut",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set employee_type for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:update_employee_type; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/{uuid}/employee-type": {
    "methodName": "profileUpdateEmployeeTypePatch",
    "typeBase": "ProfileUpdateEmployeeTypePatch",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Set employee_type for an IDP user UUID and return the Get-scope profile.",
    "auth": "declared IDP permission profile:update_employee_type; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/update/personal-information/{uuid}": {
    "methodName": "profileUpdatePersonalPut",
    "typeBase": "ProfileUpdatePersonalPut",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Update supplied personal fields for an IDP user UUID. Localized name objects merge fa/en string members; job:null clears the job. Other absent/null optional scalar members are preserved.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile/update/personal-information/{uuid}": {
    "methodName": "profileUpdatePersonalPatch",
    "typeBase": "ProfileUpdatePersonalPatch",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Update supplied personal fields for an IDP user UUID. Localized name objects merge fa/en string members; job:null clears the job. Other absent/null optional scalar members are preserved.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile/update/education-information/{uuid}": {
    "methodName": "educationUpdatePut",
    "typeBase": "EducationUpdatePut",
    "response": "import(\"./types.js\").ProfileResponse",
    "purpose": "Atomically update education fields by IDP user UUID. Omission preserves and null clears; invalid attendance/level/referral/education/referrer values return 422. Level is a nonempty string up to 64 characters and description up to 10000.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/profile/search": {
    "methodName": "profileSearchSearchPost",
    "typeBase": "ProfileSearchSearchPost",
    "response": "import(\"./wire.types.js\").ProfileSearchResponse",
    "purpose": "Search by email, names, phone, national code, exact UUID-derived short ID, or dynamic predicates; at least one filter or search term is required. Short-ID collisions return all matches with pagination. Maximum 50 filters/10 sorts, page defaults 1, per_page defaults 20 and caps at 100. include selects core/properties/services snapshots.",
    "auth": "declared IDP permission profile:search; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/profile/people/search": {
    "methodName": "profileSearchSearchPostApiV1ProfilePeopleSearch",
    "typeBase": "ProfileSearchSearchPostApiV1ProfilePeopleSearch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfilePeopleSearchResult>",
    "purpose": "Search active profiles by literal name, email, phone, national code, or exact short ID. Requires 2–160 characters and at most 8 terms; returns up to 20 minimal results and has_more, without national codes.",
    "auth": "declared IDP permission profile:lookup; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/relation-type": {
    "methodName": "relationListTypesGet",
    "typeBase": "RelationListTypesGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileRelationType[]>",
    "purpose": "List undeleted relation types ordered by sort_order.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/relation-type": {
    "methodName": "relationCreateTypePost",
    "typeBase": "RelationCreateTypePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileRelationType>",
    "purpose": "Create a validated relation type with object labels/constraints; directional managed inverses require an active inverse type.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileRelationTypeInput"
  },
  "profile:GET /api/v1/relation-type/{id}": {
    "methodName": "relationShowTypeGet",
    "typeBase": "RelationShowTypeGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileRelationType>",
    "purpose": "Read a relation type by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/relation-type/{id}": {
    "methodName": "relationUpdateTypePut",
    "typeBase": "RelationUpdateTypePut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileRelationType>",
    "purpose": "Replace a validated relation type definition.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileRelationTypeInput"
  },
  "profile:GET /api/v1/profile-relation": {
    "methodName": "relationListRelationsGet",
    "typeBase": "RelationListRelationsGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileProfileRelation[]>",
    "purpose": "List relations by optional endpoint profile_id and active flag, newest first.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/profile-relation": {
    "methodName": "relationCreateRelationPost",
    "typeBase": "RelationCreateRelationPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileProfileRelation[]>",
    "purpose": "Create relation plus managed inverse atomically after active-type, endpoint, self-link and cardinality/status constraint checks. Returns one or two rows.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileRelationInput"
  },
  "profile:GET /api/v1/profile-relation/{id}": {
    "methodName": "relationShowRelationGet",
    "typeBase": "RelationShowRelationGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileProfileRelation>",
    "purpose": "Read a relation by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/profile-relation/{id}": {
    "methodName": "relationUpdateRelationPut",
    "typeBase": "RelationUpdateRelationPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileProfileRelation[]>",
    "purpose": "Update object metadata/active flag on a relation and its managed inverse atomically; returns updated rows.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileRelationUpdateInput"
  },
  "profile:GET /api/v1/referral-source": {
    "methodName": "referralListGet",
    "typeBase": "ReferralListGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileReferralSource[]>",
    "purpose": "List undeleted referral sources ordered by sort_order.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/referral-source": {
    "methodName": "referralCreatePost",
    "typeBase": "ReferralCreatePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileReferralSource>",
    "purpose": "Create a referral source requiring nonblank code and object labels/metadata.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileReferralSourceInput"
  },
  "profile:GET /api/v1/referral-source/{id}": {
    "methodName": "referralShowGet",
    "typeBase": "ReferralShowGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileReferralSource>",
    "purpose": "Read a referral source by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/referral-source/{id}": {
    "methodName": "referralUpdatePut",
    "typeBase": "ReferralUpdatePut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileReferralSource>",
    "purpose": "Replace a referral source requiring nonblank code and object labels/metadata.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./wire.types.js\").ProfileReferralSourceInput"
  },
  "profile:GET /api/v1/state-system": {
    "methodName": "lifecycleSystemsGet",
    "typeBase": "LifecycleSystemsGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateSystem[]>",
    "purpose": "List undeleted lifecycle systems ordered by code.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-system": {
    "methodName": "lifecycleCreateSystemPost",
    "typeBase": "LifecycleCreateSystemPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateSystem>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleSystemInput",
    "purpose": "Create a lifecycle system with object labels/description, validated rule and optional valid cron schedule.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-system/{id}": {
    "methodName": "lifecycleShowSystemGet",
    "typeBase": "LifecycleShowSystemGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateSystem>",
    "purpose": "Read a lifecycle system row by local UUID, including a soft-deleted row if present.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/state-system/{id}": {
    "methodName": "lifecycleUpdateSystemPut",
    "typeBase": "LifecycleUpdateSystemPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateSystem>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleSystemInput",
    "purpose": "Replace lifecycle system configuration, increment version and trigger reevaluation for immediate publication mode.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-definition": {
    "methodName": "lifecycleStatesGet",
    "typeBase": "LifecycleStatesGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateDefinition[]>",
    "purpose": "List undeleted state definitions, optionally by system_id, highest priority first.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-definition": {
    "methodName": "lifecycleCreateStatePost",
    "typeBase": "LifecycleCreateStatePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateDefinition>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleStateInput",
    "purpose": "Create a validated state under an existing system; each system may have one undeleted fallback. Immediate systems trigger reevaluation.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-definition/{id}": {
    "methodName": "lifecycleShowStateGet",
    "typeBase": "LifecycleShowStateGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateDefinition>",
    "purpose": "Read a state definition row by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/state-definition/{id}": {
    "methodName": "lifecycleUpdateStatePut",
    "typeBase": "LifecycleUpdateStatePut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateDefinition>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleStateInput",
    "purpose": "Replace a validated state configuration and increment version; immediate systems trigger reevaluation.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-action": {
    "methodName": "lifecycleActionsListGet",
    "typeBase": "LifecycleActionsListGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateAction[]>",
    "purpose": "List state actions, optionally by state_id, ordered by sort_order.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-action": {
    "methodName": "lifecycleCreateActionPost",
    "typeBase": "LifecycleCreateActionPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateAction>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleActionInput",
    "purpose": "Create a validated enter/exit action of type event/webhook/message/external_flag with retry configuration.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-action/{id}": {
    "methodName": "lifecycleShowActionGet",
    "typeBase": "LifecycleShowActionGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateAction>",
    "purpose": "Read a state action by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/state-action/{id}": {
    "methodName": "lifecycleUpdateActionPut",
    "typeBase": "LifecycleUpdateActionPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateAction>",
    "input": "import(\"./wire.types.js\").ProfileLifecycleActionInput",
    "purpose": "Replace a validated state action configuration.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-evaluation/transitions": {
    "methodName": "lifecycleTransitionsGet",
    "typeBase": "LifecycleTransitionsGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateTransition[]>",
    "purpose": "List transitions optionally filtered by Profile UUID and system UUID, newest first.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-evaluation/outbox": {
    "methodName": "lifecycleOutboxGet",
    "typeBase": "LifecycleOutboxGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateActionOutbox[]>",
    "purpose": "List outbox rows optionally filtered by status.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/state-evaluation/action-attempts": {
    "methodName": "lifecycleActionAttemptsGet",
    "typeBase": "LifecycleActionAttemptsGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateActionAttempt[]>",
    "purpose": "List action attempts optionally by outbox_id, newest first.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-evaluation/outbox/{id}/retry": {
    "methodName": "lifecycleRetryPost",
    "typeBase": "LifecycleRetryPost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileStateActionOutbox>",
    "purpose": "Reset only a failed outbox row to pending; missing rows return 404 and other states 409.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/auth/self": {
    "methodName": "sessionGetSelfGet",
    "typeBase": "SessionGetSelfGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileSession>",
    "purpose": "Read current gateway identity roles, permissions and Full-scope profile.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PATCH /api/v1/auth/self": {
    "methodName": "sessionUpdateSelfNamePatch",
    "typeBase": "SessionUpdateSelfNamePatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileSession>",
    "purpose": "Set current identity fa/en name strings; first name must be nonempty, each name at most 100 characters, locale fa/en, and embedded control characters are rejected with 422.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/auth/self/onboarding": {
    "methodName": "sessionCompleteOnboardingPut",
    "typeBase": "SessionCompleteOnboardingPut",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileSession>",
    "purpose": "Validate age/height/weight/goal, merge onboarding app fields in PostgreSQL, and return the current session. Caller-supplied identity/role fields are rejected.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/auth/chat-context": {
    "methodName": "sessionGetChatContextGet",
    "typeBase": "SessionGetChatContextGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileChatContext>",
    "purpose": "Read Chat-scope context: remove id, user_id, properties and services from the profile; return visible properties as a separate object. Office/LMS histories are omitted.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/custom-type": {
    "methodName": "customTypeIndexGet",
    "typeBase": "CustomTypeIndexGet",
    "response": "import(\"./wire.types.js\").ProfileCustomTypePage",
    "purpose": "Page undeleted custom types by name; filter[search] is a name substring, defaults 1/15 and size caps 100.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/custom-type": {
    "methodName": "customTypeStorePost",
    "typeBase": "CustomTypeStorePost",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileCustomTypeData>",
    "purpose": "Create a custom type with at least one option matching value_type; invalid options return 422 and duplicate names 409. Options may be raw values or {value,code,labels} objects.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./types.js\").CreateCustomTypeInput"
  },
  "profile:GET /api/v1/custom-type/{id}": {
    "methodName": "customTypeShowGet",
    "typeBase": "CustomTypeShowGet",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileCustomTypeData>",
    "purpose": "Read an undeleted custom type by UUID.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PATCH /api/v1/custom-type/{id}": {
    "methodName": "customTypeUpdatePatch",
    "typeBase": "CustomTypeUpdatePatch",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileCustomTypeData>",
    "purpose": "Update supplied custom type fields and validate the resulting option list against value_type.",
    "auth": "gateway AuthContext; no additional named handler permission check",
    "input": "import(\"./types.js\").UpdateCustomTypeInput"
  },
  "profile:POST /api/v1/state-evaluation/preview": {
    "methodName": "lifecyclePreviewPost",
    "typeBase": "LifecyclePreviewPost",
    "input": "import(\"./wire.types.js\").ProfileLifecycleEvaluationInput",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLifecycleEvaluation>",
    "purpose": "Evaluate system eligibility and choose the highest-priority matching active state or fallback without persisting transitions.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-evaluation/evaluate": {
    "methodName": "lifecycleEvaluatePost",
    "typeBase": "LifecycleEvaluatePost",
    "input": "import(\"./wire.types.js\").ProfileLifecycleEvaluationInput",
    "response": "ApiEnvelope<import(\"./wire.types.js\").ProfileLifecycleEvaluation>",
    "purpose": "Persist a changed eligible selected state under a profile/system lock, record its transition, and enqueue enter/exit actions; unchanged/ineligible results do not create transitions.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /health": {
    "methodName": "routerHealthGetHealth",
    "typeBase": "RouterHealthGetHealth",
    "purpose": "Read process health and the package version; no dependency readiness check is performed.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /up": {
    "methodName": "routerHealthGetUp",
    "typeBase": "RouterHealthGetUp",
    "purpose": "Read process health and the package version; no dependency readiness check is performed.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/openapi.json": {
    "methodName": "routerOpenapiJsonGet",
    "typeBase": "RouterOpenapiJsonGet",
    "purpose": "Read raw generated OpenAPI JSON; annotations do not establish complete mounted-route coverage.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/fitness/products": {
    "methodName": "fitnessProductsGet",
    "typeBase": "FitnessProductsGet",
    "purpose": "Read server-owned one-time plan prices in IRR and support credit quotas. Human tariffs and meal upgrades are separate workflows.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/trial/redeem": {
    "methodName": "fitnessRedeemPost",
    "typeBase": "FitnessRedeemPost",
    "purpose": "Redeem a valid gift for an eligible verified new gym member. Returns frozen trial entitlement; duplicate same-gift redemption reuses it, other prior trials are rejected.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/notifications": {
    "methodName": "fitnessNotificationsGet",
    "typeBase": "FitnessNotificationsGet",
    "purpose": "Read at most 100 unread current-user order events, newest first.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/notifications/{id}/read": {
    "methodName": "fitnessReadNotificationPost",
    "typeBase": "FitnessReadNotificationPost",
    "purpose": "Mark a current-user order notification read; returns {read:true} even when no owned row matched.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/admin/provision": {
    "methodName": "fitnessProvisionPost",
    "typeBase": "FitnessProvisionPost",
    "purpose": "As fitness admin, idempotently provision the main gym and Asset products. Validate manager/AI-coach profiles and required model/assistant choices; enabling requires a complete catalog.",
    "auth": "declared IDP permission fitness:admin; gateway enforces ACL metadata, local annotation itself is not a permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/admin/catalog": {
    "methodName": "fitnessImportCatalogPost",
    "typeBase": "FitnessImportCatalogPost",
    "purpose": "As fitness admin, import validated active catalog items from an immutable published Knowledge release in one transaction.",
    "auth": "declared IDP permission fitness:admin; gateway enforces ACL metadata, local annotation itself is not a permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/team": {
    "methodName": "fitnessTeamGet",
    "typeBase": "FitnessTeamGet",
    "purpose": "Read the manager gym coach roster with profile names and tariff snapshots.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:PUT /api/v1/fitness/team": {
    "methodName": "fitnessSaveCoachPut",
    "typeBase": "FitnessSaveCoachPut",
    "purpose": "As manager, enroll/disable a coach within the same gym after verifying a Profile exists; the AI coach cannot be assigned here.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/tariffs": {
    "methodName": "fitnessSaveTariffPost",
    "typeBase": "FitnessSaveTariffPost",
    "purpose": "As manager or the selected coach, validate and version a tariff and publish its Asset product. Expected-version conflicts return 409.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/self": {
    "methodName": "fitnessMeGet",
    "typeBase": "FitnessMeGet",
    "purpose": "Read current membership, active plans, manager flag, assistant ID, paid/trial chat balance and optional trial entitlement.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/intake": {
    "methodName": "fitnessIntakeGet",
    "typeBase": "FitnessIntakeGet",
    "purpose": "Read the current enabled member intake draft, or null if no draft exists.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:PUT /api/v1/fitness/intake": {
    "methodName": "fitnessSaveIntakePut",
    "typeBase": "FitnessSaveIntakePut",
    "purpose": "Validate and save current member intake using expected_version; stale versions return 409 and no duplicate draft is created.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/orders": {
    "methodName": "fitnessOrdersGet",
    "typeBase": "FitnessOrdersGet",
    "purpose": "List up to 200 own/assigned/managed orders, or all orders for fitness admin; job_token and model_snapshot are withheld.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/orders": {
    "methodName": "fitnessPurchasePost",
    "typeBase": "FitnessPurchasePost",
    "purpose": "Purchase at server-owned prices or selected human tariff. Idempotency UUID is scoped to the current member; conflicting reuse returns 422. Trial bundles consume explicit entitlement; paid orders create Payment transactions.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/orders/{id}": {
    "methodName": "fitnessShowGetApiV1FitnessOrdersId",
    "typeBase": "FitnessShowGetApiV1FitnessOrdersId",
    "purpose": "Read an authorized order with current plan and pending proposals; owner, selected coach, gym manager or fitness admin may read.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/orders/{id}/action": {
    "methodName": "fitnessActionPost",
    "typeBase": "FitnessActionPost",
    "purpose": "Apply a versioned order transition: owner retry/retry_payment/refund, selected enabled coach accept/decline. Invalid transitions return 422; stale update returns 409.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/orders/{id}/plan": {
    "methodName": "fitnessAssignPost",
    "typeBase": "FitnessAssignPost",
    "purpose": "Assign and activate a validated human coaching plan as the selected enabled coach; base revision detects stale writes.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/revisions/{id}": {
    "methodName": "fitnessRevisionGet",
    "typeBase": "FitnessRevisionGet",
    "purpose": "Read a plan revision only after authorizing its owning order.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/revisions/{id}/review": {
    "methodName": "fitnessReviewPost",
    "typeBase": "FitnessReviewPost",
    "purpose": "As the order owner, accept a proposed revision using its base revision or reject it. Returns a revision receipt on accept and {status:rejected} on rejection.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/coaches": {
    "methodName": "fitnessCoachesGet",
    "typeBase": "FitnessCoachesGet",
    "purpose": "List enabled coaches and enabled published tariffs for the current enabled member gym, with bilingual coach_name.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/catalog": {
    "methodName": "fitnessListCatalogGet",
    "typeBase": "FitnessListCatalogGet",
    "purpose": "Read enabled catalog entries as an enabled member, manager or enabled main-gym coach. kind/category/name query filters apply, offset floors at zero, and at most 100 rows are returned.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/settings": {
    "methodName": "fitnessSettingsGet",
    "typeBase": "FitnessSettingsGet",
    "purpose": "Read the main gym configuration as its manager or fitness admin.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:PUT /api/v1/fitness/settings": {
    "methodName": "fitnessSaveSettingsPut",
    "typeBase": "FitnessSaveSettingsPut",
    "purpose": "Save manager model/STT/TTS selections after Chat validates them; expected_version detects stale configuration with 409.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/voice-settings": {
    "methodName": "fitnessVoiceSettingsGet",
    "typeBase": "FitnessVoiceSettingsGet",
    "purpose": "Read model/STT/TTS choices and version as an enabled member or manager; payment is not required.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:GET /api/v1/fitness/context": {
    "methodName": "fitnessContextGet",
    "typeBase": "FitnessContextGet",
    "purpose": "Read current enabled member entitled coaching context, active AI/trial plans, Full-scope profile and compact catalog. Does not accept a target user ID.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/fitness/proposals": {
    "methodName": "fitnessProposePost",
    "typeBase": "FitnessProposePost",
    "purpose": "Validate a revision for an owned AI/trial order using base_revision_id; create a proposal without activating it.",
    "auth": "gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented"
  },
  "profile:POST /api/v1/internal/fitness-chat/reserve": {
    "methodName": "fitnessReservePost",
    "typeBase": "FitnessReservePost",
    "purpose": "Reserve one response credit for a trusted Chat turn. Locks quota, checks user/turn binding, consumes paid grant or trial balance, and creates a fifteen-minute reservation lease.",
    "auth": "dedicated FITNESS_CHAT_TOKEN Bearer service credential; user IDP credentials do not satisfy this guard"
  },
  "profile:POST /api/v1/internal/fitness-chat/settle": {
    "methodName": "fitnessSettlePost",
    "typeBase": "FitnessSettlePost",
    "purpose": "Settle a trusted Chat turn with required success: consume a reserved response on success or refund once on failure; already-settled turns are idempotent.",
    "auth": "dedicated FITNESS_CHAT_TOKEN Bearer service credential; user IDP credentials do not satisfy this guard"
  },
  "profile:GET /api/v1/internal/plans/gifts": {
    "methodName": "fitnessListGet",
    "typeBase": "FitnessListGet",
    "purpose": "Read Asset-only trial gifts with page/per_page/search. Defaults 1/25, size caps at 100, page at 100000, and search length at 200. Token hashes are withheld.",
    "auth": "dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter"
  },
  "profile:POST /api/v1/internal/plans/gifts": {
    "methodName": "fitnessCreatePost",
    "typeBase": "FitnessCreatePost",
    "purpose": "Create an Asset-only gift idempotently by request_id and created_by. Limits require responses 1\u201359/plans 1\u20132; token is returned only on initial creation.",
    "auth": "dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter"
  },
  "profile:GET /api/v1/internal/plans/gifts/{id}": {
    "methodName": "fitnessShowGetApiV1InternalPlansGiftsId",
    "typeBase": "FitnessShowGetApiV1InternalPlansGiftsId",
    "purpose": "Read an Asset-only gift record without its token hash.",
    "auth": "dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter"
  },
  "profile:PUT /api/v1/internal/plans/gifts/{id}": {
    "methodName": "fitnessUpdatePut",
    "typeBase": "FitnessUpdatePut",
    "purpose": "Edit future gift redemption settings; existing entitlement remains frozen. max_uses cannot fall below used_count; token rotation is rejected after first redemption.",
    "auth": "dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter"
  },
  "profile:GET /api/v1/ai-summaries/settings": {
    "methodName": "aiSummarySettingsGet",
    "typeBase": "AiSummarySettingsGet",
    "purpose": "Read deployment-scoped global generation, concurrency and retention settings; reading does not invoke a model.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:PUT /api/v1/ai-summaries/settings": {
    "methodName": "aiSummarySettingsPut",
    "typeBase": "AiSummarySettingsPut",
    "purpose": "Set concurrency 1\u201316 and retention 1\u20133650 days; disabling generation cancels pending/retry/generating jobs for this deployment.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/roles": {
    "methodName": "aiSummaryRolesGet",
    "typeBase": "AiSummaryRolesGet",
    "purpose": "Read IDP role catalog enriched with matching deployment summary configuration IDs/enabled flags.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/models": {
    "methodName": "aiSummaryModelsGet",
    "typeBase": "AiSummaryModelsGet",
    "purpose": "Read the configured Agentic project-funded model catalog, including tool support.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/sources": {
    "methodName": "aiSummarySourcesGet",
    "typeBase": "AiSummarySourcesGet",
    "purpose": "Read source capabilities, configured availability and concrete tool input/output JSON schemas.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/ai-summaries/sources/{source}/check": {
    "methodName": "aiSummarySourceCheckPost",
    "typeBase": "AiSummarySourceCheckPost",
    "purpose": "Check an authenticated source adapter through Agentic. Connectivity alone does not establish eligible subject evidence or activate a configuration.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/configurations": {
    "methodName": "aiSummaryConfigurationsGet",
    "typeBase": "AiSummaryConfigurationsGet",
    "purpose": "List all deployment summary configuration rows, newest first.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/ai-summaries/configurations": {
    "methodName": "aiSummaryConfigurationCreatePost",
    "typeBase": "AiSummaryConfigurationCreatePost",
    "purpose": "Create a role configuration after confirming the IDP role exists; duplicate role configuration returns 409. Success status is 201.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/configurations/{id}": {
    "methodName": "aiSummaryConfigurationGet",
    "typeBase": "AiSummaryConfigurationGet",
    "purpose": "Read one deployment configuration row by UUID.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/validate": {
    "methodName": "aiSummaryValidatePost",
    "typeBase": "AiSummaryValidatePost",
    "purpose": "Validate draft formulas, budgets, sources, IDP role and tool-capable model without publishing; invalid drafts return 422.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/publish": {
    "methodName": "aiSummaryPublishPost",
    "typeBase": "AiSummaryPublishPost",
    "purpose": "Publish an immutable next revision using draft version concurrency, then enqueue eligible role members. Duplicate identical publication or changed draft returns 409.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:POST /api/v1/ai-summaries/configurations/{id}/preview": {
    "methodName": "aiSummaryPreviewPost",
    "typeBase": "AiSummaryPreviewPost",
    "purpose": "Queue an eligible subject draft preview and return job_id/run_id with status 202. Global generation must be on; preview also requires subject read permission. Preview does not publish.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:PATCH /api/v1/ai-summaries/configurations/{id}/status": {
    "methodName": "aiSummaryStatusPatch",
    "typeBase": "AiSummaryStatusPatch",
    "purpose": "Enable a published role configuration and enqueue eligible subjects, or disable it and cancel its jobs; enabling without a publication returns 409.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:configure"
  },
  "profile:GET /api/v1/ai-summaries/latest": {
    "methodName": "aiSummaryLatestGet",
    "typeBase": "AiSummaryLatestGet",
    "purpose": "Read persisted deployment/subject/role latest state with availability/freshness and nullable job_status. Required role_id; read_own restricts to current subject, read_all permits others. GET never generates.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:read_own"
  },
  "profile:GET /api/v1/ai-summaries/summaries": {
    "methodName": "aiSummarySummariesGet",
    "typeBase": "AiSummarySummariesGet",
    "purpose": "Page persisted deployment summary runs using subject/role/status; defaults page=1/per_page=25 with size cap 100. read_own restricts the subject unless read_all is present.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:read_own"
  },
  "profile:GET /api/v1/ai-summaries/runs/{id}": {
    "methodName": "aiSummaryRunGet",
    "typeBase": "AiSummaryRunGet",
    "purpose": "Read a persisted deployment run only with subject read_own/read_all authority.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:read_own"
  },
  "profile:GET /api/v1/ai-summaries/jobs": {
    "methodName": "aiSummaryJobsGet",
    "typeBase": "AiSummaryJobsGet",
    "purpose": "Page deployment jobs using subject/role/status; defaults 1/25 and caps 100. Preview configuration, lease token and requested_by are withheld.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:manage"
  },
  "profile:POST /api/v1/ai-summaries/refresh": {
    "methodName": "aiSummaryRefreshPost",
    "typeBase": "AiSummaryRefreshPost",
    "purpose": "Queue 1\u2013100 eligible subject-role pairs from published configurations and return 202 with job IDs; global and role generation must be enabled.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:manage"
  },
  "profile:POST /api/v1/ai-summaries/jobs/{id}/retry": {
    "methodName": "aiSummaryRetryPost",
    "typeBase": "AiSummaryRetryPost",
    "purpose": "Reset a failed reviewable/terminal job for this deployment and return 202. Nonretryable or missing jobs return 409.",
    "auth": "IDP-validated Bearer/cookie actor; profile:ai_summary:manage"
  },
  "profile:GET /api/v1/profile/supports/pes": {
    "methodName": "profileSupportPesGet",
    "typeBase": "ProfileSupportPesGet",
    "purpose": "Aggregate pending nonarchived enrollments across undeleted profiles: count and amount minus discount.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile/students/pes": {
    "methodName": "profileStudentPesGet",
    "typeBase": "ProfileStudentPesGet",
    "purpose": "Aggregate enrolled nonarchived enrollments across undeleted profiles: count and amount minus discount.",
    "auth": "no local authentication or permission check; deployment gateway policy is separate"
  },
  "profile:GET /api/v1/profile/get/app/{uuid}": {
    "methodName": "profileGetAppGet",
    "typeBase": "ProfileGetAppGet",
    "purpose": "Read schema-free stored app JSON for an IDP user UUID; missing data becomes an empty object.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/profile/people/resolve": {
    "methodName": "workspaceResolvePeople",
    "typeBase": "ProfileSearchResolvePost",
    "purpose": "Resolve 1\u2013200 requested active undeleted IDP user UUIDs. Results preserve names, set email/phone null, and has_more=false. Does not decide external space membership.",
    "auth": "declared IDP permission profile:lookup; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/country": {
    "methodName": "countryIndexGet",
    "typeBase": "CountryIndexGet",
    "purpose": "List the country records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.",
    "auth": "declared IDP permission country:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/country": {
    "methodName": "countryStorePost",
    "typeBase": "CountryStorePost",
    "purpose": "Create the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/country/{id}": {
    "methodName": "countryShowGet",
    "typeBase": "CountryShowGet",
    "purpose": "Read the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/country/{id}": {
    "methodName": "countryUpdatePut",
    "typeBase": "CountryUpdatePut",
    "purpose": "Update supplied fields on the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/country/{id}": {
    "methodName": "countryUpdatePatch",
    "typeBase": "CountryUpdatePatch",
    "purpose": "Update supplied fields on the country record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission country:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/education": {
    "methodName": "educationIndexGet",
    "typeBase": "EducationIndexGet",
    "purpose": "List active undeleted education {id,name} options ordered by name/id.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/education": {
    "methodName": "educationStorePost",
    "typeBase": "EducationStorePost",
    "purpose": "Create an education option from a trimmed name containing 1\u2013255 characters; invalid names return 422.",
    "auth": "declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/education/dependencies": {
    "methodName": "educationDependenciesGet",
    "typeBase": "EducationDependenciesGet",
    "purpose": "Read attendance choices, active referral source codes and level_max_length=64.",
    "auth": "declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile-referral/{profile_id}": {
    "methodName": "referralShowProfileReferralGet",
    "typeBase": "ReferralShowProfileReferralGet",
    "purpose": "Read the raw Profile row by local Profile UUID; this is not the shaped public profile response.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:PUT /api/v1/profile-referral/{profile_id}": {
    "methodName": "referralAssignPut",
    "typeBase": "ReferralAssignPut",
    "purpose": "Replace referral source/referrer by local Profile UUID; null/omitted fields clear them. Reject self/cyclic referrals, chains beyond 64 levels and inactive/missing sources or referrers.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:POST /api/v1/state-evaluation/outbox/process": {
    "methodName": "lifecycleProcessOutboxPost",
    "typeBase": "LifecycleProcessOutboxPost",
    "purpose": "Process up to 100 ready actions and return the count completed; may publish broker events or call configured webhooks.",
    "auth": "gateway AuthContext; no additional named handler permission check"
  },
  "profile:GET /api/v1/province": {
    "methodName": "provinceIndexGet",
    "typeBase": "ProvinceIndexGet",
    "purpose": "List the province records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.",
    "auth": "declared IDP permission province:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/province": {
    "methodName": "provinceStorePost",
    "typeBase": "ProvinceStorePost",
    "purpose": "Create the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/province/{id}": {
    "methodName": "provinceShowGet",
    "typeBase": "ProvinceShowGet",
    "purpose": "Read the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/province/{id}": {
    "methodName": "provinceUpdatePut",
    "typeBase": "ProvinceUpdatePut",
    "purpose": "Update supplied fields on the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/province/{id}": {
    "methodName": "provinceUpdatePatch",
    "typeBase": "ProvinceUpdatePatch",
    "purpose": "Update supplied fields on the province record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission province:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/city": {
    "methodName": "cityIndexGet",
    "typeBase": "CityIndexGet",
    "purpose": "List the city records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.",
    "auth": "declared IDP permission city:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/city": {
    "methodName": "cityStorePost",
    "typeBase": "CityStorePost",
    "purpose": "Create the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/city/{id}": {
    "methodName": "cityShowGet",
    "typeBase": "CityShowGet",
    "purpose": "Read the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/city/{id}": {
    "methodName": "cityUpdatePut",
    "typeBase": "CityUpdatePut",
    "purpose": "Update supplied fields on the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/city/{id}": {
    "methodName": "cityUpdatePatch",
    "typeBase": "CityUpdatePatch",
    "purpose": "Update supplied fields on the city record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission city:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/setting": {
    "methodName": "settingIndexGet",
    "typeBase": "SettingIndexGet",
    "purpose": "Read all numeric settings, newest first, under data.setting.",
    "auth": "declared IDP permission setting:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/setting": {
    "methodName": "settingStorePost",
    "typeBase": "SettingStorePost",
    "purpose": "Create a numeric setting from key/title/value and return data.setting.",
    "auth": "declared IDP permission setting:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile-property-definition": {
    "methodName": "profilePropertyIndexGet",
    "typeBase": "ProfilePropertyIndexGet",
    "purpose": "List the property definition records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.",
    "auth": "declared IDP permission profile_property_definition:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/profile-property-definition": {
    "methodName": "profilePropertyStorePost",
    "typeBase": "ProfilePropertyStorePost",
    "purpose": "Create the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/profile-property-definition/{id}": {
    "methodName": "profilePropertyShowGet",
    "typeBase": "ProfilePropertyShowGet",
    "purpose": "Read the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/profile-property-definition/{id}": {
    "methodName": "profilePropertyUpdatePut",
    "typeBase": "ProfilePropertyUpdatePut",
    "purpose": "Update supplied fields on the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/profile-property-definition/{id}": {
    "methodName": "profilePropertyUpdatePatch",
    "typeBase": "ProfilePropertyUpdatePatch",
    "purpose": "Update supplied fields on the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission profile_property_definition:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/trusted-service": {
    "methodName": "trustedServiceIndexGet",
    "typeBase": "TrustedServiceIndexGet",
    "purpose": "List the trusted service records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.",
    "auth": "declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/trusted-service": {
    "methodName": "trustedServiceStorePost",
    "typeBase": "TrustedServiceStorePost",
    "purpose": "Create the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission trusted_service:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/trusted-service/{id}": {
    "methodName": "trustedServiceShowGet",
    "typeBase": "TrustedServiceShowGet",
    "purpose": "Read the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/trusted-service/{id}": {
    "methodName": "trustedServiceUpdatePut",
    "typeBase": "TrustedServiceUpdatePut",
    "purpose": "Update supplied fields on the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/trusted-service/{id}": {
    "methodName": "trustedServiceUpdatePatch",
    "typeBase": "TrustedServiceUpdatePatch",
    "purpose": "Update supplied fields on the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.",
    "auth": "declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/trusted-service/{id}/event": {
    "methodName": "trustedServiceEventIndexGet",
    "typeBase": "TrustedServiceEventIndexGet",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:POST /api/v1/trusted-service/{id}/event": {
    "methodName": "trustedServiceEventStorePost",
    "typeBase": "TrustedServiceEventStorePost",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:create; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/trusted-service/{id}/event/{event_id}": {
    "methodName": "trustedServiceEventShowGet",
    "typeBase": "TrustedServiceEventShowGet",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PUT /api/v1/trusted-service/{id}/event/{event_id}": {
    "methodName": "trustedServiceEventUpdatePut",
    "typeBase": "TrustedServiceEventUpdatePut",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:PATCH /api/v1/trusted-service/{id}/event/{event_id}": {
    "methodName": "trustedServiceEventUpdatePatch",
    "typeBase": "TrustedServiceEventUpdatePatch",
    "purpose": "Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.",
    "auth": "declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check"
  },
  "profile:GET /api/v1/integration/docs": {
    "methodName": "integrationIntegrationDocsShowGet",
    "typeBase": "IntegrationIntegrationDocsShowGet",
    "purpose": "Read HTTP integration metadata and SDK snippets; optional direct transport fields are omitted when absent.",
    "auth": "declared IDP permission admin:integration:read; gateway enforces ACL metadata, local annotation itself is not a permission check"
  }
};
