import { createStore } from 'effector';

export const $partnerCardTableData = createStore([]);
$partnerCardTableData.watch((state) =>
  console.log('$partnerCardTableData', state)
);

export const $partnerCardTableStartData = createStore([]);

export const $chosenPartner = createStore({});
$chosenPartner.watch((state) => console.log('$chosenPartner', state));
