import styles from "./playlist.module.css";
import Gym from "../../assets/img/gym.png";
import Rap from "../../assets/img/rap.png";
import Sertanejo from "../../assets/img/mato.png";
import Rock from "../../assets/img/rock.png";

const Playlist = () => {
  return (
    <section class={styles.playlist}>
      <div class={styles.playlist_wrapper}>
        <div class={styles.playlist_container}>
          <div class={styles.playlist_content}>
            <div class={styles.playlist_text}>
              <h2 class={styles.playlist_title}>Eclético & Exclusivo</h2>
              <p class={styles.playlist_p}>
                Explore todos os tipos de playlists, criadas pelos nossos
                experts musicais.
              </p>
            </div>
          </div>
        </div>
        <div class={styles.playlist_button}>
          <div class={styles.playlist_img}>
            <a href="#">
              <div class={styles.gym}>
                <div class={styles.gym_img}>
                  <img src={Gym} alt="Playlist de Academia" />
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.rap}>
                <div class={styles.rap_img}>
                  <img src={Rap} alt="Playlist Hip Hop" />
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.sertanejo}>
                <div class={styles.sertanejo_img}>
                  <img src={Sertanejo} alt="Playlist Sertanejo" />
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.rock}>
                <div class={styles.rock_img}>
                  <img src={Rock} alt="Playlist Rock'n roll" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
