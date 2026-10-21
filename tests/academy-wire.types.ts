import type {AcademySessionCompletion, AcademyExamAttempt, AcademyCatalogQuery} from "../packages/lms/dist/types.js";
const completion: AcademySessionCompletion = {session_id:"11111111-1111-4111-8111-111111111111",completed:true};
const query: AcademyCatalogQuery = {category_id:completion.session_id};
const attempt: AcademyExamAttempt = {attempt_id:completion.session_id,questions:[{id:completion.session_id,text:"Question",type:"answer",options:[],points:1,media:[]}],selection_mode:"all",duration_minutes:0,expires_at:null};
// @ts-expect-error UUID identifiers are not numeric database keys.
const wrong: AcademySessionCompletion = {session_id:7,completed:true};
void [completion,query,attempt,wrong];
