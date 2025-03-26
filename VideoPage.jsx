import React, { useState, useRef } from 'react';
import './VideoPage.css';

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video-page">
      <div className="video-container">
        <video 
          ref={videoRef}
          controls 
          className="bio-video"
          src="/biovid.mp4"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="play-overlay" onClick={handlePlayClick}>
            <button className="play-button">▶️ Play Video</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPage; 