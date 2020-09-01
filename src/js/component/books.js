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
  }, []);

  if (booksAreLoading)
    return (
      <span className="f1 font-bold text-green">Chargement de livres...</span>
    );
  const handleClick = (event) => {
    dispatch(getBooks(event.target.value));
    setCurrentFilter(event.target.value);
  };
  //   const handleFilter = (event) => {

  //   };

  return (
    <section>
      {/* <header>
        <select value={currentFilter} onChange={handleFilter}>
          <option value={""}>Tous</option>
          <option value={"?_sort=titre:ASC"}>Titre alphabetique</option>
          <option value={"?_sort=created_at:ASC"}>Date de création</option>
          <option value={"?dispo=false"}>Livre(s) disponible(s)</option>
        </select>
      </header> */}
      {categories && categories.length > 0 ? (
        categories.map((cat) => {
          return (
            <span className="" key={cat.id}>
              <button onClick={handleClick} value={"?categorie.id=" + cat.id}>
                {cat.nom}
              </button>
            </span>
          );
        })
      ) : (
        <span>No cats</span>
      )}

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
