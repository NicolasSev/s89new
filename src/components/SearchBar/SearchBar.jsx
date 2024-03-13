import { DatePicker, Input, Space } from 'antd';
import { Button } from '@aws-amplify/ui-react';
import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  const { placeHolder, action, noDate } = props;
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSend = () => {
    const payload = {
      searchValue: inputValue || null,
      date: dateValue?.format('DD.MM.YYYY') || null,
    };

    action(payload);
  };

  return (
    <Space size="large" className={style.search_wrapper}>
      <Input
        placeholder={placeHolder}
        className={style.search_input}
        size="large"
        value={inputValue}
        onChange={onInputChange}
        allowClear
      />
      {!noDate ? (
        <DatePicker
          size="large"
          placeholder="Дата"
          value={dateValue}
          onChange={setDateValue}
          className={style.search_datepicker}
        />
      ) : (
        ''
      )}
      <Button className={style.search_button} onClick={onSend}>
        Показать
      </Button>
    </Space>
  );
}
