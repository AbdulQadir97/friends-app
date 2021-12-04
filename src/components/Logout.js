import React from 'react'
import { Button } from 'antd'
import { auth, db } from "../config/config";
import { signOut } from '@firebase/auth';
import { useNavigate } from 'react-router';

const Logout = () => {
    const navigate = useNavigate()
    const logouthandle = async() => {
        if(signOut(auth))
        {
            alert("Signning OFF")
            navigate('../login')
        }
    } 
    return (
        <div>
            <Button type="primary" htmlType="submit" className="login-form-button regBtn loginBtn" onClick={logouthandle}>
                Logout
            </Button>
        </div>
    )
}

export default Logout
