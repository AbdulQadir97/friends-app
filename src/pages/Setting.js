import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import { SettingOutlined }from '@ant-design/icons';
const { Header} = Layout;


const Setting = () => {
    return (
        <div>
                        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to = '../home'>Profile</Link></Menu.Item>
        <Menu.Item key="2"><Link to = './settings'><SettingOutlined /></Link></Menu.Item>
      </Menu>
    </Header>

  </Layout>
        </div>
    )
}

export default Setting
