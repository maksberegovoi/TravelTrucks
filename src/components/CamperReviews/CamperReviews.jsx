import React from "react";
import { useSelector } from "react-redux";
import iconStar from "../../assets/icons/star.svg";
import { nanoid } from "@reduxjs/toolkit";
import { selectCamperById } from "../../redux/reducers/campers/selectors.js";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (reviews?.length === 0 || !reviews) return <p>There are no reviews yet...</p>;

  return (
    <ul className="flex-col flex gap-10 h-full overflow-auto max-h-[400px] md:max-h-[600px]">
      {reviews.map(review => (
        <li
          key={nanoid()}
          className="flex flex-col gap-4 p-4 border border-gray-300 rounded-xl"
        >
          <div className="flex gap-4 items-center">
            <div className="border border-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold text-[var(--color-accent)]">
              {review.reviewer_name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p>{review.reviewer_name}</p>
              <div className="flex gap-1 items-center">
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
  );
};

export default CamperReviews;
