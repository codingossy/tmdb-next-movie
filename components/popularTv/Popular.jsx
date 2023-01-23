import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import PopularCard from "./PopularCard";

const Popular = ({ popularTvShowsList }) => {
  const [current, setCurrent] = useState(0);
  const length = popularTvShowsList.length;
  const timeout = useRef(null);

  // to set the loading auto
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 10000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(popularTvShowsList) || popularTvShowsList.length <= 0) {
    return null;
  }

  //   functuion for the dots slide
  const dotsSlider = (slide) => {
    setCurrent(slide);
  };

  return (
    <div className="text-white">
      {/* slider here */}
      <div className="relative w-full h-[75vh] flex justify-center p-4 my-10">
        {popularTvShowsList.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "transition-all ease-in duration-1000"
                  : "opacity-0"
              }
            >
              {index === current && (
                <div className="w-full h-full">
                  <PopularCard slide={slide} key={slide.id} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* slider dots */}

      <div className="flex flex-wrap gap-y-5 items-center justify-center gap-x-2 py-1 mb-10 top-4">
        {popularTvShowsList.map((slides, slidesId) => (
          <div key={slidesId}>
            <RxDotFilled
              onClick={() => dotsSlider(slidesId)}
              className="text-xl cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
