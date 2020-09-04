import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getStorageToken } from "../utils/local-storage";

const RouteGuard = ({ component: Component }) => {
    const logged = useSelector(state => state.auth.user.isLogged);


    return(
        <Route>
            {
            logged || getStorageToken()
            ? <Component />
            : <Redirect to='/login' />
            }
        </Route>
    )
}

export default RouteGuard;