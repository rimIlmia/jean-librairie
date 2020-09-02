import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useHistory
} from "react-router-dom";
import RouteGuard from "../component/routeGuard";
import { getBooks, getBorrowedBooks, borrowBook } from '../store/bookStore';
import DashboardHome from "../component/dashboardHome/index";
import Calendar from "../component/calendar";
import Browse from "../component/browse";


const Dashboard = () => {

    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.user.detail.id);
    const booksLoad = useSelector(state => state.books.allBooks.isLoading);
    const borrowedBooksLoad = useSelector(state => state.books.borrowedBooks.isLoading);
    const books = useSelector(state => state.books.allBooks.books);
    const booksBorrowed = useSelector(state => state.books.borrowedBooks.books);

    useEffect(() => {
        dispatch(getBooks())
        dispatch(getBorrowedBooks())   
    }, [borrowedBooksLoad])


    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/browse/">Browse</Link>
              </li>
              <li>
                <Link to="/dashboard/calendar/">Calendar</Link>
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
}

export default Dashboard;