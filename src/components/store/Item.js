import React from 'react';
import { useSelector } from 'react-redux';

const Item = () => {

    const {categorie} = useSelector(state => state.categorie);


    return (
        <>
        <title>{categorie}</title>

        
        
        </>
    )
}


export default Item
