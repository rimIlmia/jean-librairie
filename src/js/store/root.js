import { combineReducers } from "redux";
import categories from "./categorieStore";
import auth from './authStore';
import activity from './aboutStore';
import books from './bookStore';

const creatRootReducer = combineReducers({
  //add imported reducer
  auth,
  activity,
  books,
  categories,
});

export default creatRootReducer;
