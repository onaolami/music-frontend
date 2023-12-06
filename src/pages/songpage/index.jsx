import Playlist from "../../Components/Playlist";
import SideBar from "../../Components/SideBar";
import styles from "./styles.module.css";
const SongPage = () => {
  return (
    <div className={styles.display}>
      <SideBar />
      <Playlist />
    </div>
  );
};

export default SongPage;
