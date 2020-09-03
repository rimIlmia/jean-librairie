import { combineReducers } from "redux";
import api from "../utils/api";
export const getBooks = (filter) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_BOOKS" });
    return api
      .get(`/livres${filter ? filter : ""}`)
      .then((response) => {
        const books = response.data;
        if (books) {
          dispatch({ type: "SET_BOOKS", payload: books });
        }
      })
      .catch((error) => {
        throw error;
      });
  };
};

const allBooks = (state = null, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.payload;
    case "CLEAR_BOOKS":
      return null;
    default:
      return state;
  }
};
const isLoading = (state = false, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return true;
    case "SET_BOOKS":
      return false;
    default:
      return state;
  }
};

const selectedBook = (state = null, action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.payload;
    case "CLEAR_BOOK":
      return null;
    default:
      return state;
  }
};

const books = combineReducers({
  allBooks,
  isLoading,
  selectedBook,
});

export default books;
