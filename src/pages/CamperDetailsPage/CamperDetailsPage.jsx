import React, { Suspense } from "react";
import styles from "./CamperDetailsPage.module.css";
import CamperDetails from "../../components/CamperCard/CamperCard.jsx";
import CamperForm from "../../components/CamperForm/CamperForm.jsx";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";

const CamperDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      {/*<div>*/}
      {/*  <Toaster position="top-right" />*/}
      {/*</div>*/}
      <CamperCard camperId={id} variant="detailsPage" />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
          <div>рядом аутлет</div>
        </Suspense>
        <CamperForm />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
