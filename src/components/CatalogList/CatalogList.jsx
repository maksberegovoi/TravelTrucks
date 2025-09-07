import React from "react";
import styles from "./CatalogList.module.css";
import { useSelector } from "react-redux";
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
} from "../../redux/campersSlice.js";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const CatalogList = () => {
  const campers = useSelector(selectCampers);
  // const campers = [];
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  return (
    <div className={styles.catalogList}>
      <ul className={styles.container}>
        {isLoading && <Loader />}
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperDetails camper={camper} />
          </li>
        ))}
      </ul>
      <MyButton className={styles.button}>Load more</MyButton>
    </div>
  );
};

export default CatalogList;
