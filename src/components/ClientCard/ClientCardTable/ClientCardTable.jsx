import { Table, Button, Modal } from 'antd';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';
import { useUnit } from 'effector-react';
import style from './ClientCardTable.module.css';
import {
  $chosenClient,
  $clientCardTableData,
  getCleintByNameFx,
  resetChosenClientEv,
  setChosenClientEv,
} from '../../../models/clientCardModel/index.js';

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    key: 'client-talbe-name',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'phone',
    key: 'client-table-phone',
  },
  {
    title: 'Статус',
    dataIndex: 'client_status',
    key: 'client-table-status',
    filters: [
      {
        text: 'Член клуба',
        value: 'Член клуба',
      },
      {
        text: 'Бывший член клуба',
        value: 'Бывший член клуба',
      },
      {
        text: 'Клиент клуба',
        value: 'Клиент клуба',
      },
      {
        text: 'Бывший клиент клуба',
        value: 'Бывший клиент клуба',
      },
      {
        text: 'Отказ',
        value: 'Отказ',
      },
      {
        text: 'Потенциальный член клуба',
        value: 'Потенциальный член клуба',
      },
      {
        text: 'Потенциальный клиент',
        value: 'Потенциальный клиент',
      },
      {
        text: 'Пусто',
        value: 'Пусто',
      },
    ],
    onFilter: (value, record) => record.client_status.indexOf(value) === 0,
    sorter: (a, b) => a.client_status.localeCompare(b.client_status),
  },
  {
    title: 'Номер фитнес карты',
    dataIndex: 'card_id',
    key: 'client-table-card_id',
  },
  {
    title: 'Название абонемента',
    dataIndex: 'sub_name',
    key: 'client-table-sub_name',
  },
  {
    title: 'Дата активации абонемента',
    dataIndex: 'activation_date',
    key: 'client-table-activation_date',
  },
  {
    title: 'Дата окончания абонемента',
    dataIndex: 'expiration_date',
    key: 'client-table-expiration_date',
  },
  {
    title: 'Действия',
    key: 'client-table-actions',
    render: (text, record) => {
      return (
        <Button
          icon={<EyeOutlined />}
          onClick={() => setChosenClientEv(record)}
        />
      );
    },
  },
];
export default function ClientCardTable() {
  const clientCardTableData = useUnit($clientCardTableData);
  const resetChosenClient = useUnit(resetChosenClientEv);
  const chosenClient = useUnit($chosenClient);
  const loading = useUnit(getCleintByNameFx.pending);

  return (
    <>
      <Table
        className={style.client_table}
        columns={columns}
        dataSource={clientCardTableData}
        // scroll={{
        //   y: 750,
        // }}
        pagination={{
          position: 'bottomRight',
          pageSize: 15,
          showSizeChanger: false,
        }}
        loading={loading}
      />
      <Modal
        open={Object.keys(chosenClient).length !== 0}
        onCancel={resetChosenClient}
        className={style.client_modal}
        footer={[]}
      >
        <div className={style.client_modal_title}>Карточка клиента</div>
        <ul>
          <li className={style.client_modal_text}>{chosenClient.name}</li>
          <li className={style.client_modal_text}>{chosenClient.phone}</li>
          <li className={style.client_modal_text}>{chosenClient.card_id}</li>
          <li className={style.client_modal_text}>{chosenClient.sub_name}</li>
          <li className={style.client_modal_text}>
            {chosenClient.activation_date}
          </li>
          <li className={style.client_modal_text}>
            {chosenClient.expiration_date}
          </li>
        </ul>
      </Modal>
    </>
  );
}
