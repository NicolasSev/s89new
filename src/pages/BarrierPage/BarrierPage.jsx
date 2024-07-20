import { Button } from 'antd';
import style from './BarrierPage.module.css';

export default function BarrierPage() {
  const openBarrier = async () => {
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
    } catch (e) {
      console.error(e);
    }
  };

  // const closeBarrier = () => {
  //   console.log('closeBarrier');
  // };

  return (
    <div className={style.barrier_wrapper}>
      <Button
        type="primary"
        shape="circle"
        onClick={openBarrier}
        className={[style.barrier_button, style.open].join(' ')}
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
