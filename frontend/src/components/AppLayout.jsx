import React, { useState } from 'react';
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { Layout, Menu, theme } from 'antd';
import { navbarItems } from '../constants/Data';
const { Header, Sider, Content } = Layout;

const AppLayout = ({children}) => {
const [collapsed, setCollapsed] = useState(false);
const {
  token: { colorBgContainer },
} = theme.useToken();
return (
  <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} style={{
      height:"100vh"
    }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={navbarItems}
      />
    </Sider>
    <Layout className="site-layout">
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        {React.createElement(collapsed ? RiMenuUnfoldFill : RiMenuFoldFill, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);
};
export default AppLayout;