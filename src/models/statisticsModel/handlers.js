import { sample } from 'effector';
import { $statisticsTableData, $statisticsTableStartData } from './stores.js';
import { getStatisticsTableDataFx } from './effects.js';
import {
  filterStatisticsTableData,
  formatStatisticsTableData,
} from '../../utils/statistics-utils.js';
import { filterTableDataEv } from './events.js';

sample({
  clock: getStatisticsTableDataFx.doneData,
  fn: formatStatisticsTableData,
  target: [$statisticsTableData, $statisticsTableStartData],
});

sample({
  source: $statisticsTableStartData,
  clock: filterTableDataEv,
  fn: filterStatisticsTableData,
  target: $statisticsTableData,
});
