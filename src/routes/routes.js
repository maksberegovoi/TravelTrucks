import HomePage from "../pages/HomePage/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import CamperDetailsPage from "../pages/CamperDetailsPage/CamperDetailsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import { HOME_ROUTE, CATALOG_ROUTE, CAMPER_DETAILS_ROUTE } from "../utils/consts.js";

export const publicRoutes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: CATALOG_ROUTE, Component: CatalogPage },
  { path: CAMPER_DETAILS_ROUTE, Component: CamperDetailsPage },
  { path: "*", Component: NotFoundPage },
];
