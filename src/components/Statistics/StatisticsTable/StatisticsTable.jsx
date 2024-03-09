import { Table } from 'antd';
import { useUnit } from 'effector-react';
import { $statisticsTableData } from '../../../models/statisticsModel/index.js';
import style from './StatisticsTable.module.css';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ФИО клиента',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Дата',
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
      scroll={{
        y: 500,
      }}
      pagination={false}
    />
  );
}
