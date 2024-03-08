"use client";
import React, { useEffect, useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
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
    <footer>
      <div className="bg-[#F6F6F8] pr-16 pl-16 pt-8 pb-8 justify-between w-full">
        <div
          className={` w-full ${
            sizeDevice === "medium"
              ? "grid grid-cols-2 gap-4"
              : "flex flex-row justify-between"
          }`}
        >
          {/* Logo and Contact Information */}
          <div
            className={` ${sizeDevice === "medium" ? "w-full" : "max-w-[25%]"}`}
          >
            <div className="flex items-center space-x-2 pb-4">
              <div className="text-2xl">
                <CiLocationOn />
              </div>
              <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
            </div>
            <div className="flex items-center space-x-2 pb-4">
              <div className="text-2xl">
                <CiMail />
              </div>
              <span>contact@company.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl">
                <CiPhone />
              </div>
              <span>+001 2233 456</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col space-y-2 ">
            <div className="font-medium">Categories</div>
            <div className="text-[#878787] flex flex-col h-full">
              <div className="pb-2">Men</div>
              <div className="pb-2">Women</div>
              <div className="pb-2">Accessories</div>
              <div className="pb-2">Shoes</div>
              <div className="pb-2">Watch</div>
              <div className="pb-2">Dress</div>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col space-y-2">
            <div className="font-medium">Information</div>
            <div className="text-[#878787] flex flex-col h-full">
              <div className="pb-2">About us</div>
              <div className="pb-2">Contact us</div>
              <div className="pb-2">Terms & Conditions</div>
              <div className="pb-2">Returns & Exchanges</div>
              <div className="pb-2">Shipping & Delivery</div>
              <div className="pb-2">Privacy Policy</div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col space-y-2 ">
            <div className="font-medium">Useful Links</div>
            <div className="text-[#878787] flex flex-col h-full">
              <div className="pb-2">Latest News</div>
              <div className="pb-2">My Account</div>
              <div className="pb-2">Size Guide</div>
              <div className="pb-2">FAQs</div>
              <div className="pb-2">FAQs 2</div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div
            className={`space-y-2  ${
              sizeDevice === "medium" ? "w-full" : "max-w-[25%]"
            }`}
          >
            <div className="font-medium">Newsletter Signup</div>
            <p className="text-[#878787] mb-4">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="flex flex-row border-2 rounded-full p-1">
              <input
                type="email"
                className="border-none outline-none focus:outline-none pl-2 bg-[#F6F6F8] rounded-full w-[50%]"
                placeholder="Enter your email"
              />
              <button
                className={`bg-black text-white p-2 rounded-full hover:bg-gray-900 transition-colors duration-300 w-[40%] ${
                  sizeDevice === "medium" ? "translate-x-8" : "translate-x-8"
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center">
        <div
          className={`w-full wrapper ${
            sizeDevice === "medium"
              ? "flex-center flex-col"
              : "flex-between flex-row"
          }`}
        >
          <div>All Rights Reserved © 2024 Kalles - Developed by The4</div>
          <div
            className={`flex-between flex-row  ${
              sizeDevice === "medium" ? "w-[40%] pt-4" : "w-[20%]"
            }`}
          >
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
