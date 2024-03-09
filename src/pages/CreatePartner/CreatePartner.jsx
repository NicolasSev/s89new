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
      <Button className={style.card_button}>Сгенерировать ID и QR</Button>
    </Card>
  );
}
