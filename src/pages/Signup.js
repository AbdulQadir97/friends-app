import React from 'react'
import SignupForm from '../components/SignupForm'
import { Layout } from 'antd';
import '../style/style.scss';
const { Header } = Layout;
const Signup = () => {
    return (
        <div>
    <Layout>
      <Header>  <h1 className = "main-heading">WELCOME TO FRIENDS APP</h1> <br/> </Header>
    </Layout>
    <SignupForm/>
        </div>
    )
}
export default Signup;
