import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../utils/local-storage";
import "../../sass/header.css";

const Header = () => {
  const dispatch = useDispatch();
  const userIslogged = useSelector((state) => state.auth.user.isLogged);
  const user = useSelector((state) => state.auth.user.detail);

  return (
    <header>
      <nav>
        <ul>
          {userIslogged ? (
            <li className="li-cnx">
              <div className="userIntro">
                <span>
                  {user.prenom} {user.nom}
                </span>
                <span
                  className="btn"
                  onClick={() => {
                    dispatch({ type: "CLEAR_USER" });
                    clearToken();
                  }}
                >
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </div>
            </li>
          ) : (
            <li className="li-cnx">
              <Link
                to="/login"
                className="color-violet font-weight-bold txt-souligne"
              >
                Se connecter
              </Link>
            </li>
          )}
          {!userIslogged && (
            <li className="btn btn-violet btn-shadow li-cnx">
              <Link to="/register" className="color-white myLink">
                Créer un compte
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
