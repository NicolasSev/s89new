import { Menu } from 'antd';
import {
  FileTextOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import style from './SiderMenu.module.css';

const menu_items = [
  {
    key: 'statistics',
    icon: <FileTextOutlined />,
    label: 'Статистика',
  },
  // {
  // 	key: 'client-map',
  // 	icon: <UserOutlined />,
  // 	label: 'Карта клиента',
  // },
  // {
  // 	key: 'partner-map',
  // 	icon: <FileTextOutlined />,
  // 	label: 'Карта партнера',
  // },
  {
    key: 'create-partner',
    icon: <LogoutOutlined rotate={180} />,
    label: 'Создать партнера',
  },
  {
    key: 'signout',
    icon: <LogoutOutlined rotate={180} />,
    label: 'Выход',
  },
];

export default function SiderMenu({ signOut }) {
  const navigate = useNavigate();
  const onMenuClick = (e) => {
    if (e.key !== 'signout') {
      navigate(e.key);
    } else {
      navigate('/');
      signOut();
    }
  };

  return (
    <Menu
      mode="vertical"
      items={menu_items}
      className={style.sider_menu}
      onClick={onMenuClick}
    />
  );
}
