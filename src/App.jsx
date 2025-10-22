import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./redux/reducers/campers/campersOps.jsx";
import { Toaster } from "react-hot-toast";
import Breadcrumbs from "./UI/Breadcrumbs/Breadcrumbs.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Breadcrumbs />
      <AppRouter />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",
            padding: "20px",
            minWidth: "300px",
            borderRadius: "12px",
          },
          success: {
            duration: 5000,
            style: {
              background: "#00FF00",
              color: "#fff",
              fontSize: "18px",
              padding: "20px",
            },
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#FF0000",
              color: "#fff",
              fontSize: "18px",
              padding: "20px",
              minWidth: "350px",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
