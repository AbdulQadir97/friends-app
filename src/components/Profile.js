import React from 'react'
import { Layout } from 'antd'
import { onAuthStateChanged } from '@firebase/auth';
import { useState,useEffect } from 'react';
import { getDoc, collection, doc } from '@firebase/firestore';
import { db, auth } from '../config/config';
import Logout from './Logout';
const { Header, Footer, Sider, Content } = Layout;

 const Profile = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
       onAuthStateChanged(auth,(userId) => {
        const  currentUserId =  userId.uid;
        const usersCollectionRef = doc(db,'Users', currentUserId)
        const getUsers = async () => {
            const userdataInfo = await getDoc(usersCollectionRef);
            if(userdataInfo.exists)
            {
                
                setUsers(userdataInfo.data())
                
            }
          };
      
          getUsers();
       })

      

    },[])


 

     return (
         <div>

             <div>
                 {""}
                <h1>Name: {users.name}</h1>
                <h1>Email: {users.email}</h1>
                <Logout />

           

            </div>

        

        </div>
    )
}
export default Profile
