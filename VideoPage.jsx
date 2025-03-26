import React, { useState, useRef, useEffect } from 'react';
import './VideoPage.css';

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setError('Error loading video. Please try again later.');
      });

      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
  }, []);

  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        // Set volume to 0 initially to avoid autoplay restrictions
        videoRef.current.volume = 0;
        await videoRef.current.play();
        // After successful play, restore volume
        videoRef.current.volume = 1;
        setIsPlaying(true);
      } catch (error) {
        console.error('Play error:', error);
        setError('Error playing video. Please try again.');
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
              preload="none"
              muted
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && isLoaded && (
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