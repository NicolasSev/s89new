import { Button, message } from 'antd';
import { useState } from 'react';
import style from './BarrierPage.module.css';

export default function BarrierPage() {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const openBarrier = async () => {
    setLoading(true);
    console.log('openBarrier');
    try {
      const response = await fetch(
        'https://7k3x7427ah.execute-api.eu-west-1.amazonaws.com/AccessControlStage/AccessControl',
        {
          method: 'POST',
        }
      );
      const result = await response.json();
      console.log('Gate call success', result);
      messageApi.open({
        type: 'success',
        content: 'Шлагбаум открыт',
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      messageApi.open({
        type: 'error',
        content: 'Что-то пошло не так...',
      });
    }
  };

  // const closeBarrier = () => {
  //   console.log('closeBarrier');
  // };

  return (
    <div className={style.barrier_wrapper}>
      {contextHolder}
      <Button
        type="primary"
        shape="circle"
        onClick={openBarrier}
        className={[style.barrier_button, style.open].join(' ')}
        loading={loading}
      >
        Открыть
      </Button>
      {/* <Button */}
      {/*  type="primary" */}
      {/*  shape="circle" */}
      {/*  onClick={closeBarrier} */}
      {/*  className={[style.barrier_button, style.close].join(' ')} */}
      {/* > */}
      {/*  Закрыть */}
      {/* </Button> */}
    </div>
  );
}
