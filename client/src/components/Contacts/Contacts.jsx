import React, { useState } from "react";

import '../global.css';
import styles from './Contact.module.css';

function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [assunto, setTopic] = useState('');
  const [message, setMessage] = useState('');

  return(
    <section id = "contact-section">
      <fieldset>

        <div className = {styles.title}>
          <h2>CONTATO</h2>
        </div>

        <div className = {styles.inputItems}>
          <div className = {styles.nameConteiner}>
            <input
               name="name"
               placeholder="Nome"
               onChange={(e) => { setName(e.target.value);}}
            />
          </div>

          <div className = {styles.emailConteiner}>
            <input
               name="email"
               placeholder="E-mail"
               onChange={(e) => { setEmail(e.target.value);}}
            />
          </div>

          <div className = {styles.phoneConteiner}>
            <input
               name="phone"
               placeholder="Phone"
               onChange={(e) => { setPhone(e.target.value);}}
            />
          </div>

          <div className = {styles.topicConteiner}>
            <input
              name="topic"
              placeholder="Assunto"
              onChange={(e) => { setTopic(e.target.value);}}
            />
          </div>

          <div className = {styles.massageConteiner}>
            <input
              name="massage"
              placeholder="Mensagem"
              onChange={(e) => { setMessage(e.target.value);}}
            />
          </div>

          <div className={styles.sentContainer}>
            <button type="button">Enviar</button>
          </div>

        </div>
      </fieldset>
    </section>
  );
}

export default Contact;



