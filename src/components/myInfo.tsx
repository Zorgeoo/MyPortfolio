"use client";
import Image from "next/image";
import { useState } from "react";

const MyInfo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="h-10 w-fit overflow-hidden">
              <div
                className={`cursor-pointer duration-300 text-4xl font-bold h-[200%] ease-in-out ${
                  isHovered ? "-translate-y-10" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div>Э.Энхзориг</div>
                <div>Зоригоо</div>
              </div>
            </div>
            <div>Front-end Developer</div>
          </div>
          <div>Love to build</div>
        </div>
        <div className="relative w-40 h-40 first-letter: border rounded-full overflow-hidden">
          <Image alt="" src={"/me.jpg"} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
