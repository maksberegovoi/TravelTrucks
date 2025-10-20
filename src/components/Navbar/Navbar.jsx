import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CATALOG_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../../utils/consts.js";
import Logo from "../../UI/Logo/Logo.jsx";

const Navbar = () => {
  return (
    <header className="flex items-center sticky top-0 w-full bg-[var(--color-background)] px-16">
      <Link to={HOME_ROUTE} aria-label="Go to homepage">
        <Logo />
      </Link>
      <nav className="flex gap-10 grow justify-center items-center pt-6 pb-6">
        <NavLink to={HOME_ROUTE} className="interactive">
          Home
        </NavLink>
        <NavLink to={CATALOG_ROUTE} className="interactive ">
          Catalog
        </NavLink>
        <NavLink to={FAVOURITES_ROUTE} className="interactive ">
          Favourites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
