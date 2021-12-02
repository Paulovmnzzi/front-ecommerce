import { msgTypes } from './../types/msgTypes';


export const setErrorAction = (err) => ({
    type: msgTypes.setError,
    payload: err
})

export const removeErrorAction = () => ({
    type: msgTypes.removeError,
})

export const removeSuccessAction = () => ({
    type: msgTypes.removeSuccess,
})

export const setSuccessAction = (succ) => ({
    type: msgTypes.setSuccess,
    payload: succ
})