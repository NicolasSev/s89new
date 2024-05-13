import { createEffect } from 'effector';

export const getPartnerCardTableDataFx = createEffect().use(async () => {
  try {
    const response = await fetch(
      'https://i0jm9vt38a.execute-api.eu-west-1.amazonaws.com/Phase4/PartnersPortrait',
      {
        method: 'POST', // or 'PUT'
      }
    );

    const result = await response.json();
    console.log('Success:', result);
    return result.body;
  } catch (error) {
    console.error('Error:', error);
  }
});
