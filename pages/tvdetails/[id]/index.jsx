import axios from "axios";
import React from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import { serverTv } from "../../../db";

const SingleTvCard = ({ TvShowDetails }) => {
//   console.log(TvShowDetails);

  return (
    <Layout>
      <section className="text-white">
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 items-center justify-between">
          <div className="w-full">
            <Image
              alt="movie image"
              src={`https://image.tmdb.org/t/p/original${TvShowDetails.backdrop_path}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full md:h-screen"
            />
          </div>

          <div className="w-full capitalize">
            <h4 className="my-4 text-2xl font-semibold">
              {TvShowDetails.name}
            </h4>
            <p className="text-gray-600 text-sm mb-5">
              Release Date:
              <span className="font-bold">{TvShowDetails.first_air_date}</span>
            </p>
            <div className="flex flex-col gap-y-2">
              <p>seasons: {TvShowDetails.seasons[0]?.name}</p>
              <p>
                number of episodes: {TvShowDetails.seasons[0]?.episode_count}
              </p>
              <p>status: {TvShowDetails.status}</p>
              <p>last air date: {TvShowDetails.last_air_date}</p>
              <p>Type: {TvShowDetails.type}</p>
              <p>genre: {TvShowDetails.genres[0].name}</p>
              <p>genre: {TvShowDetails.genres[1]?.name}</p>
              <p>genre: {TvShowDetails.genres[2]?.name}</p>

            </div>

            <div className="my-4 flex flex-col gap-y-2 ">
              <p>Rating: {TvShowDetails.vote_average}</p>
              <p>Language: {TvShowDetails.original_language}</p>
              <p>popular: {TvShowDetails.popularity}</p>
              <p>last air date: {TvShowDetails.last_air_date}</p>
              <p>
                production company: {TvShowDetails.production_companies[0]?.name}
              </p>
            </div>

            <div>
              <p>Network/Owner: {TvShowDetails.networks[0]?.name}</p>
              <p>created by: {TvShowDetails.created_by[0]?.name}</p>
              <p>created by: {TvShowDetails.created_by[1]?.name}</p>
            </div>

            <p className="my-5 text-sm max-w-[400px] leading-7">
              {TvShowDetails.overview}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${serverTv}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res2 = await fetch(
    `${serverTv}/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res3 = await fetch(
    `${serverTv}/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
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
    `${serverTv}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const tvShows = await res.json();

  return {
    props: {
      TvShowDetails: tvShows,
    },
  };
};

export default SingleTvCard;
