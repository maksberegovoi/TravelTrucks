import React from "react";
import { useSelector } from "react-redux";
import iconStar from "../../assets/icons/star.svg";
import { nanoid } from "@reduxjs/toolkit";
import { selectCamperById } from "../../redux/reducers/campers/selectors.js";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (reviews?.length === 0 || !reviews) return <p>There are no reviews yet...</p>;

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={nanoid()}>
            <div>
              <div>{review.reviewer_name?.charAt(0)?.toUpperCase() || "U"}</div>
              <div>
                <p>{review.reviewer_name}</p>
                <div>
                  {Array.from({ length: review.reviewer_rating }, (_, index) => (
                    <img key={index} src={iconStar} alt="star" />
                  ))}
                </div>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
