import { categorieTypes } from './../types/categorieTypes';



const initialState = {
    categorie: null,

}


const categorieReducer = (state = initialState, action) => {

    switch (action.type) {
        case categorieTypes.addCategorie:
            return {
                ...state,
                categorie: action.payload
            }        
    
        default:
            return state;
    }

}

export default categorieReducer;