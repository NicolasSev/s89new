import { createEffect } from 'effector';
import { api } from '../../api/axiosinstance.js';

const fake_data = [
  {
    id: 1,
    name: 'name_1',
    date: 'date_1',
    key: 'table-item-1',
  },
  {
    id: 2,
    name: 'name_2',
    date: 'date_2',
    key: 'table-item-2',
  },
  {
    id: 3,
    name: 'name_3',
    date: 'date_3',
    key: 'table-item-3',
  },
  {
    id: 4,
    name: 'name_4',
    date: 'date_4',
    key: 'table-item-4',
  },
  {
    id: 5,
    name: 'name_5',
    date: 'date_5',
    key: 'table-item-5',
  },
  {
    id: 6,
    name: 'name_6',
    date: 'date_6',
    key: 'table-item-6',
  },
  {
    id: 7,
    name: 'name_7',
    date: 'date_7',
    key: 'table-item-7',
  },
];

export const getStatisticsTableDataFx = createEffect().use(async (payload) => {
  return (await api().post('Phase3/ScanVisitDatabase')).data.body;
});
