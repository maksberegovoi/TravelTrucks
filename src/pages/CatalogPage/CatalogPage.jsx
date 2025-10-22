import React, { useState } from "react";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter.jsx";
import Modal from "../../components/Modal/Modal.jsx";

const CatalogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="myContainer relative pb-5">
      <div className="flex gap-4 items-center justify-between mb-5">
        <h2 className="text-4xl">Catalog</h2>
        <button
          className="cursor-pointer active:scale-90 hover:scale-110"
          onClick={toggle}
        >
          <svg className="w-[45px] h-[45px]" viewBox="0 0 32 32">
            <path
              fill="#f0f0f0"
              d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
            />
            <path d="M16.75 15.75v5.75a.753.753 0 0 1-.75.75.753.753 0 0 1-.75-.75v-5.75A.753.753 0 0 1 16 15a.753.753 0 0 1 .75.75zM20.5 20a.753.753 0 0 0-.75.75v.75a.753.753 0 0 0 .75.75.753.753 0 0 0 .75-.75v-.75a.753.753 0 0 0-.75-.75zm1.5-2.5h-.75v-7a.753.753 0 0 0-.75-.75.753.753 0 0 0-.75.75v7H19a.753.753 0 0 0-.75.75.753.753 0 0 0 .75.75h3a.753.753 0 0 0 .75-.75.753.753 0 0 0-.75-.75zm-10.5.5a.753.753 0 0 0-.75.75v2.75a.753.753 0 0 0 .75.75.753.753 0 0 0 .75-.75v-2.75a.753.753 0 0 0-.75-.75zm1.5-2.5h-.75v-5a.753.753 0 0 0-.75-.75.753.753 0 0 0-.75.75v5H10a.753.753 0 0 0-.75.75.753.753 0 0 0 .75.75h3a.753.753 0 0 0 .75-.75.753.753 0 0 0-.75-.75zm4.5-3h-.75v-2a.753.753 0 0 0-.75-.75.753.753 0 0 0-.75.75v2h-.75a.753.753 0 0 0-.75.75.753.753 0 0 0 .75.75h3a.753.753 0 0 0 .75-.75.753.753 0 0 0-.75-.75z" />
          </svg>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={toggle}>
        <CatalogFilter />
      </Modal>
      <CatalogList />
    </section>
  );
};

export default CatalogPage;
