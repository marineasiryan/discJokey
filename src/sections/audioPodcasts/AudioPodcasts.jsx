import React from "react";
import AboutInfo from "../../info_text.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AboutUsInfo from "../../components/AboutUsInfo";
import Podcasts from '../podcasts/Podcasts';
import ReactAudioPlayer from 'react-audio-player';

const AudioPodcasts = () => {
  console.log(AboutInfo);
  return (
    <div className="aboutPodcasts">
      <div className="aboutPodcasts_block">
      </div>

      <div className="podcasts_info">
       
        <div className="audio">
          <ReactAudioPlayer 
            autoPlay
            controls
            src="../../im"
          />

        </div>
        <div className="audio">
          <ReactAudioPlayer
            autoPlay
            controls
          />
        </div>
        <div className="audio">
          <ReactAudioPlayer 
            autoPlay
            controls
          />
        </div>
        <div className="audio">
          <ReactAudioPlayer 
            autoPlay
            controls
          />

        </div>
        <div className="audio">
          <ReactAudioPlayer 
            autoPlay
            controls
          />

        </div>  
        <div className="audio">
          <ReactAudioPlayer 
            autoPlay
            controls
          />

        </div>
      </div>
    </div>
  );
};

export default AudioPodcasts;
