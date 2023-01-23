import React from "react";
import Layout from "../../components/layout/Layout";
import Popular from "../../components/popularMovie/Popular";
import UpComing from "../../components/upcoming/UpComing";
import { server } from "../../db";
import { ApiData } from "../../utilss/ApiData";

const AllMoviesList = ({ upcomingMoviesList }) => {
  return (
    <Layout>
      <div className="my-20">
        <UpComing upcomingMoviesList={upcomingMoviesList} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const upComingMovies = await ApiData(
    `${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      upcomingMoviesList: upComingMovies?.results,
    },
  };
};

export default AllMoviesList;
