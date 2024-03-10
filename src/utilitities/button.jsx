import React from "react";

Button.defaultProps = {
  children: "Enter button name",
  version: "primary",
  isDisable: false,
};

function Button({ children, version, isDisable, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
