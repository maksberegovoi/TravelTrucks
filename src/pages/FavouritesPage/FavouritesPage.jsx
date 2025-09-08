import React from "react";
import styles from "./FavouritesPage.module.css";
import Loader from "../../UI/Loader/Loader.jsx";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import { useSelector } from "react-redux";
import {
  selectCamperFavourites,
  selectCampersLoading,
} from "../../redux/campersSlice.js";

const FavouritesPage = () => {
  const favouriteCampers = useSelector(selectCamperFavourites);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {favouriteCampers.map(camper => (
          <li key={camper.id}>
            <CamperDetails camper={camper} variant="catalogPage" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
