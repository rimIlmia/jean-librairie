import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import RouteGuard from "../../component/routeGuard";
import Historybook from "./components/history";
import Profil from "./components/profil";
import Borrowed from "./components/borrowed";
import "../../../sass/indexdash.css";
import { getBooks, getBorrowedBooks, borrowBook } from "../../store/bookStore";

const DashboardHome = () => {
  return (
    <Router>
      <div className="container">
        <p className="text-center"> Here, you can found your dashboard ^_^</p>
        <nav className="d-flex justify-content-center">
          <ul className="border border-rounded  row p-3">
            <li>
              <NavLink
                to="/dashboard/mybooks/"
                activeClassName="btn-hnav"
                className="link-hnav py-2 px-4"
              >
                Boworred books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/history/"
                activeClassName="btn-hnav"
                className="link-hnav py-2 px-4"
              >
                History books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profil/"
                activeClassName="btn-hnav"
                className="link-hnav py-2 px-4"
              >
                Profil
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/dashboard" exact activeClassName="">
          <Redirect to="/dashboard/mybooks/" />
        </Route>
        <RouteGuard path="/dashboard/profil/" component={Profil} />
        <RouteGuard path="/dashboard/history/" component={Historybook} />
        <RouteGuard path="/dashboard/mybooks/" component={Borrowed} />
      </Switch>
    </Router>
  );
};

export default DashboardHome;
