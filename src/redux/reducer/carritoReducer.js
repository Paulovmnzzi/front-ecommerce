import { carritoTypes } from "../types/carritoTypes";



const initialState = {
    productos: [],
    temporal: {}
};


export const carritoRedurcer = (state = initialState, action) => {

    switch (action.type) {
        case carritoTypes.addProducto:
    
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }

        case carritoTypes.addTemporalProduct:
            return {
                ...state,
                temporal: action.payload
            }

        default:
            return state;
    }

}