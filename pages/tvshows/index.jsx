import React from 'react'
import Layout from '../../components/layout/Layout'
import Popular from '../../components/popularTv/Popular'
import TopRatedTv from '../../components/topratedTv/TopRatedTv'
import TodayTvShows from '../../components/upcomingTv/TodayTvShows'
import { server, serverTv } from '../../db'
import { ApiData } from '../../utilss/ApiData'

const Tvshows = ( {topTvShowsList, upcomingTvShowsList, popularTvShowsList }) => {
    // console.log(upcomingTvShowsList)
  return (
    <Layout>
        <Popular popularTvShowsList={popularTvShowsList} />
        <TodayTvShows upcomingTvShowsList={upcomingTvShowsList} />
        <TopRatedTv  topTvShowsList={topTvShowsList} />
    </Layout>
  )
}

export default Tvshows




export const getStaticProps = async () => {
    const topTvShows = await ApiData(`${serverTv}/top_rated?api_key=${process.env.API_KEY}&language=en-US`)
  
    const popularTvShows = await ApiData(`${serverTv}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  
    const upComingTvShows = await ApiData(`${serverTv}/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  
  
    
  
    return{
      props: {
        topTvShowsList: topTvShows?.results,
        popularTvShowsList: popularTvShows?.results,
        upcomingTvShowsList: upComingTvShows?.results,
    
      }
    }
  }