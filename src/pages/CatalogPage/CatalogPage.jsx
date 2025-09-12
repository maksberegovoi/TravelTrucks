import React from "react";
import styles from "./CatalogPage.module.css";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";

const CatalogPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <CatalogFilter />
      </div>
      <div className={styles.catalogContainer}>
        <CatalogList />
      </div>
    </section>
  );
};

export default CatalogPage;
