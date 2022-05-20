/*
Question: Converting a splitted objects of object to array of objects
Url: https://stackoverflow.com/questions/72150445/converting-a-splitted-objects-of-object-to-array-of-objects
 */

import React, { useState } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

function TabsCard() {
  const tabList = [
    {
      key: 'tab1',
      tab: 'Sign in'
    },
    {
      key: 'tab2',
      tab: 'Sign up'
    }
  ];

  const contentList = {
    tab1: <div>Login form</div>,
    tab2: <p>signup</p>,
  };

  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabChange = key => {
    setActiveTab(key);
  };

  return (
    <Card
      style={{ width: '400' }}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={key => {
        handleTabChange(key);
      }}
    >
      {contentList[activeTab]}
    </Card>
  );
}
export default TabsCard;
