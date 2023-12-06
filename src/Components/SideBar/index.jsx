import styles from "./styles.module.css";

const SideBar = () => {
  return (
    <div>
      <div>
        <img className={styles.logo} src="/Images/Logo.svg" alt="" />
      </div>

      <div className={styles.container}>
        <div>
          <div>
            <h4 className={styles.text}>Browse</h4>
          </div>
        </div>
        <div className={styles.one}>
          <div>
            <p>Explore</p>
          </div>
        </div>
        <div className={styles.one}>
          <p>Favourite</p>
        </div>
        <div className={styles.one}>
          <p>My Songs</p>
        </div>
        <div className={styles.one}>
          <p>My Artists</p>
        </div>
        <div>
          <div>
            <h4 className={styles.word}>Profile</h4>
          </div>
          <div className={styles.one}>
            <p>My profile</p>
          </div>
          <div className={styles.one}>
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
