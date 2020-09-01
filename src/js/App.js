import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Nav from './component/nav';
import RouteGuard from './component/routeGuard';
import Home from './pages/home';
import About from './pages/about';
import Register from './pages/register';
import Login from './pages/login';
import Protected from './pages/protected';

import api, { addAuth } from './utils/api';
import { getStorageToken, clearToken } from './utils/local-storage';
import { getBooks } from './store/bookStore';
import { getActivity } from './store/aboutStore';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getStorageToken() && addAuth(getStorageToken()) && api.get('users/me')
            .then(res => {
                console.log(res.data)
                dispatch({type: 'SET_USER', payload: res.data})
            } )
            .catch(err => {
                dispatch({type: 'SET_USER_LOGGED', payload: false});
                clearToken();
            })
        dispatch(getActivity());
        dispatch(getBooks());

    }, [])

    return (
        <Router>
            <Nav />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/register">
					    <Register />
				    </Route>
                    <Route path="/login">
					    <Login />
				    </Route>
                    <RouteGuard path="/protected" component={Protected}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;