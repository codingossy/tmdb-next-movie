import React from "react";
import TodayTvshowsCard from "./TodayTvshowsCard";

const TodayTvShows = ({ upcomingTvShowsList }) => {
  return (
    <div className="section">
      <h1 className="uppercase text-2xl font-semibold">
        tv shows streaming today
      </h1>

      {/* slider here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-y-10 gap-x-10 place-items-center">
        {upcomingTvShowsList.map((movie) => (
          <>
            <TodayTvshowsCard movie={movie} key={movie.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default TodayTvShows;
