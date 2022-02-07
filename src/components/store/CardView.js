import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addProductoCarrito } from './../../redux/actions/carritoActions';

const CardView = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { temporal } = useSelector(state => state.carrito);

    console.log(temporal);

    const handleAgregarCarrito = (temporal) => {
        Swal.fire({
            title: 'Quieres agregar el producto al carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Agregar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Agregado correctamente!', '', 'success')
              dispatch(addProductoCarrito(temporal))
            } else if (result.isDenied) {
              Swal.fire('Puede seguir comprando', '', 'success')
            }
          })
    }

    return (
        <div>
            <Navbar />
            <div className='card-view-container'>
                <div className='card-view-image'>
                    <img className='card-view-image-image' src={temporal.cover} alt={temporal.ID} />
                </div>
                <div className='card-view-info'>
                    <h1> {temporal.title} </h1>
                    <h2> <strong>Autor:</strong> <span className='text-light'>{temporal.author}</span>  </h2>
                    <h2> Categorias: <span className='text-light'>  { temporal.categories.map( x =>  (x.name + ' ') )  } </span>  </h2>
                    {/* <p> {temporal.content} </p> */}
                    <h2> Idioma: <span className='text-light'> {temporal.language} </span> </h2>
                    <h2> Precio: <span className='text-light'> $ {(temporal.pages * 3)} </span> </h2>
                    <h2> Páginas: <span className='text-light'> {temporal.pages} </span> </h2>
                    <h2> Editorial: <span className='text-light'> {temporal.publisher} </span> </h2>
                    <button type='button' onClick={ () => handleAgregarCarrito(temporal)} className='card-view-button'> AGREGAR </button>
                    <button type='button' onClick={() => history.goBack()} className='card-view-button'> VOLVER </button>
                </div>
            </div>
        </div>
    )
}

export default CardView;