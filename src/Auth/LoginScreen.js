import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeErrorAction } from '../redux/actions/errAction';
import useForm from './../hooks/useForm';
import { startLogin } from './../redux/actions/authActions';

const LoginScreen = () => {

const {msgError} = useSelector(state => state.msg)
    const dispatch = useDispatch();
    const history = useHistory()


    const [values, handleInputChange] = useForm({
        username: 'Paulovmnzzi',
        email: 'paulovmnzzi@gmail.com',
        password: 'asd123'
    });
    const { username, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(startLogin(username, email, password));
        history.replace('/')

    }

    const clean = (e) => {
        dispatch(removeErrorAction());
    }


    return (
        <>
            <h1 className='auth-title animate__animated animate__fadeIn animate__delay-1s'>Inicio de sesion</h1>
            <form className='auth-form' onSubmit={handleSubmit}>
                {
                    msgError &&
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                }
                <input
                    className='auth-input animate__animated animate__fadeIn animate__delay-1s'
                    autoComplete='off'
                    placeholder='Ingrese su usuario'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                ></input>
                <input
                    className='auth-input animate__animated animate__fadeIn animate__delay-1s'
                    autoComplete='off'
                    placeholder='Ingrese su correo'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                ></input>
                <input
                    className='auth-input animate__animated animate__fadeIn animate__delay-1s'
                    placeholder='Ingrese su clave'
                    autoComplete='off'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                ></input>

                <button
                    type='submit'
                    className='auth-btn animate__animated animate__fadeIn animate__delay-1s'
                >Ingresar</button>

                <Link to='/auth/register' onClick={clean} className='auth-msg animate__animated animate__fadeIn animate__delay-1s'>Todavía no te registraste?</Link>
                <div
                    className="google-btn animate__animated animate__fadeIn animate__delay-1s"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Inicia sesión con google pa</b>
                    </p>
                </div>


            </form>
        </>
    )
}

export default LoginScreen
