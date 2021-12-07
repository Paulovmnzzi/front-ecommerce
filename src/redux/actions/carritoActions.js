import { carritoTypes } from "../types/carritoTypes";


export const addProductoCarrito = (producto) => ({

    type: carritoTypes.addProducto,
    payload: producto

})

export const addTemporalProductCarrito = (product) => ({

    type: carritoTypes.addTemporalProduct,
    payload: product

})