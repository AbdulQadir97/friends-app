import React from 'react'
import SignupForm from '../components/SignupForm'
import { Layout } from 'antd';
import '../style/Style.css';
const { Header, Content } = Layout;
const Signup = () => {
    return (
        <div>
    <Layout>
      <Header>  <h1 className = "regHeaderHeading">WELCOME TO FRIENDS APP</h1> <br/> </Header>
      <Content className = "bgColor"><h3>Signup Form</h3></Content>
    </Layout>
    <SignupForm/>
        </div>
    )
}
export default Signup;
