import { Table } from 'antd';
import { useUnit } from 'effector-react';
import { $statisticsTableData } from '../../../models/statisticsModel/index.js';
import style from './StatisticsTable.module.css';

const columns = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   key: 'id',
  // },
  {
    title: 'Название партнера',
    dataIndex: 'partner_name',
    key: 'partner_name',
  },
  {
    title: 'ФИО клиента',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Дата посещения',
    dataIndex: 'date',
    key: 'name',
  },
];

export default function StatisticsTable() {
  const statisticsTableData = useUnit($statisticsTableData);

  return (
    <Table
      className={style.statistics_table}
      columns={columns}
      dataSource={statisticsTableData}
      // scroll={{
      //   y: 750,
      // }}
      pagination={{
        position: 'bottomRight',
        pageSize: 15,
        showSizeChanger: false,
      }}
    />
  );
}
