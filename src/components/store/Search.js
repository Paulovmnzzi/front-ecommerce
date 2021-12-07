import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useForm from './../../hooks/useForm';
import Card from './Card';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';

const Search = () => {

    const { categorie } = useSelector(state => state.categorie);
    const history = useHistory();

    const [value, handleInputChange] = useForm({ titulo: '' });
    const { titulo } = value;
    const [body, setBody] = useState(null);

    const buscar = async (titulo) => {
        const resp = await fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${titulo}`);
        const body = await resp.json();

        setBody(body);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        buscar(titulo);
        history.push(`${history.location.pathname}?book=${titulo}`)
    }

    return (
        <>
            <Navbar />
        <div className='search-container ms-5'>
            <div className='search-form'>
                <h1>{categorie}</h1>
                <form className='search-form-form' onSubmit={handleSubmit}>
                    <label>Ingrese el nombre del libro</label>
                    <input
                        className='search-form-form-intpu'
                        name={'titulo'}
                        value={titulo}
                        onChange={handleInputChange}
                    />
                    <button className='search-form-form-button' type='submit'> Buscar </button>
                </form>
            </div>
            <hr />
            <div className='search-items'>
            { body && body.map(x => 
            <Card x={x} />
            )}
            </div>

        </div>
        </>
    )
}

export default Search;