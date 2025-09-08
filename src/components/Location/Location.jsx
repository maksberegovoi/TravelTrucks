import React from "react";
import styles from "./Location.module.css";
import iconMap from "../../assets/icons/map.svg";

const Location = () => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Location</p>
      <div className={styles.location}>
        <img src={iconMap} alt="" />
        <p>Kyiv, Ukraine</p>
      </div>
    </div>
  );
};

export default Location;
