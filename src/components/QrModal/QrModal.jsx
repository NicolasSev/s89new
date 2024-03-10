import { Image, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import style from './QrModal.module.css';

export default function QrModal(props) {
  const { qrlink, closeAction } = props;

  return (
    <Modal
      open={qrlink}
      className={style.modal}
      footer={[]}
      onCancel={closeAction}
    >
      <Image src={qrlink} preview={false} />
      <Link to={qrlink} className={style.modal_download} download>
        Сохранить QR
        <DownloadOutlined />
      </Link>
      {/* <div className={style.modal_id}> */}
      {/*  ID: {qrlink && /\/(\w+)\.png$/g.exec(qrlink)[1]} */}
      {/* </div> */}
    </Modal>
  );
}
