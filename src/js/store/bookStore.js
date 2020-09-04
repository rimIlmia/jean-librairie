import { combineReducers } from "redux";
import api from '../utils/api';


export const getBooks = (filter) => {
    return dispatch => {
        dispatch({ type: 'FETCH_BOOKS' });

        return api
            .get(`/livres${filter ? filter : ""}`)
            .then(res => dispatch({ type: 'SET_BOOKS', payload: res.data }))
            .catch(error => {
                throw error;
            })
    }
}

export const getBorrowedBooks = (userId) => {
    return dispatch => {   
        dispatch({ type: 'FETCH_BORROWED_BOOKS' });
        
        return api
            .get(`empreints?utilisateur.id=${userId}`)
            .then(res => dispatch({ type: 'SET_BORROWED_BOOKS', payload: res.data }))
            .catch(err => console.log(err))
    }
} 



export const borrowBook = (get, userId, id) => {
    return dispatch => {
        dispatch({ type: "CLEAR_BOOKS" });
        dispatch({ type: "CLEAR_BORROWED_BOOKS" });
        dispatch({ type: "BORROW_BOOK" });

        if(get == 'borrow'){
            const body = {
                date_empreint: new Date(),
                livre: id.id,
                utilisateur: userId
            }
            return api.post('empreints', body)
            .then(res => {
                    api.put(`livres/${id.id}`, { disponibilte: false })
                    .then(result => {
                        getBooks()
                        getBorrowedBooks(userId)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
        if(get == 'return'){
            const body = {
                date_retour: new Date(),
            }
            return api.put(`empreints/${id.id}`, body)
            .then(res => {
                api.put(`livres/${id.bookId}`, { disponibilte: true })
                .then(result =>  {
                    getBooks()
                    getBorrowedBooks(userId)
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
    }
}

const defaultAllBooks = {
    isLoading: false,
    books: []
}

const defaultBorrowedBooks = {
    isLoading: false,
    books: []
}

const allBooks = (state = defaultAllBooks, action) => {
    const allBooksAction = {
        "SET_BOOKS": { isLoading: true, books: action.payload },
        "CLEAR_BOOKS": defaultAllBooks
    }
    return allBooksAction[action.type] || state;
}

const borrowedBooks = (state = defaultBorrowedBooks, action) => {
    const borrowedBooksAction = {
        "SET_BORROWED_BOOKS": { isLoading: true, books: action.payload },
        "CLEAR_BORROWED_BOOKS": defaultBorrowedBooks
    }
    return borrowedBooksAction[action.type] || state;
}

const booksFunction = (state = false, action) => {
    const booksFuntionAction = {
        "FETCH_BOOKS": true,
        "BORROW_BOOK": true,
    }
    return booksFuntionAction[action.type] || state;
}

const books = combineReducers({
    allBooks,
    borrowedBooks,
    borrowBook,
    booksFunction
});

export default books;