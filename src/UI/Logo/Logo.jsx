import React from "react";
import logo from "../../assets/icons/logo.svg";

const Logo = ({ alt = "Travel Trucks Logo", ...imgProps }) => (
  <img src={logo} alt={alt} {...imgProps} />
);

export default Logo;
