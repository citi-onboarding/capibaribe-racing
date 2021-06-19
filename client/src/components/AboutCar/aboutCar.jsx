import { useState, useEffect } from 'react';
import apiAxios from '../../services/api-axios.js';

import styles from "./aboutCar.module.css";

function AboutCar() {
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
    <section className="container" id={styles.aboutCar}>
        <header id={styles.navBar}>
            <div className={styles.navContent} id={styles.headerContainer}>
                <nav>
                    <ul className={styles.NavbarAboutCar}>
                        <li>
                            <h3 onClick={() => setMenu(true)} className="fontTitleSection">
                                NOSSO CARRO
                            </h3>
                        </li>
                        <li>
                            <h3 onClick={() => setMenu(false)} className="fontTitleSection">
                                FÓRMULA SAE
                            </h3>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


        {menu ?
        (<div className={styles.gridSectionAboutCarContent}>
            <div>
              <img src={aboutcar.map((d) => d.image.secure_url)} alt="" />
            </div>
            <div className={styles.articleAboutCar}>
                <h2 className="fontTitleSection" id={styles.underline}>NOSSO CARRO</h2>
                <p className="fontDescription">
                  {aboutcar.map((d) => d.description)}
                </p>
            </div>
        </div>)
        :
        (<div className={styles.gridSectionAboutCarContent}>
        <div>
          <img src={formulasae.map((d) => d.image.secure_url)} alt="" />
        </div>
        <div className={styles.articleAboutCar}>
              <h2 className="fontTitleSection" id={styles.underline}>Fórmula SAE</h2>
              <p className="fontDescription">
                {formulasae.map((d) => d.description)}
              </p>
          </div>
          </div>)};
    </section>
    );
}

export default AboutCar;
