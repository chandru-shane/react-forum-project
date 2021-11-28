import React, { useEffect, useState } from 'react';
import { Container, Text, Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router';
import { getHomeData } from '../../workers/feed';
import Post from '../../components/Post';
import { clearAuthentication } from '../../workers/auth';
import NavBar from '../../components/NavBar';



const Home = props => {
    const [isLoaded, setIsloaded] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const fetchTheData = async () => {
        let data_ = await getHomeData();
        console.log(data_.status)
     
        if (data.statusCode == 401){
            
            clearAuthentication();
            navigate('/logout')
        }
        data_ = await data_.json();
        console.log(data_);
        setIsloaded(true);
        setData(data_);
        }
    useEffect(() => {
        console.log('is authenticated');
        console.log(!localStorage.getItem('isauth'))
        if (!localStorage.getItem('isauth')) {
            console.log('logout')
            navigate('/login')
        }
        // get the data
        fetchTheData();

    }, [])
    var insertData = data.length < 0 ? <Text>No Posts</Text>:data.map((post)=><Post data={post}/>);

    return (
        <Container>
            <NavBar/>
      
        {insertData}  
        </Container>        
    );
}

export default Home;