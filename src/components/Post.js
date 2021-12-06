// import React from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db, storage } from "../config/config";
// import { useState } from "react";
// import { collection,addDoc, setDoc, doc} from "firebase/firestore";
// import { Button, Modal, Input } from "antd";
// import '../style/Style.css'
// import { useNavigate } from "react-router";
// import { ref } from "firebase/storage";
// const { TextArea } = Input;




// const Post = ()=> {

//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [newPost, setPost] = useState('');
//     const [file, setFile] = useState(null);
//     const [url, setURL] = useState("");
        
//         console.log(file)
//         const handleImageAsFile = (e) => {
        
//             setFile(e.target.files[0]);
//         }

//     const showModal = () => {
//       setIsModalVisible(true);
//     };
  
//     const postHanlder = () => {
//       setIsModalVisible(false);
//       onAuthStateChanged(auth,(userId) => {
//         console.log(userId.uid)
//         const postCollRef = collection(db, "posts");
//         const createdPost = setDoc(doc(postCollRef),{ userpost: newPost})
//        // const imagesRef = ref(storage, 'images');
//        const ref = ref(storage,`/images/${file.name}`);
//        const uploadTask = ref.put(file);
//        uploadTask.on("state_changed", console.log, console.error, () => {
//          ref
//            .getDownloadURL()
//            .then((url) => {
//              setFile(null);
//              setURL(url);
//            });
//        });
        
         
          
//         })



//     };
  
//     const handleCancel = () => {
//       setIsModalVisible(false);
//     };
  
//     return(
//     <div>
//        <Button type="primary" htmlType="submit" className="login-form-button  loginBtn" onClick={showModal}>
//                 Create Post
//             </Button>
//             <Modal title="Create Post!" visible={isModalVisible} onOk={postHanlder} onCancel={handleCancel}>
//             <TextArea rows={4}  onChange = {(e)=>{setPost(e.target.value)}}/>
//             <Input  type ='file' onChange={handleImageAsFile} />
//       </Modal>
//       <img src={url} alt="" />
//     </div>
//     )

// }

// export default Post