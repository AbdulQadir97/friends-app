import React from 'react'
//import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import {  collection,getDocs} from '@firebase/firestore';
import { db} from '../config/config';
import { Input} from 'antd';
import '../style/style.scss';
const { Search } = Input;


const SearchComponent = () => {

   const [searchQuery,setSearchQuery] = useState(['']);
   const [users, setSearchAble] = useState([''])
   const onSearch = ()=>{
       console.log(searchQuery)
   }


  


    useEffect(() => {
     
            //const currentUserId = userInfo.uid;
            const queryColl = collection(db, "users");
            console.log(queryColl)
            const getUsers = async () => {
                const userdataInfo = await getDocs(queryColl);
                
                userdataInfo.docs.map((doc) => {
    
                  const userData = doc.data();
                  const searchAble = [userData.name,userData.email]
               //   console.log(searchAble)
                   return setSearchAble(searchAble)
                 
                  });       
            };

            getUsers();
        
    }, [])

    console.log(users)


    return (
        <div>
            <Search
                type='search'
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                /> 

        </div>
    )
}
export default SearchComponent;
