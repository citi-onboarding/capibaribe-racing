import { useState, useEffect } from 'react';
import apiAxios from '../../services/api-axios.js';

import styles from "./aboutCarAndSae.module.css";

function AboutInfo() {
  const [menu, setMenu] = useState(true);

  const [aboutcar, setAboutCar] = useState([]);
  const [formulasae, setAboutFormulaSae] = useState([]);

  const loadAboutCar = async () => {
    const res = await apiAxios.get("about-car");
    setAboutCar(res.data);
    /*console.log(res);*/
  };

  const loadAboutFormulaSae = async () => {
    const res = await apiAxios.get("about-formula-sae");
    setAboutFormulaSae(res.data);
    console.log(res);
  };

  useEffect(() => {
    loadAboutCar();
    loadAboutFormulaSae();
  }, []);

  return (
    <section className="container" id={styles.aboutInfo}>
        <header id={styles.navBar}>
            <div className={styles.navContent} id={styles.headerContainer}>
                <nav>
                    <ul className={styles.NavbarAbout}>
                        <li>
                            <a href='#' onClick={() => setMenu(true)} className="fontTitleSection">
                                <h3>NOSSO CARRO</h3>
                            </a>
                        </li>
                        <li>
                            <a href='#' onClick={() => setMenu(false)} className="fontTitleSection">
                                <h3>FÓRMULA SAE</h3>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


        {menu ?
        (<div className={styles.gridSectionAboutInfoContent}>
            <div className={styles.articleAboutInfo}>
                <h2 className="fontTitleSection" id={styles.underline}>NOSSO CARRO</h2>
                <p className="fontDescription">
                  {aboutcar.map((d) => d.description)}
                </p>
            </div>
        </div>)
        :
        (<div className={styles.gridSectionAboutInfoContent}>
            <div className={styles.articleAboutInfo}>
                  <h2 className="fontTitleSection" id={styles.underline}>Fórmula SAE</h2>
                  <p className="fontDescription">
                    {formulasae.map((d) => d.description)}
                  </p>
              </div>
          </div>)};
    </section>
    );
}

export default AboutInfo;
