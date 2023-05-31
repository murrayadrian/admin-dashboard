import { UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
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
  getItem(<NavLink to={'/'}>DashBoard</NavLink>, '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<NavLink to={'/user/list'}>List Users</NavLink>, '3'),
    getItem(<NavLink to={'/user/add'}>Add user</NavLink>, '4'),
  ]),

  getItem('Product', 'sub3', <TeamOutlined />, [
    getItem(<NavLink to={'/product/list'}>List Products</NavLink>, '5'),
    getItem(<NavLink to={'/product/add'}>Add product</NavLink>, '6'),
  ]),

  getItem('Customer', 'sub2', <TeamOutlined />, [
    getItem(<NavLink to={'/customer/list'}>List Customers</NavLink>, '7'),
    getItem(<NavLink to={'/customer/export'}>Export to excel</NavLink>, '8')
  ]),

  getItem('Order', 'sub4', <TeamOutlined />, [
    getItem(<NavLink to={'/order/list'}>List Orders</NavLink>, '9'),
  ]),

  getItem('Coupon', 'sub5', <TeamOutlined />, [
    getItem(<NavLink to={'/coupon/list'}>List Coupons</NavLink>, '10'),
    getItem(<NavLink to={'/coupon/add'}>Add new coupon</NavLink>, '11'),
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
        <Header style={{ padding: 0, background: colorBgContainer, }}>SOME THING</Header>
        <Content style={{ margin: '0 16px', }}>
          {/* <Breadcrumb style={{ margin: '16px 0', }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ padding: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
    </>
  );
};