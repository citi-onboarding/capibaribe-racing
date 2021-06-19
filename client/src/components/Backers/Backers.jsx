import { useState, useEffect } from 'react';
import styles from "./backers.module.css";

import apiAxios from '../../services/api-axios.js';

function Backers () {
    const [backers, setBackers] = useState([]);

    const loadBackers = async () => {
      const res = await apiAxios.get("backers");
      setBackers(res.data);
      console.log(res);
    };

    useEffect(() => {
      loadBackers();
    }, []);

    return (
      <section className="fontDescription container" id={styles.BackersSection}>
        <header>
          <h2>Patrocinadores</h2>
        </header>

        <article className="backGroundBordo">
          <h2>Nos Apoie</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,
          </p>
        </article>


      </section>

    );
};

export default Backers;
