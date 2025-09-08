import React, { useEffect, useState } from "react";
import styles from "./CamperDetails.module.css";
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

const CamperDetails = ({ camper = null, camperId = null, variant = null }) => {
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

  const containerSwitcher = () => {
    console.log("switcher");
    switch (variant) {
      case "catalog":
        return styles.catalogContainer;

      case "detailsPage":
        return styles.detailsPageContainer;

      default:
        return styles.catalogContainer;
    }
  };

  if (loading) return <Loader />;
  return (
    <div className={containerSwitcher()}>
      <div className={styles.gallery}>
        {gallery.map((path, index) => (
          <img
            key={path || index}
            src={path}
            alt="camper image"
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h2 className={styles.title}>{item.name}</h2>
          <div className={styles.price}>
            €{item.price}.00
            {variant === "catalogPage" && (
              <button
                className={styles.likeButton}
                onClick={likeClickhandler}
                aria-label="Add to favourite"
              >
                <img src={iconLike} alt="icon like" />
              </button>
            )}
          </div>
        </div>
        <div className={styles.ratingContainer}>
          <div className={styles.rating}>
            <img src={iconStar} alt="icon star" className={styles.iconStar} />
            <span className={styles.rating}>
              {item.rating}({item.reviews?.length || ""} Reviews)
            </span>
          </div>
          <span className={styles.location}>
            <img src={iconMap} alt="icon map" />
            {item.location}
          </span>
        </div>
        <p className={styles.desc}>{item.description}</p>

        {variant === "catalogPage" && (
          <>
            <CamperBadges camper={item} />
            <MyButton to={generatePath(CAMPER_DETAILS_ROUTE, { id: item.id })}>
              Show more
            </MyButton>
          </>
        )}
      </div>
    </div>
  );
};

export default CamperDetails;
