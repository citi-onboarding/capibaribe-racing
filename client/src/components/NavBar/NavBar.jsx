import React, { useState, useEffect  } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";
import apiAxios from '../../services/api-axios.js';

import styles from "./navBar.module.css";

function NavBar() {
  const [menu, setMenu] = useState(true);
  const [conteudos, setConteudos] = useState([]);

  const loadConteudos = async () => {
    const res = await apiAxios.get("aboutUs");
    setConteudos(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadConteudos();
  }, []);

  return (
    <div>
      <input type="checkbox" className={styles.checkMode} id="check"/>
      <header className="fontNavbar" id={styles.Navbar}>
          <nav className={`container ${styles.Menu}`}>
            <div className={styles.LogoNav}>
              <img src={logoCapibaNavbar} alt="Logo Capiba"/>
            </div>

            <ul className={styles.NavBarList}>
              <li><a href="#banner">Sobre nós</a></li>
              <li><a href="#infoCarAndSae">Nosso Carro</a></li>
              <li><a href="#infoCarAndSae">Fórmula SAE</a></li>
              <li><a href="#Sponsors">Patrocinadores</a></li>
              <li><a href="#SectionContact">Contato</a></li>
            </ul>

            <div className={styles.Bars} onClick={() => setMenu(!menu)}>
              {menu ?
              (<label htmlFor="check"><img src={Sair} alt="Sair" /></label>)
              :
              (<label htmlFor="check"><img src={MenuHamb} alt="Hamburguer Menu" /></label>)}
            </div>
          </nav>
          {menu ? null :
          (<nav className={styles.MenuResponsive}>

            <ul className={styles.MenuResponsiveList}>
              <li><a onClick={() => setMenu(!menu)} href="#banner">Sobre nós</a></li>
              <li><a onClick={() => setMenu(!menu)} href="#infoCarAndSae">Nosso Carro</a></li>
              <li><a onClick={() => setMenu(!menu)} href="#infoCarAndSae">Fórmula SAE</a></li>
              <li><a onClick={() => setMenu(!menu)} href="#Sponsors">Patrocinadores</a></li>
              <li><a onClick={() => setMenu(!menu)} href="#SectionContact">Contato</a></li>
            </ul>

            <div className={styles.MoreContent}>
              <a href={conteudos.map((d) => d.content)} target="_blank">NOSSOS CONTEÚDOS</a>
            </div>
          </nav>)}
      </header>
    </div>
  );
}

export default NavBar;
