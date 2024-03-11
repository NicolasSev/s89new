import { Card, Input } from 'antd';
import { Button } from '@aws-amplify/ui-react';
import { UserOutlined } from '@ant-design/icons';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import style from './ClientCard.module.css';
import {
  $createdPartnerQR,
  resetQREv,
  sendCreatePartnerFx,
} from '../../models/createPartnerModel/index.js';
import QrModal from '../../components/QrModal/QrModal.jsx';

export default function ClientCard() {
  const [inputValue, setInputValue] = useState('');
  const sendCreatePartner = useUnit(sendCreatePartnerFx);
  const createdPartnerQR = useUnit($createdPartnerQR);
  const resetQR = useUnit(resetQREv);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //FIXME Here repsone for Clients list
  fetch('https://rkxijcc8j2.execute-api.eu-west-1.amazonaws.com/Phase4/ClientsPortrait', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      console.log('clients list data: - ', data)
    })

  // fetch("https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner",
  //   {
  //   method: "POST", // or 'PUT'
  // }
  //
  // {
  //   "partner_name": "Boxing Club"
  // }

  const onCreatePartner = () => {
    sendCreatePartner({ partner_name: inputValue });
  };

  return (
    <Card className={style.create_card}>
      <div className={style.card_title}>Создание карточки партнера</div>
      <div className={style.card_input_title}>Название партнера</div>
      <Input
        onChange={onInputChange}
        value={inputValue}
        size="large"
        prefix={<UserOutlined />}
        className={style.card_input}
        placeholder="Название партнера"
      />
      <Button className={style.card_button} onClick={onCreatePartner}>
        Сгенерировать ID и QR
      </Button>
      <QrModal qrlink={createdPartnerQR} closeAction={resetQR} />
    </Card>
  );
}
