import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./component/header";
import RouteGuard from "./component/routeGuard";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import api, { addAuth } from "./utils/api";
import { getStorageToken, clearToken } from "./utils/local-storage";
import { getBooks } from "./store/bookStore";
import Browse from "./component/browse";

const App = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.user.isLogged);

  useEffect(() => {
    getStorageToken() &&
      addAuth(getStorageToken()) &&
      api
        .get("users/me")
        .then((res) => {
          console.log(res.data);
          dispatch({ type: "SET_USER", payload: res.data });
          dispatch({ type: "SET_USER_LOGGED", payload: true });
        })
        .catch((err) => {
          dispatch({ type: "SET_USER_LOGGED", payload: false });
          clearToken();
        });
  }, []);

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            {logged ? <Redirect to="/dashboard/mybooks/" /> : <Home />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <RouteGuard path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
