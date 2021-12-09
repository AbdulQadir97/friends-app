import React from 'react'
import Profile from '../components/Profile';
import { Layout, Menu} from 'antd';
import { SettingOutlined }from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../style/Style.css';
import Post from '../components/Post';

const { Header, Content} = Layout;
const Home = () => {
    return (
        <div>
            <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2"><Link to = './settings'><SettingOutlined /></Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="profile">
    <Profile className="profile" />
   
    </Content>
    <Post/>

  </Layout>
         
        </div>
    )
}
export default Home;
