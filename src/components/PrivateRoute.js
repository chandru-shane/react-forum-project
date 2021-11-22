import React from 'react';

import {Navigate, Route, Outlet} from 'react-router-dom';

function PrivateRoute(props) {
    console.log('private route is used')
    const auth = props.isAuthenticated();
    if (auth === null){
      return <Navigate to="/login" />
    }
    return auth ? <Outlet/> : <Navigate to="/login" />;
  }

  export default PrivateRoute;

