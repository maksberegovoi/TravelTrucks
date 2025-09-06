import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CATALOG_ROUTE, HOME_ROUTE } from "../../utils/consts.js";
import Logo from "../../UI/Logo/Logo.jsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link to={HOME_ROUTE} className={styles.link}>
        <Logo />
      </Link>
      <nav className={styles.navbar}>
        <NavLink
          to={HOME_ROUTE}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to={CATALOG_ROUTE}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
