import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>

        <form className="">
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>
          <a href="/register">
          <FiLogIn size={16} color="#e02041" />
          Não tenho cadastro
          </a>
        </form>

        
      </section>

      <img src={heroesImg} alt="heroes"/>
    </div>
  );
}