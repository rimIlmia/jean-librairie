import { combineReducers } from "redux";

import auth from "./authStore";
import books from "./bookStore";
import categories from "./categorieStore";

const creatRootReducer = combineReducers({
  //add imported reducer
  auth,
  books,
  categories,
});

export default creatRootReducer;
