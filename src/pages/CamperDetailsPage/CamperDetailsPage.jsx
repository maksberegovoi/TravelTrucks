import React, { Suspense } from "react";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import CamperForm from "../../components/CamperForm/CamperForm.jsx";
import { generatePath, NavLink, Outlet, useParams } from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import { CAMPER_REVIEWS } from "../../utils/consts.js";

const CamperDetailsPage = () => {
  const { id } = useParams();

  return (
    <section>
      <CamperDetails camperId={id} variant="detailsPage" />
      <div>
        <h3>
          <NavLink
            to=""
            end
            // className={({ isActive }) =>
            //   isActive ? `${styles.link} ${styles.active}` : styles.link
            // }
          >
            Features
          </NavLink>
        </h3>
        <h3>
          <NavLink
            to={generatePath(CAMPER_REVIEWS)}
            // className={({ isActive }) =>
            //   isActive ? `${styles.link} ${styles.active}` : styles.link
            // }
          >
            Reviews
          </NavLink>
        </h3>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <CamperForm />
      </div>
    </section>
  );
};

export default CamperDetailsPage;
