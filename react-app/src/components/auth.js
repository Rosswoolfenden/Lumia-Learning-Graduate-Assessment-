import React, {useState} from 'react';
import { Card, Tabs } from 'antd';
import Login from './login';
import Register from './register';


const { TabPane } =  Tabs;

function Auth(props) {
 
  
  return (
    <div className="auth-page">
        <div className="page-header">
          <h1> Auth page! </h1>
        </div>
        <Tabs className="auth-tab" defaultActiveKey="1">
          <TabPane tab="Login" key="1">
            <Login />
          </TabPane>
          <TabPane tab="Register" key="2">
            <Register />
          </TabPane>
        </Tabs>
    </div>
  );
}

export default Auth;