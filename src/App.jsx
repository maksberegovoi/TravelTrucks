import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./redux/campersOps.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
