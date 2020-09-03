import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBorrowedBooks, borrowBook } from '../../../store/bookStore';


const Borrowed = () => {


    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user.detail.id);
    const borrowedBooksLoad = useSelector(state => state.books.borrowedBooks.isLoading);
    const booksBorrowed = useSelector(state => state.books.borrowedBooks.books);

    useEffect(() => {
        dispatch(getBorrowedBooks(userId))   
    }, [borrowedBooksLoad])


    return (
        <div>
            <section className="borrowedBooks">
                <h1>Borrowed Books</h1>
                { borrowedBooksLoad && booksBorrowed.map((borrowed, i) => {
                    if(!borrowed.disponibilte){
                        const date = new Date(borrowed.date_empreint);
                        date.setDate(date.getDate() + 15);
                        return (
                            <div className="borrowed" key={i}>
                                <h2>{borrowed.livre.titre}</h2>
                                <p>borrowed at: {borrowed.date_empreint}</p>
                                <p>return befor: { date.toLocaleString('fr-FR', { timeZone: 'UTC' })}</p>
                                <button className="actionBtn" onClick={() => dispatch(borrowBook('return', userId, {id: borrowed.id, bookId: borrowed.livre.id}))}>Return Book</button>
                            </div>
                        )
                    }
                })}
            </section>
            <section className="returnedBooks">
                <h1>Returner Books</h1>
                { borrowedBooksLoad && booksBorrowed.map((borrowed, i) => {
                    if(borrowed.disponibilte){
                        return (
                            <div className="borrowed" key={i}>
                                <h2>{borrowed.livre.titre}</h2>
                                <p>borrowed at: {borrowed.date_empreint}</p>
                                <p>returned: { borrowed.date_retour}</p>
                            </div>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export default Borrowed;