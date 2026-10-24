import {FaiberSDK} from '@faiber/faiber-ts-sdk';
const sdk=new FaiberSDK({domains:{}});
sdk.knowledge.setSourceState('source',{desired_state:'paused',expected_version:1});
sdk.knowledge.setMemoryOverride('subject',{expected_revision:'a'.repeat(64),short_memory_enabled:null});
sdk.knowledge.memories('subject',{status:'expired',memory_type:'short'});
// @ts-expect-error a reviewed source version is mandatory
sdk.knowledge.setSourceState('source',{desired_state:'paused'});
// @ts-expect-error a captured policy revision is mandatory
sdk.knowledge.setMemoryOverride('subject',{long_memory_enabled:false});
// @ts-expect-error arbitrary lifecycle filter cannot be sent
sdk.knowledge.memories('subject',{status:'invented'});
// @ts-expect-error canonical writes require the reviewed policy revision too
sdk.knowledge.operations.platformSetMemoryOverridePut('subject',{long_memory_enabled:false});
// @ts-expect-error canonical source state change requires a desired state
sdk.knowledge.operations.platformPauseSourcePost('source',{expected_version:3});
