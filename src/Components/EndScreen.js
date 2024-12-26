import React, { Component } from 'react';
import styles from '../assets/StartScreen.module.css';
import { Link } from 'react-router-dom';

class EndScreen extends Component {

  render(){
    return (
      <div className={styles.startPage}>
        <div className={styles.css_typing}>
          <p>
            Juego terminado!
          </p>
        </div>
        <div className={styles.test}>
          <p>Tienes un score de {window.sessionStorage.getItem("currentScore")}.</p>
        </div>
        <div className={styles.test}>
          <p> Tu máximo score es de {window.sessionStorage.getItem("highScore")}. </p>
        </div>
        <Link to="/" className={styles.fe_pulse}> JUGAR DE NUEVO </Link>
      </div>
    )
  } 
}

export default EndScreen;