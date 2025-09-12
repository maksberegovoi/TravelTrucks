import React from "react";
import styles from "./Location.module.css";
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
    <div className={styles.container}>
      <p className={styles.label}>Location</p>
      <div className={styles.location}>
        <img src={iconMap} alt="Map icon" />
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className={styles.select}
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
