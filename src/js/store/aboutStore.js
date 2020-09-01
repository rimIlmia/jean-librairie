import { combineReducers } from "redux";
import api from '../utils/api';

export const getActivity = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_ACTIVITY' });

        return api
            .get('fonctionalites')
            .then(res=> {
                console.log(res);
                dispatch({ type: 'SET_ACTIVITY', payload: res.data })
            })
            .catch(error => {
                throw error;
            })
    }
}

const defaultAllActivity = {
    isLoading: false,
    functions: []
}

const allActivity = (state = defaultAllActivity, action) => {
    const allActivityAction = {
        "SET_ACTIVITY": { isLoading: true, activity: action.payload },
        "CLEAR_FUNCTIONS": defaultAllActivity
    }
    return allActivityAction[action.type] || state;
}


const activityFunction = (state = false, action) => {
    const activityFuntionAction = {
        "FETCH_ACTIVITY": true
    }
    return activityFuntionAction[action.type] || state;
}

const activity = combineReducers({
    allActivity,
    activityFunction
});

export default activity;