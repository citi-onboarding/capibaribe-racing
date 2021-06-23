import React, { useState } from "react";
import styles from "./Contacts.module.css";
import apiAxios from "../../services/api-axios.js";

function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [assunto, setTopic] = useState('');
  const [message, setMessage] = useState('');



  return(
    <div className = {styles.background} id = {styles.background}>

      <div className = 'container, backGroundBordo'>

        <div className = {styles.title}>
          <h2>CONTATO</h2>
        </div>

        <div className = {styles.subTitle}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>

        <div className = {styles.inputItems}>
          <div className = {styles.nameConteiner}>
            <p>Nome</p>
            <input
               name="name"
               placeholder="Nome"
               onChange={(e) => { setName(e.target.value);}}
            />
          </div>

          <div className = {styles.emailConteiner}>
            <p>E-mail</p>
            <input
               name="email"
               placeholder="E-mail"
               onChange={(e) => { setEmail(e.target.value);}}
            />
          </div>

          <div className = {styles.phoneConteiner}>
            <p>Telefone</p>
            <input
               name="phone"
               placeholder="Telefone"
               onChange={(e) => { setPhone(e.target.value);}}
            />
          </div>

          <div className = {styles.topicConteiner}>
            <p>Assunto</p>
            <input
              name="topic"
              placeholder="Assunto"
              onChange={(e) => { setTopic(e.target.value);}}
            />
          </div>

          <div className = {styles.massageConteiner}>
            <p>Mensagem</p>
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

      </div>

    </div>
  );
}

export default Contact;



