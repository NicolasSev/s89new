import { sample } from 'effector';
import {
  $chosenPartner,
  $partnerCardTableData,
  $partnerCardTableStartData,
} from './stores.js';
import {
  filterPartnerTableDataEv,
  resetChosenPartnerEv,
  setChosenPartnerEv,
} from './events.js';
import { getPartnerCardTableDataFx } from './effects.js';
import {
  filterPartnerCardTableData,
  formatPartnerCardTableData,
} from '../../utils/partnerCard-utils.js';

$chosenPartner
  .on(setChosenPartnerEv, (state, payload) => payload)
  .reset(resetChosenPartnerEv);

sample({
  clock: getPartnerCardTableDataFx.doneData,
  fn: formatPartnerCardTableData,
  target: [$partnerCardTableData, $partnerCardTableStartData],
});

sample({
  source: $partnerCardTableStartData,
  clock: filterPartnerTableDataEv,
  fn: filterPartnerCardTableData,
  target: $partnerCardTableData,
});
