"use client";

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoIosRadioButtonOff } from "react-icons/io";
import { slider } from "@/constants";
import { Button } from "../ui/button";

function Slider() {
  const slides = slider;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setKey((prevKey) => prevKey + 1); // Update key to trigger animation
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setKey((prevKey) => prevKey + 1); // Update key to trigger animation
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setKey((prevKey) => prevKey + 1); // Update key to trigger animation
  };

  useEffect(() => {
    // Increment key to force remount of Button component
    setKey((prevKey) => prevKey + 1);
  }, [currentIndex]);

  return (
    <div className="w-full h-[780px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imgUrl})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center my-[-40px]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-xl cursor-pointer pl-2"
          >
            <IoIosRadioButtonOff />
          </div>
        ))}
      </div>
      <div
        className={`group-hover:block absolute -translate-x-0 translate-y-[-50%] ${
          currentIndex % 2 === 0 ? "left-40" : "right-40"
        }  top-[50%]`}
      >
        <div
          className="font-semibold text-3xl animate-slide-in-left"
          key={`title-${key}`}
        >
          {slides[currentIndex].title}
        </div>
        <div
          className="font-bold text-6xl animate-slide-in-right"
          key={`subtitle-${key}`}
        >
          {slides[currentIndex].subtitle}
        </div>
        <Button
          key={key} // Add key to Button component
          className="mt-4 hover:bg-green-500 duration-1000 animate-fade-in-up"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Slider;
