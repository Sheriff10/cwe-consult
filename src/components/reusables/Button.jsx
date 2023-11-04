import React from "react";

const Button = ({ text, textColor, hoverColor, bgColor, icon }) => {
  return (
    <button
      className={`px-8 py-1.5 rounded font-medium ${bgColor} ${textColor}  ${hoverColor}`}
    >
      <span className="flex items-center gap-2">
        {icon}
        {text}
      </span>
    </button>
  );
};

export default Button;
