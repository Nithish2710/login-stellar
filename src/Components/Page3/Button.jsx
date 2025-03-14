import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`text-m font-bold text-white rounded-xl cursor-pointer bg-blue-950 border-[none] h-[30px] w-[120px] max-sm:w-[90%] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
