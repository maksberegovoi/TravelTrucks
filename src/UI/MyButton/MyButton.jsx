import React from "react";
import styles from "./MyButton.module.css";
import { useNavigate } from "react-router-dom";

const MyButton = ({
  children,
  className = "",
  handleClick,
  to,
  type = "button",
  ...props
}) => {
  const navigate = useNavigate();

  const onClick = e => {
    if (handleClick) {
      handleClick(e);
    }
    if (to && !e.defaultPrevented) {
      navigate(to);
    }
  };

  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
