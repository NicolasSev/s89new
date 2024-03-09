import { createStore } from 'effector';

export const $statisticsTableData = createStore([]);
$statisticsTableData.watch((state) =>
  console.log('$statisticsTableData', state)
);
