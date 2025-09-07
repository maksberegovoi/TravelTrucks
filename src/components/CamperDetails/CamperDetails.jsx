import React, { useState } from "react";
import styles from "./CamperDetails.module.css";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CAMPER_DETAILS_ROUTE } from "../../utils/consts.js";
import iconStar from "../../assets/icons/star.svg";
import iconLike from "../../assets/icons/like.svg";
import CamperBadges from "../CamperBadges/CamperBadges.jsx";
import { generatePath } from "react-router-dom";

const CamperDetails = ({ camper, variant = "catalog" }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeClickhandler = () => {
    setIsLiked(!isLiked);
    console.log("click");
  };

  const gallery = () => {
    if (variant === "catalog") return camper.gallery[0].thumb;
    if (variant === "detailsPage") return camper.gallery.thumb;
  };

  return (
    <div className={styles.card}>
      <img src={gallery()} alt="camper image" className={styles.image} />
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
              <span className={styles.rating}>
                {camper.rating}({camper.reviews.length} Reviews)
              </span>
            </div>
            <span className={styles.location}>{camper.location}</span>
          </div>
        </div>
        <p className={styles.cardDesc}>{camper.description}</p>
        <CamperBadges camper={camper} variant={variant} />
        {variant === "catalog" && (
          <MyButton to={generatePath(CAMPER_DETAILS_ROUTE, { id: camper.id })}>
            Show more
          </MyButton>
        )}
      </div>
    </div>
  );
};

export default CamperDetails;
