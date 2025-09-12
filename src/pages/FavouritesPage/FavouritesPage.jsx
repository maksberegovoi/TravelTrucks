import React from "react";
import styles from "./FavouritesPage.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/reducers/favourites/selectors.js";
const FavouritesPage = () => {
  const favouriteCampers = useSelector(selectFavourites);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {favouriteCampers.map(camper => (
          <li key={camper.id}>
            <CamperDetails camper={camper} variant="catalogPage" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavouritesPage;
