import React from "react";
import styles from "./HomePage.module.css";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import heroBg from "../../assets/images/backgrounds/HomePageBg.png";
import { CATALOG_ROUTE } from "../../utils/consts.js";

const HomePage = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <h2 className={styles.titleDesc}>
          You can find everything you want in our catalog
        </h2>
        <MyButton to={CATALOG_ROUTE} className={styles.button}>
          View Now
        </MyButton>
      </div>
    </section>
  );
};

export default HomePage;
