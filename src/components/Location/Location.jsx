import React from "react";
import iconMap from "../../assets/icons/map.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterLocation,
  selectUniqueLocations,
} from "../../redux/reducers/filters/selectors.js";
import { changeFilterLocation } from "../../redux/reducers/filters/filtersSlice.js";

const Location = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectUniqueLocations);
  const selectedLocation = useSelector(selectFilterLocation);

  const handleLocationChange = event => {
    dispatch(changeFilterLocation(event.target.value));
  };

  return (
    <div>
      <p className="text-[#6C717B] mb-3">Location</p>
      <div className="flex gap-2 pl-4">
        <img src={iconMap} alt="Map icon" />
        <select
          className="cursor-pointer outline-none"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">All locations</option>
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Location;
