import React from "react";
import styles from "./Location.module.css";
import iconMap from "../../assets/icons/map.svg";
import {
  changeFilterLocation,
  selectFilterLocation,
  selectUniqueLocations,
} from "../../redux/filtersSlice.js";
import { useDispatch, useSelector } from "react-redux";

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
