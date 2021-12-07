import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './reducer/authReducer';
import categorieReducer from './reducer/categorieReducer';
import msgReducer from './reducer/errReducer';
import { carritoRedurcer } from './reducer/carritoReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    msg: msgReducer,
    categorie: categorieReducer,
    carrito: carritoRedurcer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware( thunk )));