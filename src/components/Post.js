import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../config/config";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { Button, Modal, Input } from "antd";
import '../style/Style.css'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const { TextArea } = Input;




const Post = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPost, setPost] = useState('');
    const [newFile, setFile] = useState(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const postHanlder = () => {
        setIsModalVisible(false);
        onAuthStateChanged(auth, (userId) => {
            console.log(userId.uid)
            const postCollRef = collection(db, "posts");
            const sotrageRef = ref(storage, `files/${newFile.name}`);
            const uploadTask = uploadBytesResumable(sotrageRef, newFile);
            uploadTask.on('state_changed', ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                   setDoc(doc(postCollRef), { userpost: newPost, imageUrl: downloadUrl })
                })
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
            <Modal title="Create Post!" visible={isModalVisible} onOk={postHanlder} onCancel={handleCancel}>
                <TextArea rows={4} onChange={(e) => { setPost(e.target.value) }} />
                <Input type='file' onChange={(e)=>{setFile(e.target.files[0])}} />
            </Modal>
            
        </div>
    )

}

export default Post