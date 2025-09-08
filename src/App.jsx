import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./redux/campersOps.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px", // увеличиваем текст
            padding: "20px", // увеличиваем отступы
            minWidth: "300px", // минимальная ширина
            borderRadius: "12px", // скругление углов
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
              fontSize: "18px", // большой текст для ошибок
              padding: "20px", // большие отступы
              minWidth: "350px", // шире чем обычные
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
