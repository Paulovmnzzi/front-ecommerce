import React, { useEffect, useState } from 'react'
import AuthRoute from './AuthRoute';
import { useDispatch, useSelector } from 'react-redux';
// import { startLogin } from './../redux/actions/authActions';
import StoreRouter from './StoreRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { authLoginAction } from '../redux/actions/authActions';
import { Redirect, BrowserRouter, Switch } from 'react-router-dom';

const AppRouter = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {isLogged} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        
        if(isLogged) {
            setIsAuthenticated(true);
        }else {
            setIsAuthenticated(false);
        }

    }, [isLogged]);

    useEffect(() => {
        if((localStorage.getItem('isLogged') === 'true')){
            setIsAuthenticated(true);
            dispatch(authLoginAction(JSON.parse(localStorage.getItem('user'))));
        }
    }, [dispatch])

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoutes path='/auth' component={AuthRoute} isAuthenticated={isAuthenticated} />
                <PrivateRoutes path='/' component={StoreRouter} isAuthenticated={isAuthenticated} />


                <Redirect to={isAuthenticated ? '/' : '/auth/login'} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
