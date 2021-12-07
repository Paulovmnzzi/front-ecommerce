import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';

const CardView = () => {

    const { temporal } = useSelector(state => state.carrito);

    console.log(temporal)

    return (
        <div>
            <Navbar />
            <div className='card-view-container'>
                <div className='card-view-image'>
                    <img className='card-view-image-image' src={temporal.cover} alt={temporal.ID} />
                </div>
                <div className='card-view-info'>
                    <h1> {temporal.title} </h1>
                    <h2> <strong>Autor:</strong> <span>{temporal.author}</span>  </h2>
                    <h2> Categorias: { temporal.categories.map( x => x.name )  } </h2>
                    <p> {temporal.content} </p>
                </div>
            </div>
        </div>
    )
}

export default CardView
