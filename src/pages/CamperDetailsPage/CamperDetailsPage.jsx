import React, { Suspense } from "react";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import CamperForm from "../../components/CamperForm/CamperForm.jsx";
import { generatePath, NavLink, Outlet, useParams } from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import { CAMPER_REVIEWS } from "../../utils/consts.js";

const CamperDetailsPage = () => {
  const { id } = useParams();

  return (
    <section className="myContainer flex flex-col gap-10 py-5">
      <CamperDetails camperId={id} variant="detailsPage" />
      <div
        className="flex gap-6 items-center justify-start
       md:text-xl font-semibold py-6 "
      >
        <h3>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[var(--color-accent)] pb-6" : ""
            }
          >
            Features
          </NavLink>
        </h3>
        <h3>
          <NavLink
            to={generatePath(CAMPER_REVIEWS)}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[var(--color-accent)] py-6" : ""
            }
          >
            Reviews
          </NavLink>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 h-full w-full">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <CamperForm />
      </div>
    </section>
  );
};

export default CamperDetailsPage;
