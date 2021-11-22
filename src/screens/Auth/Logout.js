import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Logout = props => {
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('isauth')
        navigate('/')
    })
    return <h1>Logged out</h1> 
}

export default Logout;