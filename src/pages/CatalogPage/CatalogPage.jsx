import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";

const CatalogPage = () => {
  return (
    <section className="myContainer relative py-5">
      {/*<CatalogFilter />*/}
      <CatalogList />
    </section>
  );
};

export default CatalogPage;
