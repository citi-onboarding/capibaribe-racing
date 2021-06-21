import React, { useState } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";


import styles from "./navBar.module.css";

function NavBar() {
  const [icon, setIcon] = useState(true);

  return (
    <header className="fontNavbar container" id={styles.Navbar}>
      <div className={styles.connect}>

        <div className={styles.LogoNav}>
          <img src={logoCapibaNavbar} alt="Logo Capiba"/>
        </div>

        <nav className={styles.Menu}>
          <div className={styles.MenuMobile}>
            <img src={MenuHamb} alt="Hamburguer Menu" />
          </div>

          <ul className={styles.NavBarList}>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Nosso Carro</a></li>
            <li><a href="#">Fórmula SAE</a></li>
            <li><a href="#">Patrocinadores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default NavBar;
