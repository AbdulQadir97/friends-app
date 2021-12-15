import React from 'react'
import { useState, useEffect } from 'react';
import '../style/style.scss';
import { Link } from 'react-router-dom';
import { Layout, Menu, Card, Input, Button, Modal } from 'antd';
import { SettingOutlined} from '@ant-design/icons';
import { onAuthStateChanged } from '@firebase/auth';
import { getDoc, doc, updateDoc } from '@firebase/firestore';
import { db, auth, storage } from '../config/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const { Header} = Layout;


const Setting = () => {

  const [users, setUsers] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newUserBio, setNewUserBio] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newUserProfile, setNewProfile] = useState('')
 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const updateData = async () => {
    setIsModalVisible(false);
    await onAuthStateChanged(auth, (userId) => {
    const usersDocRef = doc(db, "users", userId.uid);
    const sotrageRef = ref(storage, `userImages/${newUserProfile.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef,newUserProfile);
    uploadTask.on('state_changed', () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        updateDoc(usersDocRef,{bio:newUserBio, name:newUserName, profileUrl: downloadUrl})
      })
    })

      
  
  })

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    useEffect(() => {
        onAuthStateChanged(auth, (userId) => {
            const currentUserId = userId.uid;
            const usersCollectionRef = doc(db, 'users', currentUserId)
            const getUsers = async () => {
                const userdataInfo = await getDoc(usersCollectionRef);
                if (userdataInfo.exists) {

                    setUsers(userdataInfo.data())

                }
            };
            getUsers();
        })



    }, [])


  return (
    

    <div>
      
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to='../home'>Profile</Link></Menu.Item>
            <Menu.Item key="2"><Link to='../settings'><SettingOutlined /></Link></Menu.Item>  
          </Menu>
          </Header>
          </Layout>
          <div className="card">
    
        <Card >
          <img src={users.profileUrl} alt={users.name}/>
          <p><Input value={users.bio} readOnly/></p>
          <p><Input value={users.name} readOnly/></p>
          <p><Input value={users.email} readOnly/></p>
          <p><Button onClick={showModal}>Edit Profile</Button></p>
        </Card>

        <Modal title="Edit Your Profile!" visible={isModalVisible} onOk={updateData} onCancel={handleCancel}>
          <p><Input placeholder='Bio...' onChange={(e) => { setNewUserBio(e.target.value) }}/></p>
          <p><Input placeholder="Username"  onChange={(e) => { setNewUserName(e.target.value) }} /></p>
          <p><Input className="choose-file" type='file' onChange={(e) => { setNewProfile(e.target.files[0]) }}/></p>
      </Modal>

      </div>
    

    </div>
  )
}

export default Setting