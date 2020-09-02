import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken } from '../utils/local-storage';

const Header = () => {

    const dispatch = useDispatch()
    const userIslogged = useSelector(state => state.auth.user.isLogged)
    const user = useSelector(state => state.auth.user.detail)


    return (
        <header>
            <nav>
                <ul>
                    {
                        userIslogged ?
                            (
                                <li>
                                    <div className="userIntro">
                                        <p>{user.prenom} {user.nom}</p>

                                    </div>
                                    <span>{user.email}</span>
                                    <button onClick={() => { dispatch({type: "CLEAR_USER"}); clearToken() }}>Logout</button>
                                </li>
                            ) :
                            (
                                <li>
                                    <Link to="/login">Connexion</Link>
                                </li>
                            )
                    }
                    { !userIslogged &&
                    <li>
                        <Link to="/register">Inscription</Link>
                    </li>}
                </ul>
            </nav>
        </header>    
    )
}

export default Header;