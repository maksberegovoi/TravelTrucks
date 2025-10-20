import React from "react";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/reducers/favourites/selectors.js";
import { selectCampers } from "../../redux/reducers/campers/selectors.js";

const FavouritesPage = () => {
  const favourites = useSelector(selectFavourites);
  const campers = useSelector(selectCampers);
  const favouriteCampers = campers.filter(camper => favourites.includes(camper.id));

  return (
    <section>
      {favourites?.length === 0 && <p>You haven't added any yet</p>}
      <ul>
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
