import { createStore } from 'effector';

export const $clientCardTableData = createStore([]);
$clientCardTableData.watch((state) =>
  console.log('$clientCardTableData', state)
);

export const $clientCardTableStartData = createStore([]);

export const $chosenClient = createStore({});
$chosenClient.watch((state) => console.log('$chosenClient', state));
