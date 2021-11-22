import React, {userState, useEffect, useState} from 'react';
import {} from '@chakra-ui/react';
import Login from '../../components/Login';
import Register from '../../components/Register';


const Auth = props =>  {
    const [isLogin, setIsLogin] = useState(true);
    console.log(
        'inside the auth component'
    )

    const isLoginHandler = () => {
        setIsLogin(!isLogin);
    }

    return isLogin ? <Login isLoginHandler={isLoginHandler}/> : <Register isLoginHandler={isLoginHandler}/>
}

export default Auth;