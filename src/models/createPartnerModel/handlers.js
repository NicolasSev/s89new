import { sample } from 'effector';
import notification from 'antd/es/notification';
import { sendCreatePartnerFx } from './effects.js';
import { $createdPartnerQR } from './stores.js';
import { resetQREv } from './events.js';

$createdPartnerQR.reset(resetQREv);

sample({
  clock: sendCreatePartnerFx.doneData,
  filter: (clock) => clock.statusCode === 200,
  fn: (clock) => {
    notification.success({
      message: 'Успех',
      description: 'Партнер успешно создан',
      placement: 'topRight',
    });
    return clock.body;
  },
  target: $createdPartnerQR,
});

sample({
  clock: sendCreatePartnerFx.doneData,
  filter: (clock) => clock.statusCode !== 200,
  fn: () => {
    notification.error({
      message: 'Ошибка',
      description: 'Партнер с таким названием уже существует',
      placement: 'topRight',
    });
  },
});
