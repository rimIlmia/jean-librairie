import { combineReducers } from "redux";
import api from '../utils/api';

export const getFunctions = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_FUNCTIONS' });

        return api
            .get('/fonctionalites')
            .then(res=> dispatch({ type: 'SET_FUNCTIONS', payload: res.data }))
            .catch(error => {
                throw error;
            })
    }
}

const defaultAllFunctions = {
    isLoading: false,
    functions: []
}

const allFunctions = (state = defaultAllFunctions, action) => {
    const allFunctionsAction = {
        "SET_FUNCTIONS": { isLoading: true, functions: action.payload },
        "CLEAR_FUNCTIONS": defaultAllFunctions
    }
    return allFunctionsAction[action.type] || state;
}


const functionsFunction = (state = false, action) => {
    const functionsFuntionAction = {
        "FETCH_FUNCTIONS": true
    }
    return functionsFuntionAction[action.type] || state;
}

const functions = combineReducers({
    allFunctions,
    functionsFunction
});

export default functions;