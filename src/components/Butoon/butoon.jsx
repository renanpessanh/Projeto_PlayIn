import styles from "./butoon.module.css";

const Button = (props) => {
  return (
    <div className={styles.BtnWrapper}>
        <a href="" className={styles.button} {...props}/>
    </div>
  )
}

export default Button;