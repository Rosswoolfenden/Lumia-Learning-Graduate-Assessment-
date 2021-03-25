import React, {useEffect, useState} from 'react';
import { Card, Tabs } from 'antd';
import Login from './login';
import Register from './register';


const { TabPane } =  Tabs;

function Auth(props) {
  const [tab, setTab] =  useState()


  const changeTab = () => {
    setTab("1");
  }
  return (
    <div className="auth-page">
        <div className="page-header">
          <h1> Auth page! </h1>
        </div>
        <Tabs className="auth-tab" activeKey={tab}>
          <TabPane tab="Login" key="1">
            <Login />
          </TabPane>
          <TabPane tab="Register" key="2">
            <Register refresh={changeTab} />
          </TabPane>
        </Tabs>
    </div>
  );
}

export default Auth;