import React from 'react';


// import Header from '../layouts/header/Header';
import AboutUs from '../sections/about/AboutUs';
import Activity from '../sections/activity/Activity';
import AudioPodcasts from '../sections/audioPodcasts/AudioPodcasts';
import Hero from '../sections/hero/Hero';
import Podcasts from '../sections/podcasts/Podcasts';
import VideoPodcasts from '../sections/videoPodcasts/VideoPodcasts';
import WeeklyChart from '../sections/weeklyChart/WeeklyChart';

const Home = () => {
  return (
    <div className="home">
      {/* <Header/> */}
      {/* <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        effect={"slide"}
      > */}
       <Hero />
      <AboutUs />
        <Podcasts/>
        <Activity/>
        <WeeklyChart/>
        <VideoPodcasts/>
        <AudioPodcasts/>
 
    </div>
  )
}

export default Home;