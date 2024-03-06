import { navbarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white p-4">
      {/* logo */}
      <Image
        src="/logo/logo.png"
        alt="logo"
        height={20}
        width={90}
        className="object-contain"
      />
      {/* button navbar */}
      <div className="flex items-center w-[60%]">
        {/* Fixed width container */}
        <div className="flex overflow-x-auto w-full">
          {navbarLinks.map((items, index) => (
            <div
              className="flex items-center justify-center px-4 w-full font-medium"
              key={index}
              style={{ whiteSpace: "nowrap" }}
            >
              {items.title}
            </div>
          ))}
        </div>
      </div>

      {/* login */}
      <div className="flex w-[10%]">
        <div className="flex items-center justify-between w-full">
          <CiSearch className="h-[24px] w-[24px]" />
          <CiUser className="h-[24px] w-[24px]" />
          <CiHeart className="h-[24px] w-[24px]" />
          <CiShoppingCart className="h-[24px] w-[24px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
