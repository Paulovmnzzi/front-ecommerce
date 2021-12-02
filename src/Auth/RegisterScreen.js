import React from 'react'
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeErrorAction, setErrorAction } from './../redux/actions/errAction';
import { authRegister, startRegister } from '../redux/actions/authActions';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError, msgSuccess } = useSelector(state => state.msg)
    const { regok } = useSelector(state => state.auth)


    const [values, handleInputChange] = useForm({
        username: 'Paulovmnzzi',
        email: 'paulovmnzzi@gmail.com',
        password: '1d3f55g',
        password2: '1d3f55g',
    });
    const { username, email, password, password2 } = values;

    const handleSubmit = async (e) => {
        await dispatch(authRegister(false));
        e.preventDefault();
        isFormValid();
        console.log(isFormValid())

        console.log('form correct')
        await dispatch(startRegister({ username, email, password }));
        if (regok) {
            dispatch(authRegister(false))
        }

    }

    const isFormValid = () => {
        validator.isEmpty(username.toString()) ?
            dispatch(setErrorAction('User should be complete')) : validator.isEmpty(email.toString()) || !validator.isEmail(email.toString()) ?
                dispatch(setErrorAction('Should be an valid email')) : validator.isEmpty(password.toString()) ?
                    dispatch(setErrorAction('Should insert a valid password')) : !validator.equals(password, password2) ?
                        dispatch(setErrorAction('Passwords should be equal')) : dispatch(removeErrorAction())
    }

    const clean = (e) => {
        dispatch(removeErrorAction());
    }


    return (
        <div>
            <h1 className='auth-title animate__animated animate__fadeIn animate__delay-1s'>Registro</h1>
            <form className='auth-form' onSubmit={handleSubmit}>
                {
                    msgError &&
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                }
                {
                    msgSuccess &&
                    <div className='auth__alert-success'>
                        {msgSuccess}
                    </div>
                }
                <input
                    className='auth-register animate__animated animate__fadeIn animate__delay-1s'
                    autoComplete='off'
                    placeholder='Ingrese su usuario'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                ></input>
                <input
                    className='auth-register animate__animated animate__fadeIn animate__delay-1s'
                    autoComplete='off'
                    placeholder='Ingrese su email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                ></input>
                <input
                    className='auth-register animate__animated animate__fadeIn animate__delay-1s'
                    placeholder='Ingrese su clave'
                    autoComplete='off'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                ></input>
                <input
                    className='auth-register animate__animated animate__fadeIn animate__delay-1s'
                    placeholder='Ingrese su clave'
                    autoComplete='off'
                    type='password'
                    name='password2'
                    value={password2}
                    onChange={handleInputChange}
                ></input>

                <button
                    type='submit'
                    className='auth-btn animate__animated animate__fadeIn animate__delay-1s'
                >Registrarse</button>

                <Link to='/auth/login' onClick={clean} className='auth-msg-register animate__animated animate__fadeIn animate__delay-1s'>Ya estas registrado?</Link>

            </form>
        </div>
    )
}

export default RegisterScreen
