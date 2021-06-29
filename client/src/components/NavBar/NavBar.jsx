import React, { useState, useEffect  } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";
import apiAxios from '../../services/api-axios.js';

import styles from "./navBar.module.css";

function NavBar( {menu, setMenu} ) {
  const [menuNav, setMenuNav] = useState(true);
  const [conteudos, setConteudos] = useState([]);

  const [menuElementColor, setMenuElementColor] = useState(true);

  const loadConteudos = async () => {
    const res = await apiAxios.get("aboutUs");
    setConteudos(res.data);
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
              <a href="#"><img src={logoCapibaNavbar} alt="Logo Capiba"/></a>
            </div>

            <ul className={styles.NavBarList}>
              <li><a href="#banner">Sobre nós</a></li>
              <li onClick={() => {setMenu(true)}}><a href="#infoCarAndSae">Nosso Carro</a></li>
              <li onClick={() => {setMenu(false)}}><a href="#infoCarAndSae">Fórmula SAE</a></li>
              <li><a href="#Sponsors">Patrocinadores</a></li>
              <li><a href="#SectionContact">Contato</a></li>
            </ul>

            <div className={styles.Bars} onClick={() => setMenuNav(!menuNav)}>
              {menuNav ?
              (<label htmlFor="check"><img src={Sair} alt="Sair" /></label>)
              :
              (<label htmlFor="check"><img src={MenuHamb} alt="Hamburguer Menu" /></label>)}
            </div>
          </nav>
          {menuNav ? null :
          (<nav className={styles.MenuResponsive}>

            <ul className={styles.MenuResponsiveList} onClick={() => document.getElementById("check").checked = false}>
              <li onClick={() => setMenuNav(!menuNav)}><a href="#banner">Sobre nós</a></li>
              <li onClick={() => {setMenuNav(!menuNav); setMenu(true)}}><a href="#infoCarAndSae">Nosso Carro</a></li>
              <li onClick={() => {setMenuNav(!menuNav); setMenu(false)}}><a href="#infoCarAndSae">Fórmula SAE</a></li>
              <li onClick={() => setMenuNav(!menuNav)}><a href="#Sponsors">Patrocinadores</a></li>
              <li onClick={() => setMenuNav(!menuNav)}><a href="#SectionContact">Contato</a></li>
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
