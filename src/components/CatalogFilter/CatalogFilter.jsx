import React, { useEffect, useState } from "react";
import styles from "./CatalogFilter.module.css";
import iconTransmission from "../../assets/icons/badges/transmission.svg";
import iconPetrol from "../../assets/icons/badges/petrol.svg";
import iconVan from "../../assets/icons/badges/van.svg";
import iconAlcove from "../../assets/icons/badges/alcove.svg";
import iconFullyIntegrated from "../../assets/icons/badges/fullyIntegrated.svg";
import iconAC from "../../assets/icons/badges/AC.svg";
import iconBathroom from "../../assets/icons/badges/bathroom.svg";
import iconKitchen from "../../assets/icons/badges/kitchen.svg";
import iconTV from "../../assets/icons/badges/tv.svg";
import iconRefrigator from "../../assets/icons/badges/refrigator.svg";
import iconWater from "../../assets/icons/badges/water.svg";
import iconRadio from "../../assets/icons/badges/radio.svg";
import iconGas from "../../assets/icons/badges/gas.svg";
import iconMicrowave from "../../assets/icons/badges/microwave.svg";
import {
  changeFilterEquipment,
  changeFilterType,
  selectFilterType,
  selectFilterEquipment,
} from "../../redux/filtersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { resetPagination } from "../../redux/campersSlice.js";
import Location from "../../components/Location/Location.jsx";

const CatalogFilter = () => {
  const dispatch = useDispatch();
  const equipment = [
    { label: "AC", src: iconAC },
    { label: "bathroom", src: iconBathroom },
    { label: "kitchen", src: iconKitchen },
    { label: "TV", src: iconTV },
    { label: "radio", src: iconRadio },
    { label: "water", src: iconWater },
    { label: "gas", src: iconGas },
    { label: "microwave", src: iconMicrowave },
    { label: "refrigerator", src: iconRefrigator },
  ];
  const type = [
    { key: "van", label: "panelTruck", src: iconVan },
    { key: "alcove", label: "alcove", src: iconAlcove },
    { key: "fully integrated", label: "fullyIntegrated", src: iconFullyIntegrated },
  ];

  const filterEquipment = useSelector(selectFilterEquipment);
  const filterType = useSelector(selectFilterType);

  const selectEquipment = label => {
    if (filterEquipment.includes(label)) {
      dispatch(changeFilterEquipment(filterEquipment.filter(filter => filter !== label)));
    } else {
      dispatch(changeFilterEquipment([...filterEquipment, label]));
    }
  };

  const selectType = label => {
    if (filterType.includes(label)) {
      dispatch(changeFilterType(filterType.filter(filter => filter !== label)));
    } else {
      dispatch(changeFilterType([...filterType, label]));
    }
  };

  useEffect(() => {
    dispatch(resetPagination());
  }, [filterEquipment, filterType, dispatch]);

  return (
    <div className={styles.container}>
      <Location />
      <p className={styles.label}>Filters</p>
      <div className={styles.filterContainer}>
        <h3 className={styles.filterType}>Vehicle equipment</h3>
        <ul className={styles.badges}>
          {equipment.map(({ label, src }) => (
            <li
              key={label}
              className={
                filterEquipment.includes(label)
                  ? `${styles.badge} ${styles.selected}`
                  : styles.badge
              }
              onClick={() => selectEquipment(label)}
            >
              <img
                className={styles.icon}
                src={src}
                alt={`${label} icon`}
                aria-label={label}
              />{" "}
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.filterContainer}>
        <h3 className={styles.filterType}>Vehicle equipment</h3>
        <ul className={styles.badges}>
          {type.map(({ key, label, src }) => (
            <li
              key={label}
              className={
                filterType.includes(label)
                  ? `${styles.badge} ${styles.selected}`
                  : styles.badge
              }
              onClick={() => selectType(label)}
            >
              <img
                className={styles.icon}
                src={src}
                alt={`${label} icon`}
                aria-label={label}
              />{" "}
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogFilter;
