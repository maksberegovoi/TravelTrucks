import React from "react";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";

const CatalogPage = () => {
  return (
    <section className="flex gap-10 py-5 px-16">
      {/*<div className="">*/}
      {/*  <CatalogFilter />*/}
      {/*</div>*/}
      <div className="">
        <CatalogList />
      </div>
    </section>
  );
};

export default CatalogPage;
