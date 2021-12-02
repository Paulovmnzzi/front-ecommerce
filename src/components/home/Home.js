import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory()

    useEffect(() => {
        
        setTimeout(() => {
            
            history.push('/store')

        }, 1500);
        

    }, [history])

    return (
        <div className='home-page'>
            <img alt='persona con carrito' src='assets/undraw_empty_cart_co35.svg' className='img-home'></img>
            <h1 className='welcome-home'>Bienvenid@ !</h1>
        </div>
    )
}

export default Home
