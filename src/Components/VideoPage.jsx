import React from 'react';
import './VideoPage.css';

const VideoPage = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video 
          controls 
          autoPlay 
          className="bio-video"
          src="/biovid.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage; 