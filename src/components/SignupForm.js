import React from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import '../style/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../config/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";


const SignupForm = () => {
  const navigate = useNavigate()
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpass, setUserPass] = useState('');
  const [userprofile, setProfile] = useState('');
  console.log(userprofile)
  const signupHandler = async () => {

    try {
      const createUser = await createUserWithEmailAndPassword(auth, useremail, userpass);
      if (createUser) {
        onAuthStateChanged(auth, (userId) => {
          console.log(userId.uid)
          const usersCollRef = collection(db, "users");
          const sotrageRef = ref(storage, `userImages/${userprofile.name}`);
          const uploadTask = uploadBytesResumable(sotrageRef, userprofile);
          uploadTask.on('state_changed', () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              setDoc(doc(usersCollRef, userId.uid), { id: userId.uid, email: useremail, name: username, password: userpass, profileUrl: downloadUrl })
              
            })
          })
          
            })
            navigate('../login')

          }

    }
    catch (error) {
          console.log(error.message)
        }
      }


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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={(e) => { setUserEmail(e.target.value) }} />
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
              onChange={(e) => { setUserPass(e.target.value) }}
            />
          </Form.Item>
          <Form.Item>

            <Input
              type='file'
              icon = {<UploadOutlined />}
              onChange={(e) => { setProfile(e.target.files[0]) }}
            />

       

          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button regBtn" onClick={signupHandler}>
              Sign-up
            </Button>
            Or <Link to='/login'>Login </Link>
          </Form.Item>
        </Form>
      );

    }
export default SignupForm;
