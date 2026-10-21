import assert from 'node:assert/strict';
import test from 'node:test';
import {AxiosHeaders} from 'axios';
import {FaiberClient, ManageApi} from '../packages/manage/dist/index.js';

function fixture() {
  const seen=[];
  const manage=new ManageApi(new FaiberClient('manage', {
    domains:{manage:'https://manage.example'}, authMode:'cookie',
    axios:{adapter:async config=>{
      seen.push(config);
      return {data:{},status:200,statusText:'OK',headers:new AxiosHeaders(),config};
    }},
  }));
  return {manage,seen};
}

test('manual proxy refuses path normalization escapes before authenticated transport',async()=>{
  const {manage,seen}=fixture();
  for(const path of ['https://evil.example/x','//evil.example/x','/../me','/%2e%2e/me','/.%2E/me','/%2f../me','/a/%2e%2e/../me','/a\\b','/a%5Cb','/x#fragment','/x\n/y','/%ZZ']) {
    assert.throws(()=>manage.executeServiceAction({service:'modules',method:'GET',path}),/Manage/);
  }
  for(const service of ['../agent','manage','https://evil.example']) {
    assert.throws(()=>manage.executeServiceAction({service,method:'GET',path:'/api/v1/items'}),/owning service/);
  }
  assert.equal(seen.length,0);
  for(const path of ['/api/v1/items?callback=https%3A%2F%2Fexample.test%2F&tag=%23keep','/api/v1/items?callback=https://example.test/','/api/v1/items/product%2Fone']) {
    await manage.executeServiceAction({service:'modules',method:'GET',path});
    assert.equal(seen.at(-1).url,'/api/v1/proxy/modules'+path);
    assert.equal(seen.at(-1).withCredentials,true);
  }
});

test('Manage setup/liveness/logout and message pagination use mounted routes and credential path',async()=>{
  const {manage,seen}=fixture();
  await manage.health();
  await manage.checkSetup({signal:new AbortController().signal});
  await manage.logout();
  const before='2026-10-21T12:30:00Z';
  await manage.getAgentMessagesPage('thread/id',{limit:12,before});
  assert.deepEqual(seen.map(c=>[c.method,c.url]),[
    ['get','/health'],['post','/api/v1/setup/check'],['post','/logout'],
    ['get','/api/v1/agent/ide/threads/thread%2Fid/messages'],
  ]);
  assert.equal(seen[1].data,undefined);
  assert.equal(seen[2].responseType,'text');
  assert.deepEqual(seen[3].params,{limit:12,before});
  assert.ok(seen.every(c=>c.withCredentials===true));
});
