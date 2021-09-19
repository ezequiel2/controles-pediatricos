import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from  './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Admin from "../src/dashboard2/src/layouts/Admin";
import "./dashboard2/src/assets/css/material-dashboard-react.css?v=1.10.0";

const Rutas = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/sign-in' component={SignIn}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/forgot-password' component={ForgotPassword}/>
            <Route path="/admin" component={Admin} />
            <Redirect from="/admin" to="/admin/dashboard" />
        </Switch>
    )
}

export default Rutas;
