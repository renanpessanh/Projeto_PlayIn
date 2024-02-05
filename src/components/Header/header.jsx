import { useState } from "react";
import styles from "./header.module.css";
import LogoMenu from "../../assets/img/logo.png";
import IconsBars from "../../assets/img/menu-togle.svg"
import IconCloser from "../../assets/img/menu-closer.svg"

const Header = () => {
  const [menuActive, setMenuactive] = useState(false);

  const links = [
    { name: "Premium", links: "/" },
    { name: "Suporte", links: "/" },
    { name: "Baixar", links: "/" },
    { name: "Inscrever-se", links: "/" },
    { name: "Entrar", links: "/" },
  ];

  const toggleMenu = () => {
    setMenuactive(!menuActive);
  };

  return (
    <header
      id={styles.Menu}
      className={`${styles.header} ${menuActive ? styles.active : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div>
          <button className={styles.LogoButton}>
            <a href="/">
              <img src={LogoMenu} alt="" />
            </a>
          </button>
        </div>
        <div className={styles.header_container}>
          <div className={styles.header_content}>
            <button id={styles.buttonMobile} onClick={toggleMenu}>
              <img
                id={styles.MenuIcons}
                src={menuActive ? IconCloser : IconsBars}
                alt="Icone Menu"
              />
            </button>
            <nav
              id={styles.header_all}
              className={menuActive ? styles.active : ""}
            >
              <ul id={styles.ulmenu} className={styles.ul_wrapper}>
                {links.map((link, index) => (
                  <li className={styles.header_li} key={link.name}>
                    <a className={styles.header_link} href="#" key={index}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;