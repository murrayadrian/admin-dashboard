import { UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;
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
    getItem(<NavLink to={'/userlist'}>List Users</NavLink>, '3'),
    getItem(<NavLink to={'/user/add'}>Add new user</NavLink>, '4'),
    getItem('Update user', '5'),
    getItem('Delete user', '6'),
  ]),
  getItem('Customer', 'sub2', <TeamOutlined />, [getItem('List Customers', '7'), getItem('Export to excel', '8')]),
  getItem('Product', 'sub3', <TeamOutlined />, [
    getItem('List Products', '9'),
    getItem('Add new product', '10'),
    getItem('Update product', '11'),
    getItem('Delete product', '12'),
  ]),
  getItem('Order', 'sub4', <TeamOutlined />, [
    getItem('List Orders', '13'),
    getItem('Update status', '14'),
  ]),
  getItem('Coupon', 'sub5', <TeamOutlined />, [
    getItem('List Coupons', '15'),
    getItem('Add new coupon', '16'),
    getItem('Delete coupon', '17'),
  ]),
];
export const Layouts = ({children}) => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{minHeight: '100vh',}}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{padding: 0,background: colorBgContainer,}}/>
        <Content style={{margin: '0 16px',}}>
          <Breadcrumb style={{margin: '16px 0',}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{padding: 24, minHeight: 360, background: colorBgContainer,}}>
            {children}
          </div>
        </Content>
        <Footer style={{textAlign: 'center',}}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};