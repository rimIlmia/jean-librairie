import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect,
    useHistory
} from "react-router-dom";
import RouteGuard from "../../component/routeGuard";
import Historybook from './components/history';
import Profil from "./components/profil"
import Borrowed from './components/boworred'
import { getBooks, getBorrowedBooks, borrowBook } from '../../store/bookStore';

const DashboardHome = () => {

    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/dashboard/mybooks/">Boworred books</Link>
                </li>
                <li>
                    <Link to="/dashboard/history/">History books</Link>
                </li>
                <li>
                    <Link to="/dashboard/profil/">Profil</Link>
                </li>
            </ul>
            </nav>
        </div>
        <Switch>
            <Route exact path="/dashboard">
                <Redirect to="/dashboard/mybooks/" />
            </Route>
            <RouteGuard path="/dashboard/profil/" component={Profil} />
            <RouteGuard path="/dashboard/history/" component={Historybook} />
            <RouteGuard path="/dashboard/mybooks/" component={Borrowed} />
        </Switch>
      </Router>
    );
}

export default DashboardHome;