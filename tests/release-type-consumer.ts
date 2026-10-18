import type { FaiberSDK } from '@faiber/faiber-ts-sdk';
import type { FitnessPlan, FitnessIntake, FitnessOrder } from '@faiber/faiber-profile';
import type { GameCommandInput, KheradgahServerFrame } from '@faiber/faiber-state-sdk';

async function reviewedReleaseContracts(sdk: FaiberSDK, plan: FitnessPlan, intake: FitnessIntake) {
  const quote = await sdk.modules.operations.orderQuotePost({
    id: 'checkout', items: [{ variant_id: 'variant', quantity: 1 }],
    shipping: { fullName: 'Buyer', phone: '09000000000', city: 'Rasht', address: 'Test address', postalCode: '1234567890' },
  });
  const checkoutTotal: number = quote.data.total;
  const snapshotPrice: string | undefined = quote.data.items[0]?.[2];
  const game = await sdk.state.operations.gamesRoutesCreateSessionPost('game', { difficulty: '11-14', paid: false });
  const stateVersion: number = game.data.data.version;
  const command: GameCommandInput = { commandId: 'command', expectedVersion: stateVersion, answer: 3 };
  await sdk.state.operations.gamesRoutesCommandPost(game.data.data.id, command);
  // @ts-expect-error v2 commands use camelCase, not Rust field names.
  const invalidCommand: GameCommandInput = { command_id: 'command', expected_version: 3 };
  await sdk.profile.operations.fitnessSaveIntakePut({ body: intake, expected_version: 1 });
  await sdk.profile.operations.fitnessAssignPost('order', { body: plan, base_revision_id: null });
  const orders: FitnessOrder[] = (await sdk.profile.operations.fitnessOrdersGet()).data.data;
  await sdk.profile.operations.fitnessSaveSettingsPut({ model_ref: 'model', stt_model_ref: 'stt', tts_model_ref: 'tts', expected_version: 1 });
  const hasPassword: boolean = (await sdk.idp.operations.userStatusGet()).data.data.has_password;
  const reserve = await sdk.profile.operations.fitnessReservePost({ user_id: 'user', turn_id: 'turn' });
  const reserved: true = reserve.data.data.reserved;
  const setup = await sdk.payment.operations.gatewaySetupCheckPost();
  const verified: boolean = setup.data.data.providerVerified;
  const frame: KheradgahServerFrame = { type: 'error', code: 'hello_required' };
  void [checkoutTotal, snapshotPrice, invalidCommand, orders, hasPassword, reserved, verified, frame];
}
void reviewedReleaseContracts;
