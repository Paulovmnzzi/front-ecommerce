import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'
import { addCategorie } from './../../redux/actions/categorieAction';
import { useHistory } from 'react-router-dom';

const Store = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCategorie = (key) => { //mandar categoria a la vista de items y no dejar acceder si no hay un item seleccionado
        switch (key) {
            case 'Libros':
                dispatch(addCategorie('Libros'));
                history.push('/search');
                break;
            case 'epicos':
                dispatch(addCategorie('epico'));
                history.push('/search');
                break;
            case 'computacion':
                dispatch(addCategorie('computación'));
                history.push('/search');
                break;
            default:
                break;
        }
    }

    return (
        <div className='store-container'>
            <Navbar />
            <div className='store-row'>
                <div onClick={() => handleCategorie('Libros')} key='Libros' className='store-item-1'>Libros </div>
                <div onClick={() => handleCategorie('epicos')} key='epicos' className='store-item-2'>Epicos </div>
                <div onClick={() => handleCategorie('computacion')} key='computacion' className='store-item-3'>Computación </div>
            </div>
        </div>
    )
}

export default Store
