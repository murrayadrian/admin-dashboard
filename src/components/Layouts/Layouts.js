import { UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {Helmet} from 'react-helmet'

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Welcome vinh', '1', <UserOutlined />),
  getItem(<NavLink to={'/'}>Home</NavLink>, '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<NavLink to={'/users/list'}>List Users</NavLink>, '3'),
    getItem(<NavLink to={'/users/add'}>Add user</NavLink>, '4'),
  ]),

  getItem('Product', 'sub3', <TeamOutlined />, [
    getItem(<NavLink to={'/products/show'}>Show Products</NavLink>, '5'),
    getItem(<NavLink to={'/products/add'}>Add product</NavLink>, '6'),
  ]),
  getItem(<NavLink to={'/customers'}>Customers</NavLink>, '7',<TeamOutlined />),

  getItem('Order', 'sub4', <TeamOutlined />, [
    getItem(<NavLink to={'/orders/list'}>List Orders</NavLink>, '98'),
  ]),

  getItem('Coupon', 'sub5', <TeamOutlined />, [
    getItem(<NavLink to={'/coupons/list'}>List Coupons</NavLink>, '9'),
    getItem(<NavLink to={'/coupons/add'}>Add new coupon</NavLink>, '10'),
  ]),
];
export const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <Helmet>
      <title>vinh</title>
    </Helmet>
    <Layout style={{ minHeight: '100vh', }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }}>Header</Header>
        <Content style={{ margin: '0 16px', }}>
          <div style={{ padding: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
};