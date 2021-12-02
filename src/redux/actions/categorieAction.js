
import { categorieTypes } from './../types/categorieTypes';

export const addCategorie = (categorie) => ({
    type: categorieTypes.addCategorie,
    payload: categorie
})