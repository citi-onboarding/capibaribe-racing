import React, { useState } from "react";

import logoCapibaNavbar from "../../assets/logo-navbar.svg";
import MenuHamb from "../../assets/sair.svg";
import Sair from "../../assets/menu-hamburguer.svg";


import styles from "./navBar.module.css";

function NavBar() {
  const [menu, setMenu] = useState(true);

  return (
    <header className="fontNavbar container" id={styles.Navbar}>
{/**/}
        <nav className={styles.Menu}>
          <div className={styles.LogoNav}>
            <img src={logoCapibaNavbar} alt="Logo Capiba"/>
          </div>

          <ul className={styles.NavBarList}>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Nosso Carro</a></li>
            <li><a href="#">Fórmula SAE</a></li>
            <li><a href="#">Patrocinadores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          <div className={styles.Bars} onClick={() => setMenu(!menu)}>
            {menu ?
            (<img src={Sair} alt="Sair" />)
            :
            (<img src={MenuHamb} alt="Hamburguer Menu" />)}
          </div>
        </nav>
        {menu ? null :
        (<nav className={styles.MenuResponsive}>

          <ul className={styles.MenuResponsiveList}>
            <li><a onClick={() => setMenu(!menu)} href="#">Sobre nós</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Nosso Carro</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Fórmula SAE</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Patrocinadores</a></li>
            <li><a onClick={() => setMenu(!menu)} href="#">Contato</a></li>
          </ul>
        </nav>)}
    </header>
  );
}

export default NavBar;
