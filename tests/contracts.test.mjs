import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { AxiosHeaders } from "axios";
import { FaiberClient, MemoryTokenProvider } from "../packages/core/dist/index.js";
import { LmsApi, certificateImageUrl, certificateViewUrl, classroomSessionRecordingUrl, classroomSessionViewUrl, examPageUrl } from "../packages/lms/dist/index.js";
import { IdpApi } from "../packages/idp/dist/index.js";
import { ProfileApi } from "../packages/profile/dist/index.js";
import { SocialApi } from "../packages/social/dist/index.js";
import { StateApi } from "../packages/state/dist/index.js";

const manifest = JSON.parse(await readFile(new URL("../service-contracts.json", import.meta.url), "utf8"));

test("every extracted endpoint has one documented operation using the shared client", async () => {
  for (const [service, endpoints] of Object.entries(manifest)) {
    const source = await readFile(new URL(`../packages/${service}/src/operations.ts`, import.meta.url), "utf8");
    const routes = [...source.matchAll(/\* Calls `([A-Z]+) ([^`]+)`/g)].map(([, method, path]) => `${method} ${path}`);
    assert.equal(routes.length, endpoints.length, `${service} documentation/operation count`);
    assert.equal(new Set(routes).size, routes.length, `${service} duplicate operations`);
    for (const endpoint of endpoints) assert.ok(routes.includes(`${endpoint.method} ${endpoint.path}`), `${service}: ${endpoint.method} ${endpoint.path}`);
    assert.equal((source.match(/return this\.client\.request</g) ?? []).length, endpoints.length, `${service} centralized client usage`);
    assert.equal((source.match(/@returns The complete Axios response/g) ?? []).length, endpoints.length, `${service} response documentation`);
    assert.equal((source.match(/@throws AxiosError/g) ?? []).length, endpoints.length, `${service} error documentation`);
  }
});

test("generated concrete inputs and queries are never empty placeholders", async () => {
  for (const service of Object.keys(manifest)) {
    const source = await readFile(new URL(`../packages/${service}/src/operations.types.ts`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /interface \w+(?:Input|Query) extends (?:JsonObject|QueryParams) \{\s*\}/, service);
  }
});

test("LMS academy and question deletion preserve routes, bodies, and Bearer authorization", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "academy-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      return { data: { status: "success", data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  await api.academyCourses({ category_id: 7 });
  await api.completeAcademySession("enrollment", 9, { idempotency_key: "once" });
  await api.examQuestions.delete(42);
  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["get", "/api/v1/academy/courses"],
    ["post", "/api/v1/academy/enrollments/enrollment/sessions/9/complete"],
    ["delete", "/api/v1/exams/questions/42"],
  ]);
  assert.ok(seen.every((request) => request.headers.get("Authorization") === "Bearer academy-token"));
  assert.equal(seen[0].params.category_id, 7);
  const completionBody = typeof seen[1].data === "string" ? JSON.parse(seen[1].data) : seen[1].data;
  assert.equal(completionBody.idempotency_key, "once");
});

test("LMS bank hierarchy keeps definitions separate from assignments and exam delivery", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "bank-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      return { data: { status: "success", data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  await api.homeworkBanks.create({ name: "Projects", status: "active" });
  await api.homeworkBankItems("bank/id").create({ question_text: "Capstone", question_type: "answer", status: "active", points: 20 });
  await api.homeworkBankItems("bank/id").delete("item/id");
  await api.deleteAssignment("assignment/id");
  await api.examBanks.delete("exam/id");
  await api.listExamBankItems("exam/id", { page_size: 25 });
  await api.examSessions.delete("session/id");
  await api.updateExamUser("attempt/id", { status: "completed", teacher_score: 18 });

  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["post", "/api/v1/homework-banks"],
    ["post", "/api/v1/homework-banks/bank%2Fid/homeworks"],
    ["delete", "/api/v1/homework-banks/bank%2Fid/homeworks/item%2Fid"],
    ["delete", "/api/v1/homeworks/assignments/assignment%2Fid"],
    ["delete", "/api/v1/exams/exam%2Fid"],
    ["get", "/api/v1/exams/questions"],
    ["delete", "/api/v1/exams/sessions/session%2Fid"],
    ["patch", "/api/v1/exams/attempts/attempt%2Fid"],
  ]);
  assert.equal(seen[5].params.exam_id, "exam/id");
  assert.equal(seen[5].params.page_size, 25);
  assert.ok(seen.every((request) => request.headers.get("Authorization") === "Bearer bank-token"));
});

test("LMS classroom sessions expose types, today filtering, and Session UI links", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com", session: "https://session.example.com/api/v1" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "classroom-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      return { data: { status: "success", data: [] }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  await api.classroomSessionTypes();
  await api.todayClassroomSessions({ date: "2026-09-01", timezone_offset_minutes: 210 });
  await api.listClassrooms({ user_id: "user-id", from: "2026-09-01T00:00:00Z" });
  await api.deleteClassroom("classroom/id");
  await api.classroomSessions.update("session/id", {
    starts_at: "2026-09-23T10:00:00Z",
    shift_following_sessions: true,
  });

  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["get", "/api/v1/classrooms/session-types"],
    ["get", "/api/v1/classrooms/sessions/today"],
    ["get", "/api/v1/classrooms"],
    ["delete", "/api/v1/classrooms/classroom%2Fid"],
    ["patch", "/api/v1/classrooms/sessions/session%2Fid"],
  ]);
  assert.equal(seen[1].params.timezone_offset_minutes, 210);
  assert.deepEqual(api.classroomSessionLinks({ session_room_id: "room/id" }), {
    room: "https://session.example.com/view/room/room%2Fid",
    recording: "https://session.example.com/view/recording/room%2Fid",
  });
  assert.equal(classroomSessionViewUrl("room/id"), "/view/room/room%2Fid");
  assert.equal(classroomSessionRecordingUrl({ session_room_id: null }), null);
  assert.equal(seen[2].params.user_id, "user-id");
  const shiftedSessionBody = typeof seen[4].data === "string" ? JSON.parse(seen[4].data) : seen[4].data;
  assert.equal(shiftedSessionBody.shift_following_sessions, true);
  assert.equal(examPageUrl("attempt/id", "https://lms.example.com"), "https://lms.example.com/dashboard/exam/attempt%2Fid");
  assert.equal(certificateViewUrl("public/id", "https://lms.example.com"), "https://lms.example.com/certificate/public%2Fid");
  assert.equal(certificateImageUrl("public/id"), "/api/v1/public/certificates/public%2Fid/image.svg");
});

test("LMS classroom create and update forward interactive weekly rules unchanged", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "classroom-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      return { data: { status: "success", data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  const weekly_schedule = [
    { day_of_week: 0, starts_at: "15:00", mode: "online" },
    { day_of_week: 2, starts_at: "14:00", mode: "interactive", delivery_type: "interactive" },
  ];
  await api.classrooms.create({ course_id: "course-id", name: "Class", starts_at: "2026-09-20T09:00:00Z", status: "active", weekly_schedule });
  await api.classrooms.update("classroom-id", { weekly_schedule });
  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["post", "/api/v1/classrooms"],
    ["patch", "/api/v1/classrooms/classroom-id"],
  ]);
  for (const request of seen) {
    assert.equal(request.headers.get("Authorization"), "Bearer classroom-token");
    const body = typeof request.data === "string" ? JSON.parse(request.data) : request.data;
    assert.deepEqual(body.weekly_schedule, weekly_schedule);
  }
});

test("LMS certificate management exposes typed template, issuance, verification, and SVG routes", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "certificate-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      const data = config.url?.endsWith("/image.svg")
        ? "<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>"
        : { status: "success", data: {} };
      return { data, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  const layout = {
    fields: [{ key: "student_name", x: 877, y: 545, font_size: 54, weight: 700, text_anchor: "middle" }],
    qr: { key: "verification_code", x: 1460, y: 940, size: 150 },
  };

  await api.certificateTemplates.create({
    name: "Completion",
    background_url: "https://media.example.com/certificate.png",
    canvas_width: 1754,
    canvas_height: 1240,
    layout,
    status: "active",
  });
  await api.certificates.create({
    user_id: "student-id",
    title: "Completion",
    issued_at: "2026-09-14T00:00:00Z",
    certificate_template_id: "template-id",
    status: "issued",
  });
  await api.certificateTemplates.update("template/id", { layout });
  await api.certificates.update("certificate/id", { verification_code: "CERT-001" });
  await api.verifyCertificate("CERT/001");
  const svg = await api.certificateSvg("CERT/001");

  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["post", "/api/v1/certificates/templates"],
    ["post", "/api/v1/certificates"],
    ["patch", "/api/v1/certificates/templates/template%2Fid"],
    ["patch", "/api/v1/certificates/certificate%2Fid"],
    ["get", "/api/v1/public/certificates/CERT%2F001"],
    ["get", "/api/v1/public/certificates/CERT%2F001/image.svg"],
  ]);
  assert.equal(svg.data, "<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>");
  assert.ok(seen.slice(0, 4).every((request) => request.headers.get("Authorization") === "Bearer certificate-token"));
});

test("LMS student statistics use user-scoped server totals instead of truncated arrays", async () => {
  const seen = [];
  const totals = new Map([
    ["/api/v1/classrooms", 99],
    ["/api/v1/homeworks/assignments", 23],
    ["/api/v1/exams/attempts", 11],
  ]);
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    axios: { adapter: async (config) => {
      seen.push(config);
      const data = config.url === "/api/v1/reports/student-summary"
        ? { status: "success", data: { user_id: "student/uuid", classroom_count: 17 } }
        : { status: "success", data: { data: [], meta: { page: 1, page_size: 1, total_items: totals.get(config.url), total_pages: 1 } } };
      return { data, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });

  const result = await new LmsApi(client).studentStatistics("student/uuid");

  assert.deepEqual(result.counts, { classroom_count: 17, homework_count: 23, exam_count: 11 });
  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["get", "/api/v1/reports/student-summary"],
    ["get", "/api/v1/classrooms"],
    ["get", "/api/v1/homeworks/assignments"],
    ["get", "/api/v1/exams/attempts"],
  ]);
  assert.equal(seen[0].params.student_user_id, "student/uuid");
  for (const request of seen.slice(1)) {
    assert.equal(request.params.user_id, "student/uuid");
    assert.equal(request.params.page_number, 1);
    assert.equal(request.params.page_size, 1);
  }
  assert.equal(result.responses.classrooms.status, 200);
});

test("IDP and Profile update helpers route canonical user UUIDs to their owning services", async () => {
  const seen = [];
  const adapter = async (config) => {
    seen.push(config);
    return { data: { status: "success", data: { user: {}, profile: {} } }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
  };
  const userId = "user/uuid";
  await new IdpApi(new FaiberClient("idp", { domains: { idp: "https://idp.example.com" }, axios: { adapter } })).updateUser(userId, { email: "user@example.com" });
  await new ProfileApi(new FaiberClient("profile", { domains: { profile: "https://profile.example.com" }, axios: { adapter } })).updateProfileByUserId(userId, { first_name: "کاربر" });

  assert.deepEqual(seen.map(({ baseURL, method, url }) => [baseURL, method, url]), [
    ["https://idp.example.com", "patch", "/api/v1/users/user%2Fuuid"],
    ["https://profile.example.com", "patch", "/api/v1/profile/user%2Fuuid"],
  ]);
});

test("Social moderation audit uses typed query routing in cookie mode", async () => {
  let seen;
  const client = new FaiberClient("social", {
    domains: { social: "https://social.example.com" },
    axios: { withCredentials: true, adapter: async (config) => {
      seen = config;
      return { data: { status: "success", data: [], meta: { total: 0, page: 1, limit: 30 } }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  await new SocialApi(client).moderationAudit({ target_type: "post", action: "hide", page: 1, limit: 30 });
  assert.equal(seen.url, "/api/v1/moderation/audit");
  assert.equal(seen.params.action, "hide");
  assert.equal(seen.withCredentials, true);
  assert.equal(seen.headers.has("Authorization"), false);
});

test("State world updates use PUT through the authorized shared client", async () => {
  let seen;
  const client = new FaiberClient("state", {
    domains: { state: "https://state.example.com" }, authMode: "bearer",
    tokenProvider: new MemoryTokenProvider({ accessToken: "state-token" }),
    axios: { adapter: async (config) => {
      seen = config;
      return { data: { data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  await new StateApi(client).updateWorld("world/id", { name: "Arena" });
  assert.equal(seen.method, "put");
  assert.equal(seen.url, "/api/v1/worlds/world%2Fid");
  assert.equal(seen.headers.get("Authorization"), "Bearer state-token");
});
