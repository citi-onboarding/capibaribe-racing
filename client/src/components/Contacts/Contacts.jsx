import React, { useState } from "react";
import apiAxios from '../../services/api-axios';
import styles from "./Contacts.module.css";

function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    try {
      e.preventDefault();

      await apiAxios.post('sendEmail', {name, email, phone, topic, message})
      alert("Mensagem enviado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Houve um erro. Tente novamente.")
    }
  }


  return(
    <div className={styles.background} id={styles.background}>

      <section id={styles.contact} className="container backGroundBordo">

        <div className={styles.title}>
          <h2>CONTATO</h2>
        </div>

        <div className={styles.subTitle}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>

        <form className={styles.contactList} onSubmit={sendEmail}>

          <div className={styles.contactLeft}>

            <div className={styles.nameContainer}>
              <p className={styles.p}>Nome</p>
              <input
                name="name"
                required
                value={name}
                onChange={(e) => { setName(e.target.value); }}
              />
            </div>

            <div className={styles.emailContainer}>
              <p className={styles.p}>E-mail</p>
              <input
                name="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value);}}
              />
            </div>

            <div className={styles.phoneContainer}>
              <p className={styles.p}>Telefone</p>
              <input
                name="phone"
                minLength="10"
                pattern="[ 0-9\(\)-]{10,16}$"
                value={phone}
                onChange={(e) => { setPhone(e.target.value);}}
              />
            </div>

            <div className={styles.topicContainer}>
              <p className={styles.p}>Assunto</p>
              <input
                name="topic"
                width="200px"
                value={topic}
                onChange={(e) => { setTopic(e.target.value);}}
              />
            </div>
          </div>

          <div className={styles.contactRight}>
            <div className={styles.messageContainer}>
              <p className={styles.p}>Mensagem</p>
              <textarea
              name="message"
              cols="30"
              rows="7"
              required
              value={message}
              onChange={(e) => { setMessage(e.target.value);}}/>
            </div>

            <div className={styles.sentContainer}>
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>

      </section>

    </div>
  );
}

export default Contact;
