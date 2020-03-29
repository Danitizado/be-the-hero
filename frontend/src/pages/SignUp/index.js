import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css';

import api from '../../Services/api'

export default function SignUp () {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [wpp , setWpp] = useState('');
    const [city , setCity] = useState('');
    const [uf , setUf] = useState('');
    
    const history = useHistory();
    
    async function handleSignUp (e) {

        e.preventDefault();

        const data = {
            name,
            email,
            wpp,
            city,
            uf
        }

        try {
            const res = await api.post('ngos', data);

            alert(`Seu ID de acesso é ${res.data.id}`)
            history.push('/');
        } catch (erro) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div className="signup-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Nova Conta</h1>
                    <p>Crie sua conta, e ajuda as pessoas encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleSignUp} >
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="WhatsApp"
                    value={wpp}
                    onChange={e => setWpp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="UF" 
                        style={{ width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit" >
                        Criar Conta
                    </button>
                </form>
            </div>
        </div>
    );
}