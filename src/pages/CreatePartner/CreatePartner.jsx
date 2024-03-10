import { Card, Input } from 'antd';
import { Button } from '@aws-amplify/ui-react';
import { UserOutlined } from '@ant-design/icons';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import style from './CreatePartner.module.css';
import { sendCreatePartnerFx } from '../../models/createPartnerModel/index.js';

export default function CreatePartner() {
  const [inputValue, setInputValue] = useState('');
  const sendCreatePartner = useUnit(sendCreatePartnerFx);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  async function postJSON(data) {
    try {
      const response = await fetch("https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner", {
        method: "POST", // or 'PUT'
        // body: JSON.stringify(data),
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // fetch("https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner",
  //   {
  //   method: "POST", // or 'PUT'
  // }
  //
  // {
  //   "partner_name": "Boxing Club"
  // }

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
      <Button
        className={style.card_button}
        onClick={async () => {await postJSON({"partner_name": inputValue});}}>Сгенерировать ID и QR</Button>
    </Card>
  );
}
