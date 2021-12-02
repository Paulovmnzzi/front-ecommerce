import React from 'react'
import { useSelector } from 'react-redux'
import useForm from './../../hooks/useForm';

const Search = () => {

    const { categorie } = useSelector(state => state.categorie);

    const [value, handleInputChange] = useForm({ titulo: '' });
    const { titulo } = value;

    const buscar = async (titulo) => {
        const resp = await fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${titulo}`);
        const body = await resp.json();

        console.log(body);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        buscar(titulo);
    }

    return (
        <div>
            <h1>{categorie}</h1>
            <form onSubmit={handleSubmit}>
                <label>Busca tu libro papá</label>
                <input
                    name={'titulo'}
                    value={titulo}
                    onChange={handleInputChange}
                />
                <button type='submit'> Buscar </button>
            </form>
        </div>
    )
}

export default Search
