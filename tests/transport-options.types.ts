import {FaiberClient, type RequestOptions} from '@faiber/sdk-core';
import type {FaiberSDK} from '@faiber/faiber-ts-sdk';
const client = new FaiberClient('manage', {domains:{manage:'https://manage.example.test'}});
const metadataOptions: RequestOptions = {withXSRFToken: config => config.method === 'POST'};
void client.post<{ok:boolean},{title:string}>('/example', {title:'Example'}, metadataOptions);
void client.post<{ok:boolean},{title:string}>('/example', {title:'Example'}, {
  withXSRFToken: config => {
    const title: string | undefined = config.data?.title;
    // @ts-expect-error The predicate retains the actual request body type.
    const missing = config.data?.nonexistent;
    void [title, missing];
    return true;
  },
});
function encodedOptions(sdk: FaiberSDK) {
  void sdk.chat.realtimeAuth('conversation', {socket_id:'socket',channel_name:'channel'}, {
    withXSRFToken: config => {
      const channel: string | null | undefined = config.data?.get('channel_name');
      // @ts-expect-error The actual wire body is URLSearchParams, not the input DTO.
      const dto = config.data?.channel_name;
      void [channel, dto];
      return true;
    },
  });
}
void encodedOptions;
