import React from 'react'
//import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from '@firebase/firestore';
import { db } from '../config/config';
import { Input, Select } from 'antd';
import '../style/style.scss';
import { Link, useNavigate } from 'react-router-dom';
const { Search } = Input;
const { Option } = Select;

const SearchComponent = () => {

    const [searchKeys, setSearchAbleKeys] = useState('')
    const [users, setUsers] = useState([])
    let userArr = [];
    const navigate = useNavigate()
    
    useEffect(()=>{
        const getUser = async() => {
        const q =query(collection(db, "users"), where("name", ">=", searchKeys));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            userArr.push(doc.data())
        });
        setUsers(userArr)
        console.log(users)

}
    getUser()
    },[searchKeys])

    const searchAble = (value)=> {
        console.log(users[value]);
        navigate(`./result`);
    }

    const children = users.map((elem, i) => {
        return <Option key={i} >{elem.name}</Option>
    })

    const searchableKey = (val) => {
        if (val === '') {
            setSearchAbleKeys('zzz')
        } else {
            setSearchAbleKeys(val)

        }
    }
    

    // useEffect(() => {
        
    //     const collectionRef = collection(db, 'users')
    //     const getUser = () => {
    //         onSnapshot((collectionRef), (uDeteails) => {
    //             const newDetailes = uDeteails.docs.map((doc) => ({ ...doc.data() }));
    //             console.log(newDetailes)
    //             setUserDetails(newDetailes)
    //             console.log(userDetails)

    //         });
    //     };

    //     getUser();

    // }, [])

    // const searchAble = (event) => {
    //     const searchWord = event.target.value;
    //     setSearchWord(searchWord)
    //     const newFilter = userDetails.filter((value) => {
    //         return value.name.toLowerCase().includes(searchWord.toLowerCase());
    //     });
    //     setFilteredData(newFilter)
    // }

    // const searchResult =()=>{
    //     if(searchKey)
    //      {
    //         filteredData.map((v)=>{
    //             console.log( v.name)
    //             return navigate("../result")
    //         })
    //      }
         
        
    // }
  

    return (
        <div>
            {/* <Search
                type='search'
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onChange={searchAble}
                onSearch={searchResult}
         
                />  */}


            <div>
            <Select showSearch={true}
                            placeholder='Search Users'
                            showArrow={false}
                            className='searchSelect'
                            defaultActiveFirstOption={false}
                            onSearch={searchableKey}
                            style={{ width: '250px' }}
                            onChange={searchAble}
                            filterOption={(input, option) => {

                                return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            }
                        >
                            {children}
                        </Select>
    
            </div>

        </div>


    )
}
export default SearchComponent;
