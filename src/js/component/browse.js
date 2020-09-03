import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/bookStore";
import { getCategories } from "../store/categorieStore";
import "../../sass/browse.css";

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
    <section>
      <ul>
        <li
          className={currentFilter == 0 ? "red" : "blue"}
          onClick={filtrer("?created_at_gt=" + newd + "&_sort=created_at:ASC")}
          data-id="0"
        >
          Nouveau
        </li>

        {categories && categories.length > 0 ? (
          categories.map((cat, index) => {
            if (cat.livres.length > 0)
              return (
                <li
                  className={currentFilter == index + 1 ? "red" : "blue"}
                  key={cat.id}
                  onClick={filtrer("?categorie.id=" + cat.id)}
                  data-id={index + 1}
                >
                  {cat.nom}
                </li>
              );
          })
        ) : (
          <span></span>
        )}
        <li
          onClick={filtrer("")}
          data-id={-1}
          className={currentFilter == -1 ? "red" : "blue"}
        >
          Tout
        </li>
      </ul>
      <ul className="flex flex-col">
        {books && books.length > 0 ? (
          books.map((book) => {
            return (
              <li className="" key={book.id}>
                <div className="p-4">
                  <span className="font-bold uppercases f4">{book.titre}</span>
                  <p className="lh-4">{book.resume}</p>

                  <img
                    src={book.image != null ? `${URL}${book.image.url}` : ""}
                  />
                </div>
                <hr className="m-0" />
              </li>
            );
          })
        ) : (
          <span>No books</span>
        )}
      </ul>
    </section>
  );
};

export default Browse;
