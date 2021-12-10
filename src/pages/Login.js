import React from 'react'
import Loginform from '../components/Loginform'; 
import { Layout } from 'antd';
import '../style/style.scss';
const { Header } = Layout;
const Login = () => {
    return (
        <div>
    <Layout>
      <Header>  <h1 className = "main-heading">WELCOME TO FRIENDS APP</h1> <br/> </Header>

    </Layout>
    <Loginform/>
        </div>
    )
}
export default Login;
