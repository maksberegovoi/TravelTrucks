import React from "react";
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
    <div className="flex flex-col gap-10 items-center">
      {error && campers?.length === 0 && (
        <div className="text-center">
          <h2 className="text-5xl">Error fetching data...</h2>
        </div>
      )}
      <ul className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-5 place-items-center">
        {isLoading && <Loader />}
        {campers.map(camper => (
          <li className="h-full w-full" key={camper.id}>
            <CamperDetails camper={camper} variant="catalogPage" />
          </li>
        ))}
      </ul>
      {!error && hasMore && <MyButton onClick={handleLoadMore}>Load more</MyButton>}
    </div>
  );
};

export default CatalogList;
