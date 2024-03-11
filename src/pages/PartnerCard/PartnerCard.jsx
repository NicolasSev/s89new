import { Card, Input } from 'antd';
import { Button } from '@aws-amplify/ui-react';
import { UserOutlined } from '@ant-design/icons';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import style from './PartnerCard.module.css';
import {
  $createdPartnerQR,
  resetQREv,
  sendCreatePartnerFx,
} from '../../models/createPartnerModel/index.js';
import QrModal from '../../components/QrModal/QrModal.jsx';

export default function PartnerCard() {
  const [inputValue, setInputValue] = useState('');
  const sendCreatePartner = useUnit(sendCreatePartnerFx);
  const createdPartnerQR = useUnit($createdPartnerQR);
  const resetQR = useUnit(resetQREv);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  fetch('https://rkxijcc8j2.execute-api.eu-west-1.amazonaws.com/Phase4/PartnersPortrait', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      console.log('partners list data: - ', data)
    })

  // async function postJSON(data) {
  //   try {
  //     const response = await fetch(
  //       'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner',
  //       {
  //         method: 'POST', // or 'PUT'
  //         // body: JSON.stringify(data),
  //         body: JSON.stringify(data),
  //       }
  //     );
  //
  //     const result = await response.json();
  //     console.log('Success:', result);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

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
