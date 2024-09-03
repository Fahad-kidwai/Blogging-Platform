import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-gray-900",
  textColor = "text-[#e4e4e3]",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:bg-gray-500 ${bgColor} ${textColor} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
