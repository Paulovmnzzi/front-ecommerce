
import { authTypes } from './../types/authTypes';
import { fetchSinToken } from './../../helpers/fetch';
import { setErrorAction, setSuccessAction } from './errAction';

export const startLogin = (username, email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('auth/login', { username, email, password }, 'POST');
        const body = await resp.json();

        if (body?.uid !== null) {
            console.log(body)
            dispatch(authLoginAction({ username, email, uid: body.uid }));
            localStorage.setItem('isLogged', true);
            localStorage.setItem('user', JSON.stringify({username, email, uid: body.uid}));
        }else {
            dispatch(setErrorAction("Credenciales incorrectas"))
        }
    }
}

export const authLoginAction = (user) => ({

    type: authTypes.login,
    payload: user
})

export const startLogout = () => {
    return async (dispatch) => {

        dispatch(authLogoutAction());
        localStorage.setItem('isLogged', false);

    }
}

const authLogoutAction = () => ({

    type: authTypes.logout

});

export const startRegister = ({ username, password, email }) => {
    return async (dispatch) => {
        console.log("aqui toi weon")

        const resp = await fetchSinToken("auth/register", { username, password, email }, "POST");
        const body = await resp.json();

        if (body?.uid !== null) {
            console.log(body)
            dispatch(authRegister(true))
            dispatch(setSuccessAction(`Su usuario con id: ${body.uid} se ha registrado correctamente`))
        } else {
            console.log("te faié :c")
            dispatch(setErrorAction("El usuario ya existe"))
        }

    }
}

export const authRegister = (boolean) => ({
    type: authTypes.register,
    payload: boolean
});