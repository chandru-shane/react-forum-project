import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';


const Home = props => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('isauth')){
            navigate('/login')
        }
    })
    return <div><h1>Home page</h1></div>
}

export default Home;