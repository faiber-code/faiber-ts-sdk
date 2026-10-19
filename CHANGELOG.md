# Changelog

## 1.0.0 — unreleased integration candidate

This source version is pending full service, permission, workflow and consumer
acceptance. It has not been published by the knowledge-brain implementation task.

- Role summaries move from LMS to Profile (`sdk.profile.summaries`), using canonical
  role UUIDs and explicit Profile read/configuration permissions. The eight LMS
  summary operation methods and their fixed-role convenience methods are removed.
  Parent status grants no summary access. Existing LMS evaluations remain available.
- Preserve the 0.24.1 personal Chat, notification/contact, delivery and feedback APIs.
- Classroom responses include distinct current `student_count` independently of
  nullable enrollment capacity, with the corrected classroom list envelope.
- Manage conversations bind the current project and user; paged history retains
  cursor headers. Server-bound preferences cannot grant service permissions.
- Require Axios 1.20.0 or later within major1; preserve typed request options for
  actual encoded wire bodies. Update the development brace-expansion dependency.

Deploy the coordinated service contracts before using changed APIs. Summary live
provider/billing/browser acceptance, canonical integration and the remaining
semantic SDK/Manage gates remain release blockers. No agent-memory migration or
Knowledge instruction publication is included in this version declaration.
