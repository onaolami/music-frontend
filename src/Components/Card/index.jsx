import styles from "./styles.module.css";

const Card = ({ image, title, artiste }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.circles}>
          <div className={styles.logo} alt="card">
            <img src="/Images/play.svg"/>
          </div>
        </div>
      </div>

      <div className={styles.wrap}>
        <div>
          <h4 className={styles.two}>{title}</h4>
          <h4 className={styles.three}>{artiste}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
