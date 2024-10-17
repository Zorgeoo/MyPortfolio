"use client";
import { useState } from "react";

const HoverScrollName = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden w-48 h-12">
      <div
        className={`whitespace-nowrap transition-transform duration-300 ease-in-out transform ${
          isHovered ? "translate-x-[-100%]" : "translate-x-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Your Name</span>
        <span className={`ml-2 ${isHovered ? "inline" : "hidden"}`}>
          Your Nickname
        </span>
      </div>
    </div>
  );
};

export default HoverScrollName;
