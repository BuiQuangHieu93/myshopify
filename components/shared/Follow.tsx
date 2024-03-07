import React from "react";
import WrapperContainer from "../Wrapper";
import { IoCarSportOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Image from "next/image";

const Follow = () => {
  return (
    <>
      <WrapperContainer
        title="@ FOLLOW US ON INSTAGRAM"
        subtitle="Stay updated with our latest posts and stories"
      >
        <div className="grid grid-cols-6 gap-1 mb-8">
          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins1.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>

          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins2.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>
          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins3.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>
          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins4.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>
          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins5.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>
          <div className="overflow-hidden w-[210px] h-[210px] relative">
            <Image
              src="/images/ins6.jpg"
              height={300}
              width={300}
              alt="ins"
              className="object-cover hover:scale-125 duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
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
      </WrapperContainer>
    </>
  );
};

export default Follow;
