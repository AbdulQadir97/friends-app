import React from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import { getDoc, collection, doc, getDocs } from '@firebase/firestore';
import { db, auth } from '../config/config';
import { Row, Col } from 'antd';



const Profile = () => {
    const [users, setUsers] = useState([""])
    const [newPost, setPosts] = useState([""])
    useEffect(() => {
        onAuthStateChanged(auth, (userInfo) => {
            const currentUserId = userInfo.uid;
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

            <div className='profile'><h1>Welcome: {users.name}</h1></div>
            <Row >
                <Col className="post-container" span={12} offset={6}>
                    <div>
                        {
                            newPost.map((v) => { return (<div className='post-content'><div>{v.userpost}</div><div><img src={v.imageUrl} alt='images'/></div></div>) })

                        }
                    </div>
                </Col>
            </Row>
            

            <div>
               
            </div>

        </div>
    )
}
export default Profile
