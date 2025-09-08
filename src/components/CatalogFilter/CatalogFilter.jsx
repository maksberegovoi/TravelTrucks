import React from "react";
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

const CatalogFilter = () => {
  const equipment = [
    { key: "AC", label: "AC", src: iconAC },
    { key: "bathroom", label: "bathroom", src: iconBathroom },
    { key: "kitchen", label: "kitchen", src: iconKitchen },
    { key: "TV", label: "TV", src: iconTV },
    { key: "radio", label: "radio", src: iconRadio },
    { key: "water", label: "water", src: iconWater },
    { key: "gas", label: "gas", src: iconGas },
    { key: "microwave", label: "microwave", src: iconMicrowave },
    { key: "refrigator", label: "refrigator", src: iconRefrigator },
  ];

  const type = [
    { key: "van", label: "van", src: iconVan },
    { key: "alcove", label: "alcove", src: iconAlcove },
    { key: "fullyIntegrated", label: "fullyIntegrated", src: iconFullyIntegrated },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.label}>Filters</p>
      <div className={styles.filterContainer}>
        <h3 className={styles.filterType}>Vehicle equipment</h3>
        <ul className={styles.badges}>
          {equipment.map(({ key, label, src }) => (
            <li key={key} className={styles.badge}>
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
            <li key={key} className={styles.badge}>
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
    </div>
  );
};

export default CatalogFilter;
