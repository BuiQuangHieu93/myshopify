"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoIosRadioButtonOff } from "react-icons/io";
import { slider } from "@/constants";
import { Button } from "../ui/button";

function Slider() {
  const slides = slider;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

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
        <div className="font-semibold text-3xl">
          {slides[currentIndex].title}
        </div>
        <div className="font-bold text-6xl">
          {slides[currentIndex].subtitle}
        </div>
        <Button className="mt-4 hover:bg-green-500 duration-500">
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Slider;
