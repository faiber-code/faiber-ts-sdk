import {ServiceApi,type Identifier,type RequestOptions} from '@faiber/sdk-core'
import type * as T from './types.js'
export class TaskApi extends ServiceApi{
  listProjects(query?:T.ProjectQuery,options?:RequestOptions){return this.client.get<T.TaskListResponse<T.Project>>('/api/v1/projects',query,options)}
  createProject(data:T.CreateProjectInput,options?:RequestOptions<T.CreateProjectInput>){return this.client.post<T.TaskResponse<T.Project>,T.CreateProjectInput>('/api/v1/projects',data,options)}
  getProject(id:Identifier,options?:RequestOptions){return this.client.get<T.TaskResponse<T.Project>>('/api/v1/projects/'+encodeURIComponent(id),undefined,options)}
  updateProject(id:Identifier,version:number,data:T.UpdateProjectInput,options?:RequestOptions<T.UpdateProjectInput>){return this.client.patch<T.TaskResponse<T.Project>,T.UpdateProjectInput>('/api/v1/projects/'+encodeURIComponent(id),data,{...options,headers:{...options?.headers,'If-Match':String(version)}})}
  listWorkItems(query?:T.WorkItemQuery,options?:RequestOptions){return this.client.get<T.TaskListResponse<T.WorkItem>>('/api/v1/work-items',query,options)}
  createWorkItem(data:T.CreateWorkItemInput,idempotencyKey:string,options?:RequestOptions<T.CreateWorkItemInput>){return this.client.post<T.TaskResponse<T.WorkItem>,T.CreateWorkItemInput>('/api/v1/work-items',data,{...options,headers:{...options?.headers,'Idempotency-Key':idempotencyKey}})}
  getWorkItem(id:Identifier,options?:RequestOptions){return this.client.get<T.TaskResponse<T.WorkItem>>('/api/v1/work-items/'+encodeURIComponent(id),undefined,options)}
  updateWorkItem(id:Identifier,version:number,data:T.UpdateWorkItemInput,options?:RequestOptions<T.UpdateWorkItemInput>){return this.client.patch<T.TaskResponse<T.WorkItem>,T.UpdateWorkItemInput>('/api/v1/work-items/'+encodeURIComponent(id),data,{...options,headers:{...options?.headers,'If-Match':String(version)}})}
  transitionWorkItem(id:Identifier,version:number,data:T.TransitionWorkItemInput,options?:RequestOptions<T.TransitionWorkItemInput>){return this.client.post<T.TaskResponse<T.WorkItem>,T.TransitionWorkItemInput>('/api/v1/work-items/'+encodeURIComponent(id)+'/transition',data,{...options,headers:{...options?.headers,'If-Match':String(version)}})}
  createSprint(data:T.CreateSprintInput,options?:RequestOptions<T.CreateSprintInput>){return this.client.post<T.TaskResponse<T.Sprint>,T.CreateSprintInput>('/api/v1/sprints',data,options)}
  startSprint(id:Identifier,options?:RequestOptions){return this.client.post<T.TaskResponse<T.Sprint>>('/api/v1/sprints/'+encodeURIComponent(id)+'/start',undefined,options)}
  completeSprint(id:Identifier,options?:RequestOptions){return this.client.post<T.TaskResponse<T.Sprint>>('/api/v1/sprints/'+encodeURIComponent(id)+'/complete',undefined,options)}
  createComment(workItemId:Identifier,data:T.CreateCommentInput,options?:RequestOptions<T.CreateCommentInput>){return this.client.post('/api/v1/work-items/'+encodeURIComponent(workItemId)+'/comments',data,options)}
  effectiveAccess(query?:T.EffectiveAccessQuery,options?:RequestOptions){return this.client.get<T.TaskResponse<T.EffectiveAccess>>('/api/v1/access/effective',query,options)}
  reportSummary(projectId:string,options?:RequestOptions){return this.client.get<T.TaskResponse<T.ReportSummary>>('/api/v1/reports/summary',{project_id:projectId},options)}
  createAgentProposal(data:T.AgentProposalInput,options?:RequestOptions<T.AgentProposalInput>){return this.client.post('/api/v1/agent-proposals',data,options)}
  approveAgentProposal(id:Identifier,options?:RequestOptions){return this.client.post('/api/v1/agent-proposals/'+encodeURIComponent(id)+'/approve',undefined,options)}
}
export * from './types.js'
export * from '@faiber/sdk-core'
