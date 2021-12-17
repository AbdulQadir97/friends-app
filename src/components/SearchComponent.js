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
   const [usersSearch, setSearchAble] = useState([''])
    useEffect(() => {
     
            //const currentUserId = userInfo.uid;
            const queryColl = collection(db, "users");
            const getUsers = async () => {
                const userdataInfo = await getDocs(queryColl);
                console.log(userdataInfo.docs)
                const dataUser = userdataInfo.docs.map((doc) => ({...doc.data()}))
                setSearchAble(dataUser)         
            };

            getUsers();
        
    }, [])

    console.log (usersSearch)
    const userName = usersSearch.map((nameOfUser => nameOfUser.name))
    console.log(userName)
    const onSearch = ()=> {
    userName.filter(
        (searchData) => {
            if(searchData===searchQuery){
                alert(searchData)
                return searchData
            }
        }
    )}

    return (
        <div>
            <Search
                type='search'
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                onSearch={onSearch}
                /> 

        </div>
    )
}
export default SearchComponent;
