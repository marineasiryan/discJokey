import React, { useEffect, useRef, useState } from "react";
import VideoCard from "../../components/videoCard/VideoCard";

const VideoPodcasts = () => {
  //   const [showVideo, setShowVideo] = useState(false);
  //   const videoRef = useRef(null);

  //   const handleClick = () => {
  //     setShowVideo(true);
  //   };

  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       if (videoRef.current && !videoRef.current.contains(event.target)) {
  //         setShowVideo(false);
  //       }
  //     };

  //     if (showVideo) {
  //       document.addEventListener("mousedown", handleOutsideClick);
  //     }

  //     return () => {
  //       document.removeEventListener("mousedown", handleOutsideClick);
  //     };
  //   }, [showVideo]);
  return (
    <div className="videoPodcasts">
      <div className="container">
        <h2 className="heading_primary heading_primary--lcenter">
          {" "}
          Video podcasts
        </h2>
        <div className="videos">
          <div className="video_item">
            <VideoCard
              image="https://cdn.shopify.com/s/files/1/0526/6731/8431/files/Shadow_live_1400x.jpg?v=1613237916"
              textTop="Sunday 9th May"
              textBottom="Robert May"
              headingBottom="PerfectBeat Records, USA"
              videoLink="https://www.youtube.com/embed/_TzKk0kyX7w"
            />
          </div>
          <div className="video_item">  <VideoCard
              image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/04/28/09/Rashad.JPG?quality=75&width=982&height=726&auto=webp"
              textTop="To close the"
              textBottom="Robert May"
              headingBottom="PerfectBeat Records, USA"
              videoLink="https://www.youtube.com/embed/_TzKk0kyX7w"
            /></div>
          <div className="video_item">  <VideoCard
              image="https://media.pitchfork.com/photos/5931d52731bcdd124292a9a4/master/w_658,h_520,c_limit/191183da.jpg"
              textTop="Friday 9th January"
              textBottom="In this example"
              headingBottom="PerfectBeat Records, USA"
              videoLink="https://www.youtube.com/embed/_TzKk0kyX7w"
            /></div>
          <div className="video_item">  <VideoCard
              image="https://cdn.shopify.com/s/files/1/0526/6731/8431/files/Shadow_live_1400x.jpg?v=1613237916"
              textTop="For the video"
              textBottom="Before to center "
              headingBottom="PerfectBeat Records, USA"
              videoLink="https://www.youtube.com/embed/_TzKk0kyX7w"
            /></div>
        </div>
      </div>
      {/* {showVideo && (
        <>
        <div className="overlay"></div>
        <div  ref={videoRef} className="videoContainer">
          <iframe
          
            width="800"
            height="450"
            src="https://www.youtube.com/embed/_TzKk0kyX7w"
            title="YouTube video player"
            // allow="autoplay;  picture-in-picture"
            allowFullScreen
          />
        </div>
        </>
      )} */}
    </div>
  );
};

export default VideoPodcasts;
