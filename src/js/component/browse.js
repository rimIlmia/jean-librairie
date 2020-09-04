import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/bookStore";
import { getCategories } from "../store/categorieStore";
import "../../sass/browse.css";
import defaultCover from "../../asset/images/default-cover.png";

const Browse = (props) => {
  const URL = "http://localhost:1337";
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.collection);
  const books = useSelector((state) => state.books.allBooks.books);
  const booksAreLoading = useSelector(
    (state) => state.books.allBooks.isLoading
  );
  const [currentFilter, setCurrentFilter] = useState("");
  const date = new Date(Date.now());
  const previousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  const newd =
    previousMonth.getFullYear() +
    "-" +
    ("0" + (previousMonth.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + previousMonth.getDate()).slice(-2);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBooks("?created_at_gt=" + newd + "&_sort=created_at:ASC"));
  }, []);

  if (!booksAreLoading)
    return (
      <span className="f1 font-bold text-green">Chargement de livres...</span>
    );

  const filtrer = (value) => (e) => {
    dispatch(getBooks(value));

    setCurrentFilter(e.currentTarget.dataset.id);
  };

  return (
    <section className="container ">
      <h5 className="color-violet font-weight-bold">Browse books</h5>
      <div className="filter my-3 ">
        <span className="mr-2 font-weight-bold">Genre:</span>
        <span
          className={
            currentFilter == 0
              ? "btn selected mr-2 font-weight-bold"
              : "btn no-selected mr-2"
          }
          onClick={filtrer("?created_at_gt=" + newd + "&_sort=created_at:ASC")}
          data-id="0"
        >
          Nouveau
        </span>
        {categories && categories.length > 0 ? (
          categories.map((cat, index) => {
            if (cat.livres.length > 0)
              return (
                <span
                  className={
                    currentFilter == index + 1
                      ? "btn selected mr-2 font-weight-bold"
                      : "btn no-selected mr-2"
                  }
                  key={cat.id}
                  onClick={filtrer("?categorie.id=" + cat.id)}
                  data-id={index + 1}
                >
                  {cat.nom}
                </span>
              );
          })
        ) : (
          <span></span>
        )}
        <span
          onClick={filtrer("")}
          data-id={-1}
          className={
            currentFilter == -1
              ? "btn selected mr-2 font-weight-bold"
              : "btn no-selected mr-2"
          }
        >
          Tout
        </span>
      </div>
      <div className="row ">
        {books && books.length > 0 ? (
          books.map((book) => {
            return (
              <div className="col-md-3 col-sm-12 p-3  " key={book.id}>
                <div className="p-2 border item-book">
                  <div className="d-flex justify-content-center pt-3 pb-2 ">
                    <img
                      className="img-book "
                      src={
                        book.image != null
                          ? `${URL}${book.image.url}`
                          : `${defaultCover}`
                      }
                    />
                  </div>{" "}
                  <div className="titre-book">{book.titre}</div>
                  <div className="mb-4 auteur ">
                    {book.auteur.nom}
                    {book.auteur.prenom}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span>No books</span>
        )}
      </div>
    </section>
  );
};

export default Browse;
