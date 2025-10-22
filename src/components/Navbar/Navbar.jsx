import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CATALOG_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE } from "../../utils/consts.js";
import Logo from "../../UI/Logo/Logo.jsx";
import Modal from "../Modal/Modal.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: HOME_ROUTE },
    { name: "Catalog", path: CATALOG_ROUTE },
    { name: "Favourites", path: FAVOURITES_ROUTE },
  ];

  return (
    <header className="myContainer flex items-center justify-between sticky top-0 w-full bg-[var(--color-background)] z-100 border-b border-gray-300">
      <Link to={HOME_ROUTE} aria-label="Go to homepage" className="py-6">
        <Logo />
      </Link>
      <nav className="hidden md:flex gap-10 grow justify-center items-center ">
        {navLinks.map(({ name, path }) => (
          <NavLink key={path} to={path} className="interactive">
            {name}
          </NavLink>
        ))}
      </nav>
      <button onClick={toggleMenu} className="md:hidden cursor-pointer active:scale-110">
        <svg className="w-[25px] h-[25px]" id="icon-burger-menu" viewBox="0 0 24 24">
          <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" />
        </svg>
      </button>
      <Modal isOpen={isOpen} onClose={toggleMenu}>
        <nav className="flex flex-col gap-10 grow justify-center items-center bg-[var(--color-background)] py-25 px-10">
          {navLinks.map(({ name, path }) => (
            <NavLink
              onClick={() => toggleMenu()}
              key={path}
              to={path}
              className="interactive"
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </Modal>
    </header>
  );
};

export default Navbar;
