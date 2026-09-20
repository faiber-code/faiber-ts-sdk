import assert from 'node:assert/strict';
import test from 'node:test';
import { FaiberClient, subscribeRealtime } from '../packages/core/dist/index.js';
import { ChatApi } from '../packages/chat/dist/index.js';
import { MessengerApi } from '../packages/messenger/dist/index.js';
import { TaskApi } from '../packages/task/dist/index.js';

test('private realtime rejects unsafe transports and public channels before connecting', () => {
  const base={config:{ws_url:'wss://socket.example.test',app_key:'public-key',channel:'private-test'},authorize:async()=>({auth:'key:signature'}),onEvent:()=>{}};
  for(const ws_url of ['https://socket.example.test','wss://user:secret@socket.example.test','wss://socket.example.test?secret=value']) assert.throws(()=>subscribeRealtime({...base,config:{...base.config,ws_url}}));
  assert.throws(()=>subscribeRealtime({...base,config:{...base.config,channel:'public-test'}}));
});

test('Chat and Messenger authorize their own channels through credentialed SDK clients', async () => {
  const requests=[];
  const client=service=>new FaiberClient(service,{domains:{[service]:`https://${service}.example.test`},authMode:'cookie',axios:{adapter:async config=>{requests.push(config);return {data:{auth:'key:signature',data:{}},status:200,statusText:'OK',headers:{},config};}}});
  const chat=new ChatApi(client('chat')),messenger=new MessengerApi(client('messenger')),task=new TaskApi(client('task'));
  await chat.realtimeConfig('conversation/1');
  await chat.realtimeAuth('conversation/1',{socket_id:'1.2',channel_name:'private-conversation-1'});
  await messenger.operations.notificationNotificationsRealtimeConfigGet();
  await messenger.operations.notificationNotificationsRealtimeAuthPost({socket_id:'1.2',channel_name:'private-push-notification.1'});
  await task.saveReminder('task/1',0,{anchor_at:'2030-01-31T09:00:00Z',timezone:'Asia/Tehran',recurrence:'monthly'});
  assert.deepEqual(requests.slice(0,4).map(c=>[c.baseURL,c.url]),[
    ['https://chat.example.test','/api/v1/conversations/conversation%2F1/realtime-config'],
    ['https://chat.example.test','/api/v1/conversations/conversation%2F1/realtime-auth'],
    ['https://messenger.example.test','/api/v1/notifications/realtime/config'],
    ['https://messenger.example.test','/api/v1/notifications/realtime/auth'],
  ]);
  assert.ok(requests.every(c=>c.withCredentials));
  assert.match(String(requests[1].data),/socket_id=1.2/);
  assert.equal(JSON.parse(requests[3].data).channel_name,'private-push-notification.1');
  assert.equal(requests[4].headers.get('If-Match'),'0');
});
