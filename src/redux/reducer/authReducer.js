import { authTypes } from './../types/authTypes';

const initialState = {
    isLogged: false,
    regok: null
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case authTypes.login:
            return {
               ...state,
               isLogged: true,
               user: {...action.payload},
            }
        case authTypes.logout:
            return initialState;
        case authTypes.register:
            return {
                ...state,
                regok: action.payload
            }
        default:
            return state;
    }

}

export default authReducer
