"use client";
import React, { useEffect, useState } from "react";
import WrapperContainer from "../Wrapper";
import { IoCarSportOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { imageFollow } from "@/constants";

const Follow = () => {
  const [sizeDevice, setSizeDivice] = useState("large"); // Default to 4 items per row

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSizeDivice("large");
      } else if (window.innerWidth >= 768) {
        setSizeDivice("medium");
      } else {
        setSizeDivice("small");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <WrapperContainer
        title="@ FOLLOW US ON INSTAGRAM"
        subtitle="Stay updated with our latest posts and stories"
      >
        <Carousel
          className="w-full flex-center"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1 ">
            {imageFollow.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 flex-center overflow-hidden"
              >
                <div className="p-1 overflow-hidden max-w-[300px]">
                  <Image
                    src={image.imgUrl}
                    height={300}
                    width={300}
                    alt={image.alt}
                    className="object-cover hover:scale-125 duration-500"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex-center">
          <div className="grid md:grid-cols-4 gap-8 pt-16">
            <div className="flex flex-row">
              <div className="text-4xl mr-4">
                <IoCarSportOutline />
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-md text-[#222222]">
                  FREE SHIPPING
                </div>
                <div className="text-sm text-[#878787]">
                  Free shipping on all US order or order above $100
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-4xl mr-4">
                <SlSupport />
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-md text-[#222222]">
                  SUPPORT 24/7
                </div>
                <div className="text-sm text-[#878787]">
                  Contact us 24 hours a day, 7 days a week
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-4xl mr-4">
                <GiReturnArrow />
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-md text-[#222222]">
                  30 DAYS RETURN
                </div>
                <div className="text-sm text-[#878787]">
                  Simply return it within 30 days for an exchange.
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-4xl mr-4">
                <RiSecurePaymentLine />
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-md text-[#222222]">
                  100% PAYMENT SECURE
                </div>
                <div className="text-sm text-[#878787]">
                  We ensure secure payment with PEV
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default Follow;
