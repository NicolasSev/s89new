import { sample } from 'effector';
import {
  $chosenClient,
  $clientCardTableData,
  $clientCardTableStartData,
} from './stores.js';
import { getClientCardTableDataFx } from './effects.js';
import {
  formatClientCardTableData,
  filterClientCardTableData,
} from '../../utils/clientCard-utils.js';
import {
  filterClientTableDataEv,
  resetChosenClientEv,
  setChosenClientEv,
} from './events.js';

$chosenClient
  .on(setChosenClientEv, (state, payload) => payload)
  .reset(resetChosenClientEv);

sample({
  clock: getClientCardTableDataFx.doneData,
  fn: formatClientCardTableData,
  target: [$clientCardTableData, $clientCardTableStartData],
});

sample({
  source: $clientCardTableStartData,
  clock: filterClientTableDataEv,
  fn: filterClientCardTableData,
  target: $clientCardTableData,
});
