import { type FaiberClient,type RequestOptions } from '@faiber/sdk-core';
export interface LearningQuestionInput { question:string; idempotency_key:string }
export interface TeacherPresentation { speech:string; emotion:'neutral'|'encouraging'; gesture:'none'|'point_code'; focus:'teacher'|'code'|'output' }
export interface LearningQuestionResponse { status:string; data:{conversation_id:string;presentation:TeacherPresentation;reused:boolean};meta:null }
export interface LearningMessage { id:string; role:'user'|'teacher'; text:string }
export interface LearningHistoryResponse { status:string; data:LearningMessage[]; meta:null }
export class LearningTeacherApi {
 /** Read the most recent 40 messages in chronological order. Requires chat:read and ownership of the LMS run. */
 history(runId:string,options?:RequestOptions){return this.client.get<LearningHistoryResponse>(`/api/v1/learning/runs/${encodeURIComponent(runId)}/messages`,undefined,options);}
 constructor(private readonly client:FaiberClient){}
 /** Ask a lesson-bound teacher. Requires chat:ai and active ownership of the LMS run. Context/model are resolved server-side. Reuse the key only for an identical retry. No developer tools are exposed. */
 ask(runId:string,input:LearningQuestionInput,options?:RequestOptions<LearningQuestionInput>){return this.client.post<LearningQuestionResponse,LearningQuestionInput>(`/api/v1/learning/runs/${encodeURIComponent(runId)}/questions`,input,options);}
}
