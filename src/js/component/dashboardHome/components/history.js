import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBorrowedBooks, borrowBook } from "../../../store/bookStore";

const Historybook = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.detail.id);
  const borrowedBooksLoad = useSelector(
    (state) => state.books.borrowedBooks.isLoading
  );
  const booksBorrowed = useSelector((state) => state.books.borrowedBooks.books);

  useEffect(() => {
    dispatch(getBorrowedBooks(userId));
  }, [borrowedBooksLoad]);

  return (
    <div>
      <h1>history </h1>

      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date D'enpreint</th>
            <th>Date de Retour</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooksLoad &&
            booksBorrowed.map((book) => {
              const date_emp = new Date(book.date_empreint);
              const date_retour = new Date(book.date_retour);

              return (
                <tr key={book.id}>
                  <td>{book.livre.titre}</td>
                  <td>
                    {date_emp.toLocaleString("fr-FR", {
                      timeZone: "UTC",
                    })}
                  </td>
                  <td>
                    {date_retour.toLocaleString("fr-FR", {
                      timeZone: "UTC",
                    })}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Historybook;
