import { useState, useEffect } from 'react';
import apiAxios from '../../services/api-axios.js';

import styles from "./aboutCar.module.css";

function AboutCar() {
  const [menu, setMenu] = useState(false);

  const [aboutcar, setAboutCar] = useState([]);

  const loadAboutCar = async () => {
    const res = await apiAxios.get(`about-cars`);
    setAboutCar(res.data);
  };

  useEffect(() => {
    loadAboutCar();
  }, []);

  return (
    <section className="container" id={styles.aboutCar}>
        <header id={styles.navBar}>
            <div className={styles.navContent} id={styles.headerContainer}>
                <nav>
                    <ul className={styles.NavbarAboutCar}>
                        <li>
                            <h3 onclick={() => setMenu(false)} className="fontTitleSection">
                                NOSSO CARRO
                            </h3>
                        </li>
                        <li>
                            <h3 onclick={() => setMenu(false)} className="fontTitleSection">
                                FÓRMULA SAE
                            </h3>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


        {menu ?
        (<div className={styles.gridSectionAboutCarContent}>
            <div></div>
            <div className={styles.articleAboutCar}>
                <h2 className="fontTitleSection" id={styles.underline}>NOSSO CARRO</h2>
                <p className="fontDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                </p>
            </div>
        </div>)
        :
        (<div className={styles.gridSectionAboutCarContent}>
        <div></div>
        <div className={styles.articleAboutCar}>
              <h2 className="fontTitleSection" id={styles.underline}>Fórmula SAE</h2>
              <p className="fontDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                </p>
          </div>
          </div>)};
    </section>

    );
}

export default AboutCar;
