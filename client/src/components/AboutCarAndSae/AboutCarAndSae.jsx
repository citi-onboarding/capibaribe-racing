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
    console.log(res.data);
  };

  const loadAboutFormulaSae = async () => {
    const res = await apiAxios.get("about-formula-sae");
    setAboutFormulaSae(res.data);
    console.log(res.data[0].image);
  };

  useEffect(() => {
    loadAboutCar();
    loadAboutFormulaSae();
  }, []);

  return (
    <section className="container" id={styles.aboutInfo}>
      <div className={styles.BackgroundSection} style={{ backgroundImage: `url(${menu ? (aboutcar.map((d) => d.image.secure_url)) : (formulasae.map((d) => d.image.secure_url)) })` }}></div>
      <div className={styles.navContent}>
          <nav className={styles.NavbarAbout}>
              <ul className={styles.NavbarList}>
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

      {menu ?
      (<div className={styles.gridSectionAboutInfoContent}>
          <div/>
          <div className={styles.articleAboutInfo}>
              <h2 className="fontTitleSection" id={styles.underline}>NOSSO CARRO</h2>
              <p className="fontDescription">
                {aboutcar.map((d) => d.description)}
              </p>
          </div>
      </div>)
      :
      (<div className={styles.gridSectionAboutInfoContent}>
          <div/>
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