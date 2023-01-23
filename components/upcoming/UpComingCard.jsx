import React from "react";
import Image from "next/image";
import Link from "next/link";

const UpComingCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref className="w-full h-full">
      <div className="w-full h-full border p-2 border-gray-500">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md transition-all ease-in-out duration-300 hover:scale-95 w-full h-56 object-cover"
          alt={movie.title}
        />

        <div className="py-2 text-center">
          <h1 className="text-center text-xl">{movie.title}</h1>
          <p className="text-center text-sm text-blue-500">release date: {movie.release_date}</p>
          <p>rating: {movie.vote_average}</p>
          <p>adult: {movie.adult}</p>
        </div>
      </div>
    </Link>
  );
};

export default UpComingCard;
