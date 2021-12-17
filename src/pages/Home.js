import React from 'react'
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import { Layout, Menu} from 'antd';
import { SettingOutlined }from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../style/style.scss';
import Post from '../components/Post';
import SearchComponent from '../components/SearchComponent';

const { Header,} = Layout;
const Home = () => {
    return (
        <div>
            <Layout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item >Profile</Menu.Item>
        <Menu.Item ><Link to = '../settings'><SettingOutlined /></Link></Menu.Item>
        <Menu.Item ><Logout/></Menu.Item>
        <Menu.Item > <Post/></Menu.Item>
        <Menu.Item key="5"> <SearchComponent/></Menu.Item>
      </Menu>
    </Header>

  </Layout>
  <Profile/>
   
         
        </div>
    )
}
export default Home;
