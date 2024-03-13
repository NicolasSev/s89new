import { Button, Modal, Table } from 'antd';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined.js';
import { useUnit } from 'effector-react';
import style from './PartnerCardTable.module.css';
import {
  $partnerCardTableData,
  setChosenPartnerEv,
  resetChosenPartnerEv,
  $chosenPartner,
} from '../../../models/partnerCardModel/index.js';
import QrModal from '../../QrModal/QrModal.jsx';

const columns = [
  {
    title: 'Название партнера',
    dataIndex: 'name',
    key: 'partner-table-name',
  },
  // {
  //   title: 'ID партнера',
  //   dataIndex: 'id',
  //   key: 'partner-table-id',
  // },
  {
    title: 'Дата создания',
    dataIndex: 'create_date',
    key: 'partner-table-create_date',
  },
  {
    title: 'Действия',
    key: 'client-table-actions',
    render: (text, record) => {
      return (
        <Button
          icon={<EyeOutlined />}
          onClick={() => setChosenPartnerEv(record)}
        />
      );
    },
  },
];

export default function PartnerCardTable() {
  const partnerCardTableData = useUnit($partnerCardTableData);
  const resetChosenPartner = useUnit(resetChosenPartnerEv);
  const chosenPartner = useUnit($chosenPartner);
  return (
    <>
      <Table
        className={style.partner_table}
        columns={columns}
        scroll={{ y: 500 }}
        dataSource={partnerCardTableData}
        pagination={false}
      />
      <QrModal
        qrlink={chosenPartner.qrcodeId}
        closeAction={resetChosenPartner}
      />
    </>
  );
}
