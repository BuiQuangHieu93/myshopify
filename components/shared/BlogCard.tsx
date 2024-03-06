"use client";
import Image from "next/image";
import React, { useState } from "react";

const BlogCard = ({
  src,
  alt,
  title,
  author,
  date,
  des,
}: {
  src: string;
  alt: string;
  title: string;
  author: string;
  date: string;
  des: string;
}) => {
  const [imageHover, setImageHover] = useState(false);
  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        {/* Container for image and lines */}
        <div
          className="relative h-[266px] w-[400px]"
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          {/* Image */}
          <Image
            src={src}
            height={266}
            width={400}
            alt={alt}
            className={`object-cover relative ${
              imageHover ? "scale-125" : ""
            } duration-500`}
          />
          {}
          <div>
            {/* Top left to top right line */}
            <div
              className={`absolute top-[10%] left-[10%] w-0 h-0 border-t-2 border-white duration-500 ${
                imageHover ? "w-[80%]" : ""
              }`}
            ></div>

            {/* Top right to bottom right line */}
            <div
              className={`absolute top-[10%] right-[10%] w-0 h-0 border-r-2 border-white duration-500 ${
                imageHover ? "h-[80%]" : ""
              }`}
            ></div>
            {/* Bottom right to bottom left line */}
            <div
              className={`absolute bottom-[10%] right-[10%] w-0 h-0 border-b-2 border-white duration-500 ${
                imageHover ? "w-[80%]" : ""
              }`}
            ></div>
            {/* Bottom left to top left line */}
            <div
              className={`absolute bottom-[10%] left-[10%] w-0 h-0 border-l-2 border-white duration-500 ${
                imageHover ? "h-[80%]" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="font-medium pb-2">{title}</div>
      <div className="text-sm font-light text-[#878787] pb-2">
        By <span className="text-[#222222]">{author}</span> on{" "}
        <span className="text-[#222222]">{date}</span>
      </div>
      <div className="text-sm font-light text-[#878787]">{des}</div>
    </div>
  );
};

export default BlogCard;
