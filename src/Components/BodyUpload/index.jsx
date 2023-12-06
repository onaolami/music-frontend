import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import Input from "../Input";
import Button from "../Button";
const BodyUpload = () => {
  return (
    <div>
      <div className={styles.center}>
        <div>
          <Icon
            icon="cryptocurrency:music"
            width="140"
            height="140"
            style={{ color: "#d9d9d9" }}
          />
          <p className={styles.word}>Type to upload cover art</p>
        </div>
        <h3 className={styles.text}>Upload your Song</h3>
      </div>
      <div className={styles.container}>
        <Input placeholder="Song title" size="SMALL" />
        <Input placeholder="Artistes" size="SMALL" />
        <div className={styles.child}>
          <Input placeholder="Album" size="SMALL" />
          <Input placeholder="Release Year" size="SMALL" />
        </div>
        <div className={styles.child}>
          <Input className={styles.inner} placeholder="Genre" size="SMALL" />
          <Input placeholder="Country" size="SMALL" />
        </div>

        <div className={styles.section}>
          <Button className={styles.button} size="DEFAULT">
            Select song
          </Button>
          <div>
            <h4> Click here or drag song to this area </h4>
            <p> Only MP3, WAV, FLAC files lesser than 10MB are allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyUpload;
