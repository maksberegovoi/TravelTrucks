import React from "react";
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
      className="text-[var(--color-background)] py-4 px-15
      bg-[var(--color-accent)] rounded-full interactive-button"
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
