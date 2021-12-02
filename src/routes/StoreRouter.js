import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Store from '../components/store/Store';
import Home from './../components/home/Home';
import Search from './../components/store/Search';

const StoreRouter = () => {

    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/store' component={Store} />
                <Route exact path='/search' component={Search} />

                <Redirect to='/home' />
            </Switch>
        </BrowserRouter>
    )
}

export default StoreRouter
