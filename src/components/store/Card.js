import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addProductoCarrito, addTemporalProductCarrito } from './../../redux/actions/carritoActions';
import { useHistory } from 'react-router-dom';

const Card = ({ x }) => {

    const { title, author, pages, ID, cover, publisher, publisher_date } = x;

    const history = useHistory();
    const dispatch = useDispatch();

    const handleAddCarrito = (x) => {
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
              dispatch(addProductoCarrito(x))
            } else if (result.isDenied) {
              Swal.fire('Puede seguir comprando', '', 'success')
            }
          })
    }

    const handleVerMas = (x) => {
        dispatch(addTemporalProductCarrito(x));
        history.push(`${history.location.pathname}/${x.ID}`);
    }

    return (
        <div className='card-body'>
            <div className='row card-row'>
                <div className='col-3'>

                    <div className='card-image'>
                        <img className='card-image-image' src={cover} alt='ID' />
                    </div>
                </div>
                <div className='card-text'>
                    <h3 className='card-text-title'>
                        {title}
                    </h3>
                    <p>Autor: {author}</p>
                    <p>Pages: {pages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Año: {publisher_date}</p>
                    <span>Id: {ID}</span>
                </div>
                <div className='card-text-add'>
                <button onClick={() => handleAddCarrito(x)} className='card-text-add-plus'><span className='card-text-add-plus-x'> + </span></button>
                <button onClick={() => handleVerMas(x)} className='card-text-add-plus'><span className='card-text-add-plus-mas'> ver más </span></button>
                </div>
            </div>
        </div>

    )
}

export default Card
