import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import MyButton from "./UI/MyButton/MyButton.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <MyButton>Show more</MyButton>
    </BrowserRouter>
  );
}

export default App;
