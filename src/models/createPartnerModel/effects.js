import { createEffect } from 'effector';

export const sendCreatePartnerFx = createEffect().use(async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({});
    }, 1000);
  });
});
