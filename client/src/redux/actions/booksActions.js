import {
    GET_ALL_BOOKS_REQUEST,
    GET_ALL_BOOKS_SUCCESS ,
    GET_ALL_BOOKS_FAIL ,
} 
from '../constants/booksConstants';
import axios from 'axios';

export const getAllBooks = () => async dispatch => {
    try{
        dispatch({ type : GET_ALL_BOOKS_REQUEST });
        const{ data : { books } } = await axios.get('/api/books');
        dispatch({ type : GET_ALL_BOOKS_SUCCESS , payload : books });

    }catch(err){
        console.log('All Books error' , err);
        dispatch({ type : GET_ALL_BOOKS_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went wrong.'})
    }
}