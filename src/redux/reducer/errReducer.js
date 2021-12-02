import { msgTypes } from './../types/msgTypes';

const initialState = {
    msgError: null,
    msgSuccess: null
}

const msgReducer = (state = initialState, action) => {

    switch (action.type) {
        case msgTypes.setError:
            return {
                ...state,
                msgError: action.payload
            }
        case msgTypes.removeError:
            return {
                ...state,
                msgError: null
            }
        case msgTypes.setSuccess:
            return {
                ...state,
                msgSuccess: action.payload
            }
        case msgTypes.removeSuccess:
            return {
                ...state,
                msgSuccess: null
            }
        default:
            return state
    }

}

export default msgReducer;