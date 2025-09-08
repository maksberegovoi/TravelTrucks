import React, { useEffect } from "react";
import styles from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersError,
  selectCampersLoading,
  selectCampersTotalItems,
} from "../../redux/campersSlice.js";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { selectFilterCampers } from "../../redux/filtersSlice.js";
import toast from "react-hot-toast";

const CatalogList = () => {
  const campers = useSelector(selectFilterCampers);
  const total = useSelector(selectCampersTotalItems);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching data...");
    }
  }, [error]);

  return (
    <div className={styles.catalogList}>
      {error && (
        <div>
          <h2 className={styles.error}>Error fetching data...</h2>
        </div>
      )}
      <ul className={styles.container}>
        {isLoading && <Loader />}
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperDetails camper={camper} variant="catalogPage" />
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
