import React from 'react'
import Loginform from '../components/Loginform'; 
import { Layout } from 'antd';
import '../style/Style.css';
const { Header, Content } = Layout;
const Login = () => {
    return (
        <div>
    <Layout>
      <Header>  <h1 className = "regHeaderHeading">WELCOME TO FRIENDS APP</h1> <br/> </Header>
      <Content className = "bgColor"><h3>Login Form</h3></Content>
    </Layout>
    <Loginform/>
        </div>
    )
}
export default Login;
