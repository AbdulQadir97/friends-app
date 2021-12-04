import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/config";
import { useState } from "react";
import { collection,addDoc, setDoc, doc} from "firebase/firestore";

const SignupForm = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [userpass, setUserPass] = useState('');
    const signupHandler = async() => {
        
        try{
        const createUser = await createUserWithEmailAndPassword(auth, useremail,userpass);
        if(createUser)
        {
          await onAuthStateChanged(auth,(userId) => {
          console.log(userId.uid)
          const usersCollRef = collection(db, "Users");
          if(usersCollRef.exist)
          {}
          const createdNewUser = setDoc(doc(usersCollRef,userId.uid),{email:useremail,name:username,password:userpass})

            
          })
          navigate('../login')
    
        }
        
      }
      catch(error)
      {
        console.log(error.message)
      }
    }
    // const usersCollectionRef = collection(db, "users");
    // const createUserCollection = async() => {
    //     try{

    //       //  const createdUser = await addDoc(usersCollectionRef,{email:useremail,name:username,password:userpass})
    //         signupHandler()
    //     }
    //     catch(e)
    //     {

    //     }
    // }

        return (

            <Form
              name="normal_login"
              className="login-form regForm"
             
            >
              
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange = {(e)=>{setUserName(e.target.value)}} />
              </Form.Item>
              
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
                <Button type="primary" htmlType="submit" className="login-form-button regBtn" onClick={signupHandler}>
                  Sign-up
                </Button>
                Or <Link to = '/login'>Login </Link>
              </Form.Item>
            </Form>
          );
    
}
export default SignupForm;
