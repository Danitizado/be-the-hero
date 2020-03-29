import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import './styles.css'

import api from '../../Services/api'

export default function Login () {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();
        
        try {
            const res = await api.post('sessions', { id });

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', res.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha ao entrar, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">

                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/signup">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}