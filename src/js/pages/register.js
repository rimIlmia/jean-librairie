import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

const Register = () => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [nom, setNom] = useState('');
    const [dateN, setDateN] = useState();
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');


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
            passConfirm
        }

        api.post('auth/local/register', body)
        .then(response => {
            setMessage("Great! you can login now, redirect...");
            const waitRedirect = setTimeout(() => {
                history.push('/login');
            }, 3000);
        })
        .catch(err => {
            setMessage(err.response.data.message);
        })
        .finally(() => setIsLoading(false) )
    }    

    return(
        <form onSubmit={handleSubmit} >
        <div className="">
            <label>Nom</label>
            <input type="text" onChange={(ev)=> setNom(ev.target.value)} name='nom' value={nom} required />
        </div>
        <div className="">
            <label>Prenom</label>
            <input type="text" onChange={(ev)=> setPrenom(ev.target.value)} name='prenom' value={prenom} required />
        </div>
        <div className="">
            <label>Date de nassance</label>
            <input type="date" onChange={(ev)=> setDateN(ev.target.value)} name='date_naissance' value={dateN} required />
        </div>
        <div className="">
            <label>Email</label>
            <input type="email" onChange={(ev)=> setEmail(ev.target.value)} name='email' value={email} required />
        </div>
        <div className="">
            <label>Password</label>
            <input type="password" onChange={(ev)=> setPassword(ev.target.value)} minLength="8" name='password' value={password} required />
        </div>
        <div className="">
            <label>Confirm Password</label>
            <input type="password" onChange={(ev)=> setPassConfirm(ev.target.value)} minLength="8" name='passConfirm' value={passConfirm} required />
        </div>
        <button type="submit">S'enregistrer</button><br />
        {message && <span>{message}</span>}
        </form>
    )
}

export default Register;