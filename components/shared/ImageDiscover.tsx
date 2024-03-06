"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

const ImageDiscover = ({
  src,
  width,
  height,
  alt,
  title,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse entered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Mouse left");
  };

  return (
    <div
      className={`overflow-hidden w-[${width}px] h-[${height}px] relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`object-cover transition duration-1000 cursor-pointer w-[${width}px] h-[${height}px] ${
          isHovered ? "scale-125" : ""
        }`}
      />
      <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          className={`bg-white px-4 py-2 text-black rounded hover:bg-black hover:text-white transition duration-300`}
        >
          {title}
        </Button>
      </div>
    </div>
  );
};

export default ImageDiscover;
