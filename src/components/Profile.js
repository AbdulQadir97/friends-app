import React from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import { getDoc, collection, doc, getDocs } from '@firebase/firestore';
import { db, auth } from '../config/config';



const Profile = () => {
    const [users, setUsers] = useState([])
    const [newPost, setPosts] = useState([])

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
            const postsCollectionRef = collection(db, 'posts')
            const getPost = async () => {
                const postdataInfo = await getDocs(postsCollectionRef);
                console.log(postdataInfo)
                const new_Post = postdataInfo.docs.map((doc) => ({ ...doc.data() }));
                setPosts(new_Post)






            };

            getUsers();
            getPost();
        })



    }, [])




    return (
        <div>

            <div className='profile'>
                <img src={users.profileUrl} alt={users.name + "pic"}/>
                <h1>Bio:{users.bio}</h1>
                <h1>Name: {users.name}</h1>
                <h1>Email: {users.email}</h1>
                


            </div>

            <div>
                {
                    newPost.map((v) => { return (<div><div>{v.userpost}</div><div><img src={v.imageUrl} alt='images' height='100px' width='100px' /></div></div>) })

                }
            </div>

        </div>
    )
}
export default Profile
