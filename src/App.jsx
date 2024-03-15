import { useEffect, useState } from 'react';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Image, Layout, Spin } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { signOut, getCurrentUser } from 'aws-amplify/auth';
import logo from './assets/s89.svg';
import SiderMenu from './components/SiderMenu/SiderMenu.jsx';
import { getStatisticsTableDataFx } from './models/statisticsModel/index.js';
import { sendCreatePartnerFx } from './models/createPartnerModel/index.js';
import { getClientCardTableDataFx } from './models/clientCardModel/index.js';
import { getPartnerCardTableDataFx } from './models/partnerCardModel/index.js';

const { Sider, Content } = Layout;

function App() {
  const [user, setUser] = useState({});

  const getStatisticsTableDataLoading = useUnit(
    getStatisticsTableDataFx.pending
  );
  const sendCreatePartnerLoading = useUnit(sendCreatePartnerFx.pending);
  const getClientCardTableDataLoading = useUnit(
    getClientCardTableDataFx.pending
  );
  const getPartnerCardTableDataLoading = useUnit(
    getPartnerCardTableDataFx.pending
  );
  const navigate = useNavigate();
  const isLoading =
    getStatisticsTableDataLoading ||
    sendCreatePartnerLoading ||
    getClientCardTableDataLoading ||
    getPartnerCardTableDataLoading;

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('login');
    } catch (e) {
      console.log('signOut error', e);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/statistics');
    }
  }, [user]);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        if (response) {
          setUser(response);
        } else {
          setUser(null);
        }
      })
      .catch((e) => {
        if (e.message === 'User needs to be authenticated to call this API.') {
          navigate('/login');
        } else {
          console.error(e);
        }
      });
  }, []);

  return (
    <Spin spinning={isLoading} tip="Загрузка..." size="large">
      <Layout>
        <Sider className="sider">
          <div className="sider_header">
            <Image src={logo} preview={false} width={140} />
          </div>
          <div className="sider_menu">
            <SiderMenu signOut={handleSignOut} />
          </div>
        </Sider>
        <Layout className="content_layout">
          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Spin>

    // <div>
    //   <Heading level={1}>Hello {user.username}</Heading>
    //   <Button onClick={signOut}>Sign out!!</Button>
    //   <h2>Amplify Todos</h2>
    //   ...
    // </div>
  );
}

export default App;
