import { sample } from 'effector';
import { sendCreatePartnerFx } from './effects.js';
import { $createdPartnerQR } from './stores.js';
import { resetQREv } from './events.js';

$createdPartnerQR.reset(resetQREv);

sample({
  clock: sendCreatePartnerFx.doneData,
  target: $createdPartnerQR,
});
