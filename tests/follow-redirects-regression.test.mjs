import assert from 'node:assert/strict';
import test from 'node:test';
import {createServer} from 'node:http';
import {createRequire} from 'node:module';
const load=createRequire(import.meta.url);
const follow=load(process.env.FOLLOW_REDIRECTS_REGRESSION_MODULE??'follow-redirects');
async function crossOrigin(headers,sensitiveHeaders=[]){
 let received;
 const target=createServer((req,res)=>{received=req.headers;res.end('owned target');});
 await new Promise(resolve=>target.listen(0,'127.0.0.1',resolve));
 const source=createServer((_req,res)=>{res.writeHead(302,{location:'http://127.0.0.1:'+target.address().port+'/target'});res.end();});
 await new Promise(resolve=>source.listen(0,'127.0.0.1',resolve));
 try{
  await new Promise((resolve,reject)=>{
   const request=follow.http.get({hostname:'127.0.0.1',port:source.address().port,path:'/',headers,sensitiveHeaders},response=>{response.resume();response.on('end',resolve);});
   request.on('error',reject);request.setTimeout(3000,()=>request.destroy(new Error('Owned redirect timeout')));
  });
  return received;
 }finally{source.closeAllConnections();target.closeAllConnections();await Promise.all([new Promise(resolve=>source.close(resolve)),new Promise(resolve=>target.close(resolve))]);}
}
test('array-form redirect headers cannot forward credentials to a different origin',async()=>{
 const received=await crossOrigin(['Authorization','Bearer owned-synthetic','Cookie','owned=synthetic']);
 assert.equal(received.authorization,undefined);assert.equal(received.cookie,undefined);
});
test('custom sensitive redirect header names are matched literally',async()=>{
 const received=await crossOrigin({'X-Token|Key':'owned-synthetic'},['X-Token|Key']);
 assert.equal(received['x-token|key'],undefined);
});
