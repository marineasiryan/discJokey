import React, { useEffect, useRef, useState } from "react";

const VideoCard = ({image, textTop, textBottom, headingBottom, videoLink}) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showVideo]);

  return (
    <div onClick={handleClick} className="videoCard">
      <img src={image} />
      <div  className="videoCard_block">
        <p className="text_primary">{textTop}</p>
        <div className="title_bottom">
          <p className="heading_secondary">{textBottom}</p>
          <p className="text_primary--l">{headingBottom}</p>
        </div>
      </div>
      {showVideo && (
        <>
        <div className="overlay"></div>
        <div  ref={videoRef} className="videoContainer">
          <iframe
          
            width="800"
            height="450"
            src={videoLink}
            title="YouTube video player"
            // allow="autoplay;  picture-in-picture"
            allowFullScreen
          />
        </div>
        </>
      )}
   
    </div>
  );
};

export default VideoCard;