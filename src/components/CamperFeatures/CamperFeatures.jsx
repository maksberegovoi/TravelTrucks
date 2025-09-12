import React from "react";
import styles from "./CamperFeatures.module.css";
import CamperBadges from "../CamperBadges/CamperBadges.jsx";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/reducers/campers/selectors.js";

const CamperFeatures = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={styles.container}>
      <div>
        <CamperBadges camper={camper} showAll={true} />
      </div>
      <div>
        <h3 className={styles.infoTitle}>Vehicle details</h3>
        <div className={styles.infoContainer}>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Form</span>
            <span className={styles.infoText}>{camper.form}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Length</span>
            <span className={styles.infoText}>{camper.length}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Width</span>
            <span className={styles.infoText}>{camper.width}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Height</span>
            <span className={styles.infoText}>{camper.height}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Tank</span>
            <span className={styles.infoText}>{camper.tank}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>Consumption</span>
            <span className={styles.infoText}>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
