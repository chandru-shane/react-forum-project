import './App.css';
import { ChakraProvider, Flex, Container } from '@chakra-ui/react';
import Profile from './screens/Profile/Profile';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useHistory,
} from "react-router-dom";
import Home from './screens/Home/Home';
import Auth from './screens/Auth/Auth';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Group from './screens/Group/Group';
import Logout from './screens/Auth/Logout'


const App = () => {

  const authHandler = () => {

    console.log('auth hander is called')
    console.log(localStorage.getItem('isauth'))
    return localStorage.getItem('isauth');

  }


  return (
    <ChakraProvider>
      <Router>
        <React.Fragment>
          <div>

            {
              authHandler() ? <div>
                <NavBar />
              </div> : <ul></ul>
            }

            <Routes>


              <Route path='/login' element={<Auth />} />

              <Route exact path='profile' element={<PrivateRoute isAuthenticated={authHandler} />}>
                <Route exact path="/profile" element={<Profile />}></Route>
              </Route>

              <Route exact path='/' element={<PrivateRoute isAuthenticated={authHandler} />}>
                <Route exact path='/' element={<Home />} />
              </Route>

              <Route exact path='/' element={<PrivateRoute isAuthenticated={authHandler} />}>
                <Route exact path='/group' element={<Group />} />
              </Route>

              <Route exact path='/' element={<PrivateRoute isAuthenticated={authHandler} />}>
                <Route exact path='/logout' element={<Logout />} />
              </Route>


            </Routes >

          </div>
        </React.Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
