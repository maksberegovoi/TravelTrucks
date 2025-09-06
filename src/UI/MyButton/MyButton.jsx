import React from "react";
import styles from "./MyButton.module.css";

const MyButton = ({ children, handleClick }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MyButton;
