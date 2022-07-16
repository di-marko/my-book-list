import {
    GET_ALL_BOOKS_REQUEST,
    GET_ALL_BOOKS_SUCCESS ,
    GET_ALL_BOOKS_FAIL ,
    CLEAR_ERRORS
} 
from '../constants/booksConstants';


export const allBooksReducer = (state = { books : [] } , action) => {
    switch (action.type) {
        case GET_ALL_BOOKS_REQUEST:
            return {
                loading : true ,
            }
        case GET_ALL_BOOKS_SUCCESS: 
            return {
                loading : false ,
                books : action.payload ,
            }
        case GET_ALL_BOOKS_FAIL:
            return {
                loading : false ,
                error : action.payload ,
            }
        case CLEAR_ERRORS:
            return {
                ...state ,
                error : null 
            }
        default:
            return state
    }
}