import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { FaiberClient, MemoryTokenProvider, axios } from '../packages/core/dist/index.js';
import { LmsApi } from '../packages/lms/dist/index.js';

test('LMS image upload forwards progress and cancellation and sends native multipart with authorization', async () => {
  const tokens = new MemoryTokenProvider(); await tokens.setTokens({accessToken:'image-token'});
  let request;
  const api = new LmsApi(new FaiberClient('lms', {domains:{lms:'https://lms.example'}, tokenProvider:tokens,
    axios:{headers:{'Content-Type':'application/json'}, adapter: async config => {
      request=config;return {status:200,statusText:'OK',headers:{},config,data:{status:'success',data:{url:'/api/v1/media/images/a.webp',key:'a'}}};
    }}}));
  const controller=new AbortController(), progress=()=>{};
  const response=await api.media.uploadImage(new Blob(['bytes'],{type:'image/webp'}),{fileName:'option.webp',onUploadProgress:progress,signal:controller.signal});
  assert.equal(request.url,'/api/v1/media/images');
  assert.equal(request.headers.get('Authorization'),'Bearer image-token');
  assert.notEqual(request.headers.get('Content-Type'),'application/json');
  assert.ok(request.data instanceof FormData);
  assert.equal(request.data.get('image').name,'option.webp');
  assert.equal(request.data.get('image').type,'image/webp');
  assert.equal(request.onUploadProgress,progress);assert.equal(request.signal,controller.signal);
  assert.equal(response.data.data.url,'/api/v1/media/images/a.webp');
});
test('Node upload sends a valid multipart boundary and actual byte progress', async () => {
  let contentType, body, authorization;
  const server=createServer(async(req,res)=>{
    contentType=req.headers['content-type'];authorization=req.headers.authorization;
    const parts=[];for await(const part of req)parts.push(part);body=Buffer.concat(parts).toString();
    res.setHeader('Content-Type','application/json');res.end(JSON.stringify({status:'success',data:{url:'/api/v1/media/images/q.png',key:'q'}}));
  });
  server.listen(0,'127.0.0.1');await once(server,'listening');
  try {
    const tokens=new MemoryTokenProvider();await tokens.setTokens({accessToken:'image-token'});
    const api=new LmsApi(new FaiberClient('lms',{domains:{lms:`http://127.0.0.1:${server.address().port}`},tokenProvider:tokens,axios:{headers:{'Content-Type':'application/json'},proxy:false}}));
    const events=[];
    const response=await api.media.uploadImage(new Blob(['question-image'],{type:'image/png'}),{fileName:'q.png',onUploadProgress:e=>events.push(e)});
    assert.equal(response.status,200);assert.match(contentType,/multipart\/form-data; boundary=/);
    assert.match(body,/name="image"; filename="q.png"/);assert.match(body,/question-image/);
    assert.equal(authorization,'Bearer image-token');assert.ok(events.some(e=>e.loaded>0));
    const controller=new AbortController();controller.abort();
    await assert.rejects(api.media.uploadImage(new Blob(['x'],{type:'image/png'}),{signal:controller.signal}),e=>axios.isCancel(e));
  } finally {await new Promise(resolve=>server.close(resolve));}
});

test('LMS upload preserves server validation and storage failures', async () => {
  for (const status of [400, 502]) {
    const api = new LmsApi(new FaiberClient('lms', {
      domains: { lms: 'https://lms.example' },
      axios: { adapter: async config => {
        const response = { status, statusText: 'Failed', headers: {}, config,
          data: { status: 'error', message: status === 400 ? 'Invalid image' : 'Storage failed' } };
        throw new axios.AxiosError(response.data.message, 'ERR_BAD_RESPONSE', config, undefined, response);
      } },
    }));
    await assert.rejects(api.media.uploadImage(new Blob(['bytes'], { type: 'image/png' })),
      error => axios.isAxiosError(error) && error.response.status === status);
  }
});
