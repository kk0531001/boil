import React, { useState, useRef, useEffect } from 'react';
import './VideoPage.css';

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setError('Error loading video. Please try again later.');
      });
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('Play error:', error);
            setError('Error playing video. Please try again.');
          });
      }
    }
  };

  return (
    <div className="video-page">
      <div className="video-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <video 
              ref={videoRef}
              controls 
              className="bio-video"
              src="/biovid.mp4"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="play-overlay" onClick={handlePlayClick}>
                <button className="play-button">▶️ Play Video</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPage; 