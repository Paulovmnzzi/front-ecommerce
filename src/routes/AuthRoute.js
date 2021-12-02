import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './../Auth/LoginScreen';
import RegisterScreen from './../Auth/RegisterScreen';

const AuthRoute = () => {

    return (
        <div className='auth-main'>
            <div className='auth-loginbox animate__animated animate__fadeIn animate__delay-1s'>

                <Switch>
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route path='/auth/register' component={RegisterScreen} />

                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}

export default AuthRoute;
