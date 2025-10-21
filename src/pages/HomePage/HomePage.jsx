import React from "react";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import heroBg from "../../assets/images/backgrounds/HomePageBg.png";
import { CATALOG_ROUTE } from "../../utils/consts.js";

const HomePage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="h-screen bg-cover bg-no-repeat bg-center text-[var(--color-background)] flex items-center"
    >
      <div className="myContainer flex flex-col justify-start items-start w-full">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Campers of your dreams
        </h1>
        <h2 className="mb-10">You can find everything you want in our catalog</h2>
        <MyButton to={CATALOG_ROUTE}>View Now</MyButton>
      </div>
    </section>
  );
};

export default HomePage;
