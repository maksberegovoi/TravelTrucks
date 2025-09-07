import {
  HOME_ROUTE,
  CATALOG_ROUTE,
  CAMPER_DETAILS_ROUTE,
  CAMPER_REVIEWS,
  CAMPER_FEATURES,
} from "../utils/consts.js";
import { lazy } from "react";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CamperFeatures from "../components/CamperFeatures/CamperFeatures.jsx";

const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(
  () => import("../pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));
const CamperReviews = lazy(() => import("../components/CamperReviews/CamperReviews.jsx"));

export const publicRoutes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: CATALOG_ROUTE, Component: CatalogPage },
  {
    path: CAMPER_DETAILS_ROUTE,
    Component: CamperDetailsPage,
    children: [
      { path: CAMPER_FEATURES, Component: CamperFeatures },
      { path: CAMPER_REVIEWS, Component: CamperReviews },
    ],
  },
  { path: "*", Component: NotFoundPage },
];
