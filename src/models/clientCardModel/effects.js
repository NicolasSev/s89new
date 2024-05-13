import { createEffect } from 'effector';

export const getClientCardTableDataFx = createEffect().use(async () => {
  try {
    const response = await fetch(
      'https://i0jm9vt38a.execute-api.eu-west-1.amazonaws.com/Phase4/ClientsPortrait',
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

export const getCleintByNameFx = createEffect().use(async (payload) => {
  try {
    const response = await fetch(
      'https://i0jm9vt38a.execute-api.eu-west-1.amazonaws.com/Phase4/ClientsPortrait/GetClients',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    console.log('Success', result);
    return JSON.parse(result.body);
  } catch (e) {
    console.error(e);
  }
});
