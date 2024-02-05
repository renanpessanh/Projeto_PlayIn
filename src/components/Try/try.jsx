import styles from "./try.module.css";
import Logo from "../../assets/img/logoclara.png";
import iconIndividual from "../../assets/img/icon-individual.png";
import iconDuo from "../../assets/img/icon-duo.png";
import iconFamilia from "../../assets/img/icon-familia.png";
import Button from "../Butoon/butoon";

const Try = () => {
  return (
    <section className={styles.try}>
      <div className={styles.hero2_wrapper}>
        <div className={styles.logoHero2}>
          <img className={styles.imgLogo} src={Logo} alt="" />
        </div>
        <div className={styles.textoTitulo}>
          <p>Experimente a diferença</p>
        </div>
      </div>
      <div className={styles.texto}>
        <p>
          Seja Premium e tenha controle total da sua conta.<br></br>Cancele
          quando quiser.
        </p>
      </div>
      <div className={styles.planosWrapper}>
        <div className={styles.planosContainer}>
          <div className={styles.individual}>
            <div className={styles.iconIndividual}>
              <img
                className={styles.individualImg}
                src={iconIndividual}
                alt="Imagem-1"
              />
              <div className={styles.text1}>
                <h2 className={styles.title_h2}>
                  <span className={styles.spanicon}>PLANO </span>SOLO<br></br>
                  <span className={styles.spantext}>
                    <br></br> Grátis por 1 mês<br></br>Depois é só R$ 21,90/mês
                    <br></br>
                    <br></br>1 conta Premium
                  </span>
                </h2>

                <div className={styles.btnCardWrapper}>
                  <Button>Adquira</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.individual}>
            <div className={styles.iconIndividual}>
              <img
                className={styles.individualImg}
                src={iconDuo}
                alt="Imagem-2"
              />
              <div className={styles.text1}>
                <h2 className={styles.title_h2Duo}>
                  <span className={styles.spanicon}>PLANO </span>DUO<br></br>
                  <span className={styles.spantext}>
                    <br></br> Grátis por 1 mês<br></br>Depois é só R$ 27,90/mês
                    <br></br>
                    <br></br>2 contas Premium
                  </span>
                </h2>

                <div className={styles.btnCardWrapper}>
                  <Button>Adquira</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.individual}>
            <div className={styles.iconIndividual}>
              <img
                className={styles.individualImg}
                src={iconFamilia}
                alt="Imagem-3"
              />
              <div className={styles.text1}>
                <h2 className={styles.title_h2}>
                  <span className={styles.spanicon}>PLANO </span>FAMÍLIA
                  <br></br>
                  <span className={styles.spantext}>
                    <br></br>Grátis por 1 mês<br></br>Depois é só R$ 34,90/mês
                    <br></br>
                    <br></br>Até 6 contas Premium
                  </span>
                </h2>

                <div className={styles.btnCardWrapper}>
                  <Button>Adquira</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Try;
