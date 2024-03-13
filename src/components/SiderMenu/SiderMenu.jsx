import { Menu } from 'antd';
import {
  FileTextOutlined,
  LogoutOutlined,
  UserOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import style from './SiderMenu.module.css';

const menu_items = [
  {
    key: 'statistics',
    icon: <FileTextOutlined />,
    label: 'Статистика',
  },
  {
    key: 'client-card',
    icon: <UnorderedListOutlined />,
    label: 'Карта клиента',
  },
  {
    key: 'partner-card',
    icon: <UserOutlined />,
    label: 'Карта партнера',
  },
  {
    key: 'create-partner',
    icon: <UserAddOutlined />,
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
      defaultSelectedKeys={['statistics']}
      mode="vertical"
      items={menu_items}
      className={style.sider_menu}
      onClick={onMenuClick}
    />
  );
}
