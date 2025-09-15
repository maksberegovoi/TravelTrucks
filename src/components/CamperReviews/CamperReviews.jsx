import React from "react";
import { useSelector } from "react-redux";
import iconStar from "../../assets/icons/star.svg";
import styles from "./CamperReviews.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { selectCamperById } from "../../redux/reducers/campers/selectors.js";
import Loader from "../../UI/Loader/Loader.jsx";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (reviews?.length === 0 || !reviews) return <p>There are no reviews yet...</p>;

  return (
    <div>
      <ul className={styles.reviews}>
        {reviews.map(review => (
          <li key={nanoid()} className={styles.listItem}>
            <div className={styles.heading}>
              <div className={styles.avatar}>
                {review.reviewer_name?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <div className={styles.reviewer}>
                <p className={styles.name}>{review.reviewer_name}</p>
                <div className={styles.rating}>
                  {Array.from({ length: review.reviewer_rating }, (_, index) => (
                    <img key={index} src={iconStar} alt="star" className={styles.star} />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
