import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes/routes.js";
import Loader from "../UI/Loader/Loader.jsx";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
