// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
   
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate  to="/login" />
      }
    />
  );
};

export default App;
