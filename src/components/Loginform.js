import React from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { useState } from "react";
//import { collection,addDoc} from "firebase/firestore";

const Loginform = () => {
    const navigate = useNavigate()
    const [useremail, setUserEmail] = useState('');
    const [userpass, setUserPass] = useState('');
  //  const [errorMessage, setErrorMeassage] = useState('')
    const  loginHandler = async() => {
        try{
        const createUser = await signInWithEmailAndPassword(auth, useremail,userpass);
        if(createUser)
        {
            
            
          navigate('../home')
    
        }
        
      }
      catch(e)
      {
      console.log(e.message)
      }
    }
   
        return (

            <Form className="form-flex">
               <h1>Login Now!</h1>
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
        <div  className='btn-link'>
        <Button onClick={loginHandler}>LOGIN</Button>
        <p>OR</p>
        <Link to='/'><p>Signup</p></Link>
        </div>
      </Form.Item>
            </Form>
          );
    
}
export default Loginform;
