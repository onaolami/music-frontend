import Card from "../../Components/Card";
import SideBar from "../../Components/SideBar";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div>
        <h3 className={styles.one}>New Releases</h3>
        <div className={styles.grid}>
          <Card image="/Images/water.jpeg" title="Water" artiste="Tyla" />
          <Card
            image="/Images/lonely.jpeg"
            title="Lonely At The Top"
            artiste="Drake"
          />

          <Card
            image="/Images/brown.jpeg"
            title="Call Me Everyday (feat. Wizkid)"
            artiste="Chris brown"
          />
          <Card
            image="/Images/soco.jpeg"
            title="Soco (feat.Wizkid, Ceeza Milli, Spotless & Terri)"
            artiste="Starboy"
          />
          <Card
            image="/Images/one dance.jpeg"
            title="One Dance"
            artiste="Drake"
          />
          <Card image="/Images/rema.jpeg" title="Woman" artiste="Rema" />
          <Card
            image="/Images/oscroh.jpeg"
            title="Oscroh( Pepperline)"
            artiste="Shallipopi"
          />
          <Card
            image="/Images/canadia.jpeg"
            title="Canada - Remix"
            artiste="Magnito"
          />
          <Card image="/Images/bxnx.jpeg" title="GWAGWALADA" artiste="Bnxn" />
        </div>

        <div>
          <h3 className={styles.two}>New Releases</h3>
          <div className={styles.grid}>
            <Card image="/Images/water.jpeg" title="Water" artiste="Tyla" />
            <Card
              image="/Images/lonely.jpeg"
              title="Lonely At The Top"
              artiste="Drake"
            />

            <Card
              image="/Images/brown.jpeg"
              title="Call Me Everyday (feat. Wizkid)"
              artiste="Chris brown"
            />
            <Card
              image="/Images/soco.jpeg"
              title="Soco (feat.Wizkid, Ceeza Milli, Spotless & Terri)"
              artiste="Starboy"
            />
            <Card
              image="/Images/one dance.jpeg"
              title="One Dance"
              artiste="Drake"
            />
            <Card image="/Images/rema.jpeg" title="Woman" artiste="Rema" />
            <Card
              image="/Images/oscroh.jpeg"
              title="Oscroh( Pepperline)"
              artiste="Shallipopi"
            />
            <Card
              image="/Images/canadia.jpeg"
              title="Canada - Remix"
              artiste="Magnito"
            />
            <Card image="/Images/bxnx.jpeg" title="GWAGWALADA" artiste="Bnxn" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
