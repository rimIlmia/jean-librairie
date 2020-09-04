import React, { useState } from "react";
import api from "../utils/api";
import "../../sass/register.css";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [nom, setNom] = useState("");
  const [dateN, setDateN] = useState();
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const body = {
      nom,
      prenom,
      date_naissance: dateN,
      email,
      password,
      passConfirm,
    };

    api
      .post("auth/local/register", body)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className=" container d-flex justify-content-center align-items-center ">
      <form onSubmit={handleSubmit} className="col-md-6 col-sm-12">
        <h2 className="py-2 text-center color-violet font-weight-bold ">
          Inscription
        </h2>
        <div className="form-group">
          <label>Nom</label>
          <input
            className="form-control"
            type="text"
            onChange={(ev) => setNom(ev.target.value)}
            name="nom"
            value={nom}
            required
          />
        </div>
        <div className="form-group">
          <label>Prénom</label>
          <input
            className="form-control"
            type="text"
            onChange={(ev) => setPrenom(ev.target.value)}
            name="prenom"
            value={prenom}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de naissance</label>
          <input
            className="form-control"
            type="date"
            onChange={(ev) => setDateN(ev.target.value)}
            name="date_naissance"
            value={dateN}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
            name="email"
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            className="form-control"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            minLength="8"
            name="password"
            value={password}
            required
          />
        </div>
        <div className="">
          <label>Confirmation </label>
          <input
            type="password"
            className="form-control"
            onChange={(ev) => setPassConfirm(ev.target.value)}
            minLength="8"
            name="passConfirm"
            value={passConfirm}
            required
          />
        </div>
        <button
          className="btn  control-form btn-block my-3 btn-violet font-weight-bold"
          type="submit"
        >
          S'inscrire
        </button>
        <br />
        {message && <span>{message}</span>}
      </form>
    </div>
  );
};

export default Register;
