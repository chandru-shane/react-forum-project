import React, {useState} from 'react';
import { Flex, Input, Button, Heading } from '@chakra-ui/react';



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

    return (
        <Flex direction='column' height='100vh' justifyContent='center' alignItems='center'>
        <Flex p={12} background="gray.100" direction='column' rounded={20}>
            <Heading>Register</Heading>
        <Input variant='filled' placeholder='username' mb={3}/>
        <Input placeholder='email'  mt={3} type='email'/>
        <Input placeholder='password'  mt={3} type='password'/>
        <Input placeholder='confirm password'  mt={3} type='password'/>
        <Button mt={3} type='submit' colorScheme='teal'>Login</Button>
        <p>Already have an account? <p onClick={props.isLoginHandler} style={{ color: 'blue' }}>login here.</p></p>
            </Flex>
        </Flex>
    );
}

export default Register;