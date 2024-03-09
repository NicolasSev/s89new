import { $statisticsTableData } from './stores.js';
import { getStatisticsTableDataFx } from './effects.js';

$statisticsTableData.on(getStatisticsTableDataFx.doneData, (_, payload) => {
  return payload;
});
