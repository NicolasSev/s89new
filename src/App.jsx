import { useEffect, useState } from 'react';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Image, Layout, Spin } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import logo from './assets/logo.png';
import SiderMenu from './components/SiderMenu/SiderMenu.jsx';
import { getStatisticsTableDataFx } from './models/statisticsModel/index.js';
import { sendCreatePartnerFx } from './models/createPartnerModel/index.js';
import { getClientCardTableDataFx } from './models/clientCardModel/index.js';
import { getPartnerCardTableDataFx } from './models/partnerCardModel/index.js';

const { Sider, Content } = Layout;

function App({ signOut, user }) {
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

  useEffect(() => {
    navigate('/statistics');
  }, []);

  return (
    <Spin spinning={isLoading} tip="Загрузка..." size="large">
      <Layout>
        <Sider className="sider">
          <div className="sider_header">
            <Image src={logo} preview={false} />
          </div>
          <div className="sider_menu">
            <SiderMenu signOut={signOut} />
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

export default withAuthenticator(App);
