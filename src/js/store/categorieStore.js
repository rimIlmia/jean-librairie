import { combineReducers } from "redux";
import api from "../utils/api";

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIES" });
    return api
      .get(`/categories`)
      .then((response) => {
        const categories = response.data;
        if (categories) {
          dispatch({ type: "SET_CATEGORIES", payload: categories });
        }
      })
      .catch((error) => {
        throw error;
      });
  };
};

const collection = (state = null, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    case "CLEAR_CATEGORIES":
      return null;
    default:
      return state;
  }
};
const isLoading = (state = false, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return true;
    case "SET_CATEGORIES":
      return false;
    default:
      return state;
  }
};

const categories = combineReducers({
  collection,
  isLoading,
});

export default categories;
