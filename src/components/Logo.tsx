
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-full p-1">
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 2L4 6V18L12 22L20 18V6L12 2Z" 
            fill="#8A63D2" 
            stroke="white" 
            strokeWidth="1"
          />
          <path 
            d="M12 7L7 9.5V15L12 17.5L17 15V9.5L12 7Z" 
            fill="white" 
            stroke="#8A63D2" 
            strokeWidth="1"
          />
        </svg>
      </div>
      <span className="font-bold text-white text-xl hidden sm:block">CompanyName</span>
    </div>
  );
};

export default Logo;
