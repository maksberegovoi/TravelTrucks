import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";

const CatalogPage = () => {
  return (
    <section className="flex gap-10 py-5 px-2 md:px-8">
      {/*<CatalogFilter />*/}
      <CatalogList />
    </section>
  );
};

export default CatalogPage;
