import React from "react";
import styles from "./CatalogList.module.css";
import { useSelector } from "react-redux";
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
} from "../../redux/campersSlice.js";
import CamperDetails from "../CamperDetails/CamperCard.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const CatalogList = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  return (
    <div className={styles.catalogList}>
      {error && (
        <div>
          <h2>Error fetching data...</h2>
          <p>{error}</p>
        </div>
      )}
      <ul className={styles.container}>
        {isLoading && <Loader />}
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperDetails camper={camper} />
          </li>
        ))}
      </ul>
      {!error && campers.length > 1 && (
        <MyButton className={styles.button}>Load more</MyButton>
      )}
    </div>
  );
};

export default CatalogList;
