import React, { useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../config/config";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { Button, Modal, Input, Form } from "antd";
import '../style/style.scss';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const { TextArea } = Input;

const Post = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPost, setPost] = useState('');
    const [newFile, setFile] = useState(null);
    const [userUID, setUserId] = useState('')
    const [userDisplayName, setUserDisplayName] = useState()
    
    console.log(userDisplayName)

    onAuthStateChanged(auth, (userInfo) => {
        setUserId(userInfo.uid)
        setUserDisplayName(userInfo.displayName)
    })
    const showModal = () => {
        setIsModalVisible(true);
    };

    const postHanlder = () => {

        setIsModalVisible(false);
        const postCollRef = collection(db, "posts");
        const sotrageRef = ref(storage, `postImage/${newFile}`);
        const uploadTask = uploadBytesResumable(sotrageRef, newFile.name);
        uploadTask.on('state_changed', () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                console.log(userDisplayName)
                const docu = setDoc(doc(postCollRef), { postCreated: userDisplayName, userpost: newPost, imageUrl: downloadUrl })
                console.log(docu)
            })
        })


    };

    const handleCancel = () => {
        setIsModalVisible(false);

    };

    return (
        <div>
            <Button type="primary" htmlType="submit" className="login-form-button  loginBtn" onClick={showModal}>
                Create Post
            </Button>
            <Modal
                title="Create Post!"
                visible={isModalVisible}
                onOk={postHanlder}
                onCancel={handleCancel}
                destroyOnClose={true}

            >

                <TextArea rows={4} onChange={(e) => { setPost(e.target.value) }} />
                <Input type='file' onChange={(e) => { setFile(e.target.files[0]) }} />

            </Modal>

        </div>
    )

}

export default Post;