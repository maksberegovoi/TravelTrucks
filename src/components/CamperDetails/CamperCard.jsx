import React, { useState } from "react";
import styles from "./CamperCard.module.css";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CAMPER_DETAILS_ROUTE } from "../../utils/consts.js";
import iconStar from "../../assets/icons/star.svg";
import iconLike from "../../assets/icons/like.svg";
import iconMap from "../../assets/icons/map.svg";
import CamperBadges from "../CamperBadges/CamperBadges.jsx";
import { generatePath } from "react-router-dom";

const CamperCard = ({ camper }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeClickhandler = () => {
    setIsLiked(!isLiked);
    console.log("click");
  };

  return (
    <div className={styles.card}>
      <img
        key={camper.gallery[0].thumb}
        src={camper.gallery[0].thumb}
        alt="camper image"
        className={styles.image}
      />

      <div className={styles.cardInfo}>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>{camper.name}</h2>
            <div className={styles.cardPrice}>
              €{camper.price}.00
              <button
                className={styles.likeButton}
                onClick={likeClickhandler}
                aria-label="Add to favourite"
              >
                <img src={iconLike} alt="icon like" />
              </button>
            </div>
          </div>
          <div className={styles.cardRatingContainer}>
            <div className={styles.cardRating}>
              <img src={iconStar} alt="icon star" className={styles.iconStar} />
              <span className={styles.rating}>{camper.rating}( Reviews)</span>
            </div>
            <span className={styles.location}>
              <img src={iconMap} alt="icon map" />
              {camper.location}
            </span>
          </div>
        </div>
        <p className={styles.cardDesc}>{camper.description}</p>
        <CamperBadges camper={camper} />
        <MyButton to={generatePath(CAMPER_DETAILS_ROUTE, { id: camper.id })}>
          Show more
        </MyButton>
      </div>
    </div>
  );
};

export default CamperCard;
