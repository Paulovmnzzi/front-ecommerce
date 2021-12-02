import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/authActions';
import { useHistory, NavLink } from 'react-router-dom';
import { removeErrorAction } from '../../redux/actions/errAction';
import { removeSuccessAction } from './../../redux/actions/errAction';

const Navbar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const history = useHistory();

    const handleLogout = async () => {
        await dispatch(startLogout())
        await dispatch(removeErrorAction());
        await dispatch(removeSuccessAction());
        history.replace('/auth/login');
    }


    return (
        <div className='store-navbar'>
            <div className='sotre-navbar-left'>
                <NavLink to='/Home' className='store-link'>Home</NavLink>
            </div>

            {user?.username ?
                (
                    <div className='sotre-navbar-left'>
                        <NavLink to='/Home' className='store-link'> {user.username} </NavLink>
                    </div>
                ) : (
                    <div className='sotre-navbar-right'>
                        <NavLink to='/auth/login' className='store-link'>Inicio de sesión</NavLink>
                    </div>
                )
            }
            <span type='text' onClick={handleLogout} className='store-link'>Logout</span>

        </div>
    )
}

export default Navbar
