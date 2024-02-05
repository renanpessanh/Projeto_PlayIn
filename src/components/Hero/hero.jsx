import styles from "./hero.module.css";
import img from "../../assets/img/hero-img.png";
import Button from "../Butoon/butoon";

const Hero = () => {
  return (
    <section>
      <div className={styles.heroWrapper}>
        <div className={styles.hero_text}>
          <h2 className={styles.titulo}>
            <span className={styles.titleSpan}>Explore o PlayIn</span>
            <br></br>Sua porta de entrada para uma experiência extraordinária!
          </h2>
          <h3 className={styles.txt1}>
            Ouça sem limites.<br></br>Experimente 1 mês de Premium Individual
            grátis. Depois, apenas R$ 21,90/mês.<br></br>
            <br></br>
            <span className={styles.txtSpan}>Cancele quando quiser.</span>
          </h3>
          <div className={styles.buttonWrapper}>
            <Button>Experimente grátis</Button>
          </div>
        </div>

        <div className={styles.heroImg}>
          <a href="#">
            <img src={img} alt="hero-img" />
          </a>
          <div className={styles.button}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
