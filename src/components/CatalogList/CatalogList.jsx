import React from "react";
import styles from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import { loadMore } from "../../redux/reducers/campers/campersSlice.js";
import {
  selectHasMoreCampers,
  selectPaginatedCampers,
} from "../../redux/reducers/filters/selectors.js";
import {
  selectCampersError,
  selectCampersLoading,
} from "../../redux/reducers/campers/selectors.js";

const CatalogList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const hasMore = useSelector(selectHasMoreCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className={styles.catalogList}>
      {error && campers?.length === 0 && (
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
      {!error && hasMore && (
        <MyButton className={styles.button} onClick={handleLoadMore}>
          Load more
        </MyButton>
      )}
    </div>
  );
};

export default CatalogList;
