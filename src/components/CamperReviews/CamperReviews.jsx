import React from "react";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campersSlice.js";
import iconStar from "../../assets/icons/star.svg";
import styles from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamperById);
  console.log(reviews);
  return (
    <div>
      <ul className={styles.reviews}>
        {reviews.map(review => (
          <li className={styles.listItem}>
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
