import React, { useState } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";


import styles from "./navBar.module.css";

function NavBar() {
  const [menu, setMenu] = useState(true);

  return (
    <header className="fontNavbar container" id={styles.Navbar}>
      <div className={styles.connect}>

        <div className={styles.LogoNav}>
          <img src={logoCapibaNavbar} alt="Logo Capiba"/>
        </div>

        <nav className={styles.Menu}>

          <ul className={menu ? `${styles.NavBarList}` : `${styles.ClosedMenuMobile}`}>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Nosso Carro</a></li>
            <li><a href="#">Fórmula SAE</a></li>
            <li><a href="#">Patrocinadores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          <div className={styles.MenuMobile}>
            <div className="icon" onClick={() => setMenu(!menu)}>
              {menu ?
              (<img src={MenuHamb} alt="Hamburguer Menu" />)
              :
              (<img src={Sair} alt="Sair" />)}
            </div>

          </div>
        </nav>
      </div>

    </header>
  );
}

export default NavBar;
