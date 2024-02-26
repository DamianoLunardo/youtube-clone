import React, { useRef, useEffect } from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
  const { videoId, categoryId } = useParams();
  const videoRef = useRef(null);

  useEffect(() => {
    // Scrolla quando il video viene caricato
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [videoRef, videoId]);

  return (
    <div className='play-container' ref={videoRef}>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} videoId={videoId}/>
    </div>
  );
};

export default Video;