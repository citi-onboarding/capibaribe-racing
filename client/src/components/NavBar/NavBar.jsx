import React, { useState } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";


import styles from "./navBar.module.css";

function NavBar() {
  const [menu, setMenu] = useState(true);
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <header className="fontNavbar" id={styles.Navbar}>
        <nav className={`container ${styles.Menu}`}>
          <div className={styles.LogoNav}>
            <img src={logoCapibaNavbar} alt="Logo Capiba"/>
          </div>

          <ul className={styles.NavBarList}>
            <li><a href="#banner">Sobre nós</a></li>
            <li><a href="#infoCarAndSae">Nosso Carro</a></li>
            <li><a href="#infoCarAndSae">Fórmula SAE</a></li>
            <li><a href="#">Patrocinadores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          <input type="checkbox" className={styles.checkMode} id="check"/>
          <div className={styles.Bars} onClick={() => setMenu(!menu)}>
            {menu ?
            (<label htmlFor={styles.check}><img src={Sair} alt="Sair" /></label>)
            :
            (<label htmlFor={styles.check}><img src={MenuHamb} alt="Hamburguer Menu" /></label>)}
          </div>
        </nav>
        {menu ? null :
        (<nav className={styles.MenuResponsive}>

          <ul className={styles.MenuResponsiveList}>
            <li><a onClick={() => setMenu(!menu)} href="#banner">Sobre nós</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#infoCarAndSae">Nosso Carro</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#infoCarAndSae">Fórmula SAE</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Patrocinadores</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Contato</a></li>
          </ul>
        </nav>)}
    </header>
  );
}

export default NavBar;
