import React from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import { db, auth } from '../config/config';
import { Row, Col } from 'antd';



const Profile = () => {

    const [newPost, setPosts] = useState([""])
    const [photoUrl,setPhotoUrl] = useState([''])
    const [userUID, setUserId]= useState('')
    const [userDisplayName, setUserDisplayName]= useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (userInfo) => {
            setUserId(userInfo.uid)
            setUserDisplayName(userInfo.displayName)
            })
            //setPhotoUrl(userInfo.photoURL)
            const postsCollectionRef = collection(db, 'posts')
            const getPost = async () => {
                await onSnapshot((postsCollectionRef), (posts) => {
                    const new_Post = posts.docs.map((doc) => ({ ...doc.data() }));
                    // setPosts(new_Post)
                });
            };

            getPost();
        



    }, [])



    return (
        <div>

            <div className='profile'><h1>Welcome: {userDisplayName}</h1></div>
            <Row >
                <Col className="post-container" span={12} offset={6}>
                    <div>
                        {
                            newPost.map((v) => { return (<div className='post-content'><div className='createdBy'>{`Post Created By : ${v.postCreated}`}</div><div>{v.userpost}</div><div><img src={v.imageUrl} alt='images' /></div></div>) })
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
