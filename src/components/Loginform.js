import React from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/config";
import { useState } from "react";
//import { collection,addDoc} from "firebase/firestore";

const Loginform = () => {
    const navigate = useNavigate()
    const [useremail, setUserEmail] = useState('');
    const [userpass, setUserPass] = useState('');
    const  loginHandler = async() => {
        try{
        const createUser = await signInWithEmailAndPassword(auth, useremail,userpass);
        if(createUser)
        {
            
            navigate('../home')
    
        }
        
      }
      catch(error)
      {
        console.log(error.message)
      }
    }
   

        return (

            <Form
              name="normal_login"
              className="login-form regForm"
             
            >
              
              
              
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange = {(e)=>{setUserEmail(e.target.value)}}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange = {(e)=>{setUserPass(e.target.value)}}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button regBtn loginBtn" onClick={loginHandler}>
                 Login
                </Button>
                Or <Link to = '/'>Signup </Link>
              </Form.Item>
            </Form>
          );
    
}
export default Loginform;
