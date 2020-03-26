import React, {useState} from 'react';

import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import './styles.css';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'


export default function NewIncident() {

  const history = useHistory()
  const ongId = localStorage.getItem('ongId')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const data = {
    title, description, value
  }

  async function handleNewIncident(e) {
    e.preventDefault()

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be the hero logo"/>
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para home
        </Link>
      </section>

      <form onSubmit={handleNewIncident}>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Título do caso"/>
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="descricao"/>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Valor em reais"/>

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
  );
}
