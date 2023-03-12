import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
export const Contato = () => {
  return (
    <section className={`${styles.Contato} animeLeft`}>
      <Head title="Loja Virtual | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>leandrorosa592@gmail.com</li>
          <li>(21)99840-4833</li>
          <li>Avenida dos Cearenses, 693</li>
        </ul>
      </div>
    </section>
  );
};
