import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/bookStore";
import { getCategories } from "../store/categorieStore";
const Books = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.collection);
  const books = useSelector((state) => state.books.allBooks);
  const booksAreLoading = useSelector((state) => state.books.isLoading);
  const [currentFilter, setCurrentFilter] = useState("");
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBooks("?created_at_gt=" + newd + "&_sort=created_at:ASC"));
  }, []);

  if (booksAreLoading)
    return (
      <span className="f1 font-bold text-green">Chargement de livres...</span>
    );
  const handleClick = (event) => {
    dispatch(getBooks(event.target.value));
    //setCurrentFilter(event.target.value);
  };
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
  return (
    <section>
      <ul>
        <li
          onClick={handleClick}
          value={"?created_at_gt=" + newd + "&_sort=created_at:ASC"}
        >
          Nouveau
        </li>

        {categories && categories.length > 0 ? (
          categories.map((cat) => {
            if (cat.livres.length > 0)
              return (
                <li
                  className=""
                  key={cat.id}
                  onClick={handleClick}
                  value={"?categorie.id=" + cat.id}
                >
                  {cat.nom}
                </li>
              );
          })
        ) : (
          <span></span>
        )}
      </ul>
      <ul className="flex flex-col">
        {books && books.length > 0 ? (
          books.map((book) => {
            return (
              <li className="" key={book.id}>
                <div className="p-4">
                  <span className="font-bold uppercases f4">{book.titre}</span>
                  <p className="lh-4">{book.resume}</p>
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

export default Books;
