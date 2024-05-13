import { sample } from 'effector';
import {
  $chosenClient,
  $clientCardTableData,
  $clientCardTableStartData,
} from './stores.js';
import { getCleintByNameFx, getClientCardTableDataFx } from './effects.js';
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

// sample({
//   source: $clientCardTableStartData,
//   clock: filterClientTableDataEv,
//   fn: filterClientCardTableData,
//   target: $clientCardTableData,
// });

sample({
  clock: filterClientTableDataEv,
  filter: (clock) => clock.searchValue,
  fn: (clock) => {
    return {
      client_name: clock.searchValue,
    };
  },
  target: getCleintByNameFx,
});

sample({
  clock: getCleintByNameFx.doneData,
  fn: formatClientCardTableData,
  target: $clientCardTableData,
});

sample({
  source: $clientCardTableStartData,
  clock: filterClientTableDataEv,
  filter: (_, clock) => !clock.searchValue,
  fn: (source) => source,
  target: $clientCardTableData,
});
