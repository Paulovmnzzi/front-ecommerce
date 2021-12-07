import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Store from '../components/store/Store';
import Home from './../components/home/Home';
import Search from './../components/store/Search';
import CardView from './../components/store/CardView';

const StoreRouter = () => {

    // const params = useParams();
    // const {category, book} = params;
    // console.log(params);

    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/store' component={Store} />
                <Route exact path={`/search/:category`} component={Search} />
                <Route exact path={`/search/:category/?book=`} component={Search} />
                <Route exact path='/search/:category/:id' component={CardView}  />
                {/* <Route exact path={`/search?book=${book}`} component={Search} /> */}

                <Redirect to='/home' />
            </Switch>
        </BrowserRouter>
    )
}

export default StoreRouter
