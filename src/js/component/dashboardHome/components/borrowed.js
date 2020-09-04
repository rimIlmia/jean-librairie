import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBorrowedBooks, borrowBook } from "../../../store/bookStore";
import "../../../../sass/browse.css";
import defaultCover from "../../../../asset/images/default-cover.png";
const Borrowed = () => {
  const URL = "http://localhost:1337";

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
      <section className="borrowedBooks">
        <h5>You have to return </h5>
        <div className="row">
          {borrowedBooksLoad &&
            booksBorrowed.map((borrowed, i) => {
              if (!borrowed.livre.disponibilte) {
                const date = new Date(borrowed.date_empreint);
                date.setDate(date.getDate() + 15);
                return (
                  <div className="borrowed col-md-3 col-sm-12 p-3 " key={i}>
                    <div className="p-2 border item-book">
                      <div className="d-flex justify-content-center pt-3 pb-2 ">
                        <img
                          className="img-book "
                          src={
                            borrowed.livre.image != null
                              ? `${URL}${borrowed.livre.image.url}`
                              : `${defaultCover}`
                          }
                        />
                      </div>
                      <div className="titre-book">{borrowed.livre.titre}</div>
                      <div className="">
                        borrowed at: {borrowed.date_empreint}
                      </div>
                      <div className="">
                        return befor:{" "}
                        {date.toLocaleString("fr-FR", { timeZone: "UTC" })}
                      </div>
                      <button
                        className="btn-retour btn"
                        onClick={() =>
                          dispatch(
                            borrowBook("return", userId, {
                              id: borrowed.id,
                              bookId: borrowed.livre.id,
                            })
                          )
                        }
                      >
                        Return Book
                      </button>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>
      <hr className="m-2" />
      <section className="returnedBooks">
        <h5>All books to return</h5>
        <div className="row">
          {borrowedBooksLoad &&
            booksBorrowed.map((borrowed, i) => {
              const dateEm = new Date(borrowed.date_empreint);
              const dateR = new Date(borrowed.date_retour);

              if (borrowed.livre.disponibilte) {
                return (
                  <div
                    className="borrowed col-md-3 col-sm-12 p-3 "
                    key={`returned${i}`}
                  >
                    <div className="p-2 border item-book">
                      <div className="d-flex justify-content-center pt-3 pb-2 ">
                        <img
                          className="img-book "
                          src={
                            borrowed.livre.image != null
                              ? `${URL}${borrowed.livre.image.url}`
                              : `${defaultCover}`
                          }
                        />
                      </div>
                      <div>{borrowed.livre.titre}</div>
                      <div className="">
                        borrowed at:
                        {dateEm.toLocaleString("fr-FR", { timeZone: "UTC" })}
                      </div>
                      <div>
                        returned:
                        {dateR.toLocaleString("fr-FR", { timeZone: "UTC" })}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>
    </div>
  );
};

export default Borrowed;
