import React from "react";
import styles from "./CatalogPage.module.css";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";
import Location from "../../components/Location/Location.jsx";

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CatalogFilter />
      </div>
      <div className={styles.catalogContainer}>
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
