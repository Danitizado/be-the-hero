import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../Services/api'

export default function Profile() {
    const [incidents, setIncidents] = useState([])
    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', 
        {
            headers: {
                Authorization: ngoId
            }
        }).then(res => {
            setIncidents(res.data)
        })
    }, [ngoId]);

    async function handleDeleteInci (id) {
        try {
            await api.delete(`incidents/${id}`, 
            {
                headers: {
                    Authorization: ngoId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('O caso não foi deletado, tente novamente.')
        }
    }

    function handleLogOut () {
        localStorage.clear();

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />

                <span>Bem-vinda, {ngoName}</span>
                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size="18" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map( inci => (
                    <li key={inci.id}>
                    <strong>CASO:</strong>
                    <p>{inci.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{inci.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inci.value)}</p>

                    <button onClick={() => handleDeleteInci(inci.id)} type="button">
                        <FiTrash2 size={24} />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}
