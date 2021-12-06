// import React from 'react'
// import { useState, useEffect } from 'react';
// import '../style/Style.css'
// import { Link } from 'react-router-dom';
// import { Layout, Menu, Input, Button } from 'antd';
// import { SettingOutlined, EditOutlined } from '@ant-design/icons';
// import { onAuthStateChanged } from '@firebase/auth';

// import { getDoc, collection, doc } from '@firebase/firestore';
// import { db, auth } from '../config/config';
// const { Header, Content } = Layout;


// const Setting = () => {
//   const [users, setUsers] = useState([])

//   const [isReadonly, setIsReadonly] = useState(true);
  

//   useEffect(() => {
//     onAuthStateChanged(auth, (userId) => {
//       const currentUserId = userId.uid;
//       const usersCollectionRef = doc(db, 'users', currentUserId)
//       const getUsers = async () => {
//         const userdataInfo = await getDoc(usersCollectionRef);
//         if (userdataInfo.exists) {

//           setUsers(userdataInfo.data())

//         }
//       };

//       getUsers();
//     })



//   }, [])





//   return (
    

//     <div>
      
//       <Layout className="layout">
//         <Header>
//           <div className="logo" />
//           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//             <Menu.Item key="1"><Link to='../home'>Profile</Link></Menu.Item>
//             <Menu.Item key="2"><Link to='./settings'><SettingOutlined /></Link></Menu.Item>
            
//           </Menu>
          
//         </Header>
//         <Content>
//         <h1 className='myHeading'>EDIT YOUR PROFILE</h1>

//           <Input.Group className='inputForm'>

//             {/* <Input style={{ width: 'calc(100% - 100px)' }} value={users.name} readOnly onChange = {(e)=>{setNewUserName(e.target.value)}}/> */}
//             <div >Name: {users.name} 
//             <Button type="primary" className='space-bet' ><EditOutlined /></Button></div>
//           </Input.Group>
//           <Input.Group className='inputForm'>

//             <Input style={{ width: 'calc(100% - 100px)' }} type="text" readOnly={isReadonly}  value={users.name}/>
//             <div >Email: {users.email} 
//             <Button type="primary" className='space-bet' onClick={()=> setIsReadonly(prevState => !prevState)} ><EditOutlined /></Button></div>
//           </Input.Group>

//         </Content>

//           </Layout>
//     </div>
//   )
// }

// export default Setting
