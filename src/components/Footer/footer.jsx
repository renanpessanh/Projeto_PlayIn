import styles from "./footer.module.css";
import Logo from "../../assets/img/logo.png";
import faceIcon from "../../assets/img/insta.svg";
import instaIcon from "../../assets/img/face.svg";
import twitterIcon from "../../assets/img/x.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div>
            <img className={styles.FooterLogo} src={Logo} alt="" />
          </div>
          <div className={styles.WrapperlistUl}>
            <div className={styles.containerUl}>
              <ul>
                <li>
                  <a className={styles.footerTitle} href="">
                    Empresa
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    Trabalhe conosco
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.containerUl}>
              <ul>
                <li>
                  <a className={styles.footerTitle} href="">
                    Links úteis
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    Suporte
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    App móvel grátis
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.containerUl}>
              <ul>
                <li>
                  <a className={styles.footerTitle} href="">
                    Comunidades
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    Para Artistas
                  </a>
                </li>
                <li>
                  <a className={styles.footerA} href="">
                    Para Usuários
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerCopy}>
        <div className={styles.copyWrapper}>
          <ul className={styles.ulCopyRede}>
            <li>
              <a href="">
                <img src={instaIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={faceIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitterIcon} alt="" />
              </a>
            </li>
          </ul>
          <div>
            <p>© 2024 PlayIn. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
