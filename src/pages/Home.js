import React from 'react'
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import { Layout, Menu} from 'antd';
import { SettingOutlined }from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../style/style.scss';
import Post from '../components/Post';

const { Header,} = Layout;
const Home = () => {
    return (
        <div>
            <Layout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2"><Link to = './settings'><SettingOutlined /></Link></Menu.Item>
        <Menu.Item key="2"><Logout/></Menu.Item>
      </Menu>
    </Header>

  </Layout>
  <Profile/>
    <Post/>
         
        </div>
    )
}
export default Home;
