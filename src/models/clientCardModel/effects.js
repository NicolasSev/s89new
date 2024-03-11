import { createEffect } from 'effector';

export const getClientCardTableDataFx = createEffect().use(async () => {
  try {
    const response = await fetch(
      'https://rkxijcc8j2.execute-api.eu-west-1.amazonaws.com/Phase4/ClientsPortrait',
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
