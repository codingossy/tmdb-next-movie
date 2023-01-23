import React from 'react'
import TopRatedCard from './TopRatedCard'

const TopRated = ( {topMoviesList}) => {
  return (
    <div className="section">
    <h1 className='uppercase text-2xl font-semibold'>see top rated movies</h1>

    {/* slider here */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-y-10 gap-x-10 place-items-center">
      {topMoviesList?.map((movie) => (
        <>
          <TopRatedCard movie={movie} key={movie.id} />
        </>
      ))}
    </div>
  </div>
  )
}

export default TopRated