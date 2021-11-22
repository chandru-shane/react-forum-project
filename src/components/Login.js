import React, {useState, useEffect} from 'react';
import { Flex, Input, Button, Heading } from '@chakra-ui/react';
import EndPoints from '../constants/EndPoints';
import {useNavigate} from 'react-router-dom';



const Login = props => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('isauth') ){
            console.log('isauth')
            console.log('authenticated no need do anything')
            navigate('/');
        }
    },[])
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    // const login = () =>{
        
    //     const response =  fetch(EndPoints.login, {
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             'username_or_email':username,
    //             'password':password
    //         })
    //     })
        
    //     console.log(response)
    //     // login success
    //     if(response.status == 200){
    //         const res = response.json()
    //         console.log(res)
    //         console.log(res.token);
            
    //         localStorage.setItem('isauth', true);
    //         navigate('/');
           
            
    //     }
    //     // handler the login failure
    //     else {

    //     }
    // }


    const login = () => {
        // TODO: change true to validation()
        if (true) {
          fetch(EndPoints.login, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username_or_email: username, password: password })
          })
            .then(res => {
              console.log(res.status)
              if (res.status === 200) {
                return res.json();
    
              }
              console.log('the token is invalid')
    
            }).then((res) => {
              console.log(res)
              localStorage.setItem('isauth', true);
              localStorage.setItem('token',res.token)
              console.log('hello world')
              navigate('/');
            })
            .catch(error => console.log(error));
        }
        else {
        //   alert('Error', 'Invaild Username or Password')
        }
      }
    

    return <Flex direction='column' height='100vh' justifyContent='center' alignItems='center'>
        <Flex p={12} background="gray.100" direction='column' rounded={20}>
            <Heading>Login</Heading>
            <Input onChange={usernameHandler} value={username} variant='filled' placeholder='username or email' mb={3} />
            <Input onChange={passwordHandler} value={password} placeholder='password' mt={3} type='password' />
            <Button onClick={login} mt={3} type='submit' colorScheme='green'>Login</Button>

        <p>Don't have an account? <p onClick={props.isLoginHandler} style={{ color: 'blue' }} >create new one.</p></p>
        </Flex>
    </Flex>
}


export default Login;