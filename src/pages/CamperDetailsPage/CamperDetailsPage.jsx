import React, { Suspense, useEffect } from "react";
import styles from "./CamperDetailsPage.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import CamperForm from "../../components/CamperForm/CamperForm.jsx";
import {
  generatePath,
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import {
  CAMPER_DETAILS_ROUTE,
  CAMPER_FEATURES,
  CAMPER_REVIEWS,
} from "../../utils/consts.js";
import { Toaster } from "react-hot-toast";

const CamperDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#00FF00",
              color: "#fff",
            },
            success: {
              duration: 5000,
              iconTheme: {
                primary: "green",
                secondary: "white",
              },
            },
          }}
        />
      </div>
      <CamperDetails camperId={id} variant="detailsPage" />
      <div className={styles.tooglerContainer}>
        <h3 className={styles.toogler}>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Features
          </NavLink>
        </h3>
        <h3 className={styles.toogler}>
          <NavLink
            to={generatePath(CAMPER_REVIEWS)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Reviews
          </NavLink>
        </h3>
      </div>
      <div className={styles.bottom}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <CamperForm />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
