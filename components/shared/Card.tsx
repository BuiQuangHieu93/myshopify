"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { CiRead, CiShoppingCart } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Card = ({
  src,
  srcAlt,
  alt,
  status,
  size,
  title,
  price,
  sale,
  color,
}: {
  src: string;
  srcAlt: string;
  alt: string;
  status?: string;
  size: string;
  title: string;
  price: number;
  sale?: number;
  color?: string;
}) => {
  const [readHover, setReadHover] = useState(false);
  const [shoppingHover, setShoppingHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  const CalulatedSale = () => {
    if (sale !== undefined && price !== undefined) {
      return Math.round(((price - sale) / price) * 100);
    }
    return 0;
  };

  return (
    <div className="relative pb-8">
      <div
        className="relative overflow-hidden w-[270px] h-[345px]"
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      >
        {imageHover ? (
          <Image
            src={srcAlt}
            width={270}
            height={345}
            alt={alt}
            className={`object-cover relative h-full w-full ${
              imageHover ? "scale-125" : ""
            }  duration-1000`}
          />
        ) : (
          <Image
            src={src}
            width={270}
            height={345}
            alt={alt}
            className={`object-cover relative h-full w-full ${
              imageHover ? "scale-125" : ""
            }  duration-1000`}
          />
        )}
      </div>
      {status !== "" && (
        <div
          className="absolute top-[40px] right-[0px] transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-green-500"
          onMouseEnter={() => setImageHover(true)}
        >
          <div className="h-12 w-12 text-white flex-center">{status}</div>
        </div>
      )}
      {sale && (
        <div
          className="absolute top-[40px] right-[0px] transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-orange-500"
          onMouseEnter={() => setImageHover(true)}
        >
          <div className="h-12 w-12 text-whilte flex-center">
            -{CalulatedSale()}%
          </div>
        </div>
      )}
      <div
        className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12"
        onMouseEnter={() => setImageHover(true)}
      >
        <div
          className={`h-12 w-12 text-white flex items-center justify-center whitespace-nowrap animate-fade-in duration-200 ${
            imageHover ? "flex" : "hidden"
          }`}
        >
          {size}
        </div>
      </div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 ">
        <div className="flex-center flex-col">
          <Button
            className={`mb-4 bg-white min-w-[108px] rounded-full ${
              imageHover ? "flex" : "hidden"
            }`}
            onMouseEnter={() => {
              setReadHover(true);
              setImageHover(true);
            }}
            onMouseLeave={() => {
              setReadHover(false);
            }}
          >
            {!readHover ? (
              <div className="text-black">Quick view</div>
            ) : (
              <div className="text-2xl">
                <CiRead />
              </div>
            )}
          </Button>
          <Button
            className={`mb-4 bg-white min-w-[108px] rounded-full ${
              imageHover ? "flex" : "hidden"
            }`}
            onMouseEnter={() => {
              setShoppingHover(true);
              setImageHover(true);
            }}
            onMouseLeave={() => {
              setShoppingHover(false);
            }}
          >
            {!shoppingHover ? (
              <div className="text-black">Quick shop</div>
            ) : (
              <div className="text-2xl">
                <CiShoppingCart />
              </div>
            )}
          </Button>
        </div>
      </div>
      {imageHover && (
        <div
          className="absolute top-[40px] left-[40px] transform -translate-x-1/2 -translate-y-1/2 h-12 w-12"
          onMouseEnter={() => setImageHover(true)}
        >
          <div className="flex flex-col">
            <div className="pb-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CiHeart />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to wishlist</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CiShuffle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Compare</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
      <div className="pt-2 text-sm font-medium">{title}</div>
      <div className="flex flex-row">
        <div className={`font-light ${sale ? "line-through" : ""}`}>
          {new Intl.NumberFormat("en", {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
            .format(price)
            .replace(/,/g, ".")}
        </div>
        {sale !== null && (
          <div className={`font-light ${sale ? "text-red-600 pl-2" : ""}`}>
            {sale
              ? new Intl.NumberFormat("en", {
                  useGrouping: true,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                  .format(sale)
                  .replace(/,/g, ".")
              : ""}
            đ
          </div>
        )}
      </div>

      {color && <div>color</div>}
    </div>
  );
};

export default Card;
