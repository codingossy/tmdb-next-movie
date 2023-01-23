import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ slide }) => {
  return (
    <Link
      href={`/tvdetails/${slide.id}`}
      passHref
      className="w-screen h-full relative"
    >
      <Image
        alt="movie poster"
        src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
        width={1000}
        height={1000}
        className="object-cover h-[75vh] w-screen"
      />

      <div className="flex items-center justify-center">
        <h1 className="absolute bottom-10 text-2xl md:text-3xl font-semibold text-white">
          {slide.original_name}
        </h1>
      </div>
    </Link>
  );
};

export default PopularCard;
