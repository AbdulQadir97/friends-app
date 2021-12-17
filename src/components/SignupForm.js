import React from 'react'
import { Form, Input, Button } from 'antd';
import { } from '@ant-design/icons';
import '../style/style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../config/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";


const SignupForm = () => {
  const navigate = useNavigate()
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpass, setUserPass] = useState('');
  const [userbio, setBio] = useState('');
  const [userprofile, setProfile] = useState('');
 // const [profileUrl, setUrl] = useState('')
  console.log(userprofile)
  const signupHandler = async () => {
    try {
        await createUserWithEmailAndPassword(auth, useremail, userpass);
        onAuthStateChanged(auth, (userInfo) => {
          const usersCollRef = collection(db, "users");
          const sotrageRef = ref(storage, `userImages/${userprofile.name}`);
          const uploadTask = uploadBytesResumable(sotrageRef, userprofile);
          uploadTask.on('state_changed', () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              setDoc(doc(usersCollRef, userInfo.uid), { id: userInfo.uid, name: username, email: useremail, password: userpass, bio: userbio, profileUrl: userInfo.photoURL = downloadUrl })
              // setUrl(downloadUrl)
            })
          })
        })
        updateProfile(auth.currentUser,{
          displayName: username,
        })
        navigate('../login')


    }
    catch (error) {
      console.log(error.message)
    }
  }


  return (

    <Form className="form-flex">
      <h1>Signup Now!</h1>
      <Form.Item
        name="username"
        rules={[
          {
            message: 'Please input your name',
            required: true
          }
        ]}
      >
        <Input type='text' placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Please input your E-mail!" onChange={(e) => { setUserEmail(e.target.value) }} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}

      >
        <Input
          type='password'
          placeholder='Please input your password!'
          onChange={(e) => { setUserPass(e.target.value) }}
        />
      </Form.Item>

      <Form.Item
        name="bio"
        rules={[{ required: true, message: 'Please input bio' }]}
      >
        <Input.TextArea
          showCount maxLength={50}
          placeholder='Bio...'
          onChange={(e) => { setBio(e.target.value) }} />
      </Form.Item>

      <Form.Item>
        <Input

          className="choose-file"
          type='file'
          onChange={(e) => { setProfile(e.target.files[0]) }}
        />
      </Form.Item>

      <Form.Item>
        <div className='btn-link'>
          <Button onClick={signupHandler}>SIGN UP</Button>
          <p>OR</p>
          <Link to='/login'><p>Login</p></Link>
        </div>
      </Form.Item>
    </Form>
  );

}
export default SignupForm;