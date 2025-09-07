import React, { useEffect, useState } from "react";
import styles from "./CamperCard.module.css";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { CAMPER_DETAILS_ROUTE } from "../../utils/consts.js";
import iconStar from "../../assets/icons/star.svg";
import iconLike from "../../assets/icons/like.svg";
import iconMap from "../../assets/icons/map.svg";
import CamperBadges from "../CamperBadges/CamperBadges.jsx";
import { generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperById, selectCampersLoading } from "../../redux/campersSlice.js";
import Loader from "../../UI/Loader/Loader.jsx";
import { fetchCamperById } from "../../redux/campersOps.jsx";

const CamperCard = ({ camper = null, camperId = null, variant = null }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!camperId) return;
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  const loading = useSelector(selectCampersLoading);
  const [isLiked, setIsLiked] = useState(false);
  const [gallery, setGallery] = useState([]);
  const camperById = useSelector(selectCamperById);
  const item = camper ? camper : camperById;

  const likeClickhandler = () => {
    setIsLiked(!isLiked);
    console.log("click");
  };

  const getGallery = () => {
    if (!item.gallery) return;

    if (variant === "catalogPage") {
      const images = item.gallery[0].thumb;
      return setGallery([images]);
    }
    if (variant === "detailsPage") {
      const images = item.gallery.map(i => i.thumb);
      return setGallery(images);
    }
  };

  useEffect(() => {
    getGallery();
  }, [item]);

  if (loading) return <Loader />;
  return (
    <div className={styles.card}>
      {gallery.map((path, index) => (
        <img key={path || index} src={path} alt="camper image" className={styles.image} />
      ))}
      <div className={styles.cardInfo}>
        <div>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>{item.name}</h2>
            <div className={styles.cardPrice}>
              €{item.price}.00
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
              <span className={styles.rating}>{item.rating}( Reviews)</span>
            </div>
            <span className={styles.location}>
              <img src={iconMap} alt="icon map" />
              {item.location}
            </span>
          </div>
        </div>
        <p className={styles.cardDesc}>{item.description}</p>
        <itemBadges camper={item} />
        {variant === "catalogPage" && (
          <MyButton to={generatePath(CAMPER_DETAILS_ROUTE, { id: item.id })}>
            Show more
          </MyButton>
        )}
      </div>
    </div>
  );
};

export default CamperCard;
