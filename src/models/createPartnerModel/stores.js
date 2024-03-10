import { createStore } from 'effector';

export const $createdPartnerQR = createStore('');
$createdPartnerQR.watch((state) => console.log('$createdPartnerQR', state));
