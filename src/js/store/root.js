import { combineReducers } from 'redux';

import auth from './authStore';
import about from './aboutStore';
import books from './bookStore';

const creatRootReducer = combineReducers({
    //add imported reducer
    auth,
    about,
    books
});

export default creatRootReducer;