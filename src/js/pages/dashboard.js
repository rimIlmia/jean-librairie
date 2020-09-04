import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  useHistory,
} from "react-router-dom";
import RouteGuard from "../component/routeGuard";
import { getBooks, getBorrowedBooks, borrowBook } from "../store/bookStore";
import DashboardHome from "../component/dashboardHome/index";
import Calendar from "../component/calendar";
import Browse from "../component/browse";
import "../../sass/dash.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.detail.id);
  const booksLoad = useSelector((state) => state.books.allBooks.isLoading);
  const borrowedBooksLoad = useSelector(
    (state) => state.books.borrowedBooks.isLoading
  );
  const books = useSelector((state) => state.books.allBooks.books);
  const booksBorrowed = useSelector((state) => state.books.borrowedBooks.books);

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getBorrowedBooks());
  }, [borrowedBooksLoad]);

  return (
    <Router>
      <div>
        <nav className="">
          <ul className="vnav ">
            <li className="m-4">
              <NavLink
                exact
                to="/dashboard/"
                activeClassName="btn-vnav p-2"
                className="link-vnav"
              >
                <i class="fas fa-home mr-2"></i>Home
              </NavLink>
            </li>
            <li className="m-4">
              <NavLink
                to="/dashboard/browse/"
                activeClassName="btn-vnav p-2"
                className="link-vnav"
              >
                <i class="fas fa-search mr-2"></i>
                Browse
              </NavLink>
            </li>
            <li className="m-4">
              <NavLink
                to="/dashboard/calendar/"
                activeClassName="btn-vnav p-2"
                className="link-vnav"
              >
                <i class="fas fa-calendar mr-2"></i>
                Calendar
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <RouteGuard path="/dashboard/browse/" component={Browse} />
        <RouteGuard path="/dashboard/calendar/" component={Calendar} />
        <RouteGuard path="/dashboard/" component={DashboardHome} />
      </Switch>
    </Router>
  );
};

export default Dashboard;
