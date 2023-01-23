import axios from "axios";
import React from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import { server } from "../../../db";




const SingleMovieCard = ({ movieList }) => {
  // console.log(movieList);
  return (
    <Layout>
      <section className="text-white">
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 items-center justify-between">
          <div className="w-full">
            <Image
              alt="movie image"
              src={`https://image.tmdb.org/t/p/original${movieList.backdrop_path}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full capitalize">
            <h4 className="my-4 text-2xl font-semibold">{movieList.title}</h4>
            <p className="mt-5 text-gray-600 text-sm">
              Genres:
              <span className="font-bold">
                {movieList.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="text-gray-600 text-sm mb-5">
              Release Date:
              <span className="font-bold">{movieList.release_date}</span>
            </p>
            <p>Rating: {movieList.vote_average}</p>
            <p>Language: {movieList.original_language}</p>
            <p>popular: {movieList.popularity}</p>

            <p className="my-5 text-xs max-w-[400px] leading-7">{movieList.overview}</p>
            
          </div>
        </div>

      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res2 = await fetch(
    `${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res3 = await fetch(
    `${server}/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();
  const paths1 = data.results.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });

  const data2 = await res2.json();
  const paths2 = data2.results.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });

  const data3 = await res3.json();
  const paths3 = data3.results.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });

  // use spread operator to get each keys
  return {
    paths: [...paths1, ...paths2, ...paths3],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = await res.json();

  return {
    props: {
      movieList: movie,
    },
  };
};

export default SingleMovieCard;
