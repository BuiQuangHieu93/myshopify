"use client";

import React, { useState } from "react";
import WrapperContainer from "../Wrapper";
import Image from "next/image";

const BannerHolder = () => {
  const [imageHover, setImageHover] = useState(false);
  const [imageHover1, setImageHover1] = useState(false);
  return (
    <>
      <WrapperContainer>
        <div className="grid grid-cols-2 gap-24">
          <div
            className="relative flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          >
            <Image
              src="/images/lookBook.jpg"
              height={300}
              width={600}
              alt="lookbook"
              className={`w-[600px] h-[300px] object-cover duration-1000 ${
                imageHover ? "scale-125 rotate-12" : ""
              }`}
            />

            <div className="absolute text-center">
              <div className="font-medium text-3xl text-white">
                Lookbook 2023
              </div>
              <div className="font-medium text-md text-white">
                Make love this look
              </div>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setImageHover1(true)}
            onMouseLeave={() => setImageHover1(false)}
          >
            <Image
              src="/images/summerSale.jpg"
              height={300}
              width={600}
              alt="lookbook"
              className={`w-[600px] h-[300px] object-cover duration-1000 ${
                imageHover1 ? " -translate-y-4" : ""
              }`}
            />
            <div className="absolute text-center">
              <div className="text-white text-xl font-medium">SUMMER SALE</div>
              <div className="text-white text-5xl font-medium">UP TO 70%</div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default BannerHolder;
