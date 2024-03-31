import { createEffect } from 'effector';
import { api } from '../../api/axiosinstance.js';

export const sendCreatePartnerFx = createEffect().use(async (payload) => {
  // FIXME Axios for some reasons gets error
  // return (await api().post('RegisterPartner', payload)).data;
  try {
    const response = await fetch(
      'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner',
      {
        method: 'POST', // or 'PUT'
        // body: JSON.stringify(data),
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
});
