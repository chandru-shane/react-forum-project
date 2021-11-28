import React, {useState} from 'react';
import { Flex, Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import EndPoints from '../constants/EndPoints';
import { setToken } from '../workers/auth';


const Register = props => {

    const [username, setUseranme] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const usernameHandler = (event) => {
        setUseranme(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
    }

    const registerHandler = () => {
        // TODO: do the validation
        const response = fetch(EndPoints.register,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username':username,
                'email':email,
                'password':password,
            })
        }).then(res => {
            if(res.status===201){
                // component will be toggled into login component
                props.isLoginHandler()
                
            }
        })
        // TODO: handle the error
    }


    return (
        <Flex direction='column' height='100vh' justifyContent='center' alignItems='center'>
        <Flex p={12} background="gray.100" direction='column' rounded={20}>
            <Heading>Register</Heading>
        <Input onChange={usernameHandler} variant='filled' placeholder='username' mb={3}/>
        <Input onChange={emailHandler} placeholder='email'  mt={3} type='email'/>
        <Input onChange={passwordHandler} placeholder='password'  mt={3} type='password'/>
        <Input onChange={passwordHandler} placeholder='confirm password'  mt={3} type='password'/>
        <Button mt={3} type='submit' onClick={registerHandler} colorScheme='teal'>Register</Button>
        <p>Already have an account? <p onClick={props.isLoginHandler} style={{ color: 'blue' }}>login here.</p></p>
            </Flex>
        </Flex>
    );
}

export default Register;