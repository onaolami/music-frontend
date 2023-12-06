import Button from "../Button";
import Comment from "../Comment";
import Header from "../Header";
import styles from "./styles.module.css";
const Playlist = () => {
  return (
    <div>
      <Header />
      <div className={styles.flex}>
        <div>
          <img className={styles.image} src="/Images/oba.jpeg" alt="" />
        </div>
        <div>
          <h1 className={styles.word}>Obapluto (feat. Pa Monday-Edo) </h1>
          <div className={styles.display}>
            <p className={styles.text}>Shallipopi </p>
            <div className={styles.circle}></div>
            <p className={styles.text}> Planet Pluto </p>
            <div className={styles.circle}></div>
            <p className={styles.text}>2023</p>
          </div>

          <div>
            <Button className={styles.button} variant="" size="LARGE">
              Play
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.comment}>Comments</h3>
      </div>
      <div className={styles.display}>
        <div className={styles.circles}></div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Type comment"
            value=""
            onChange=""
          />
        </div>
        <Button className={styles.buttons} variant="PRIMARY" size="LARGE">
          Send
        </Button>
      </div>

      <div className={styles.allComments}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Playlist;
