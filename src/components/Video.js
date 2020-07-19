import React, { useRef, useEffect } from "react";
import bgVideo from "../assets/alea.mp4";
import "../styles.css";

const Video = () => {

  const videoRef = useRef();

  const setUpVideo =()=>{
    videoRef.current.preload='auto'
    videoRef.current.play()
    videoRef.current.loop=true

  }
 
  useEffect(() => {
      console.log('videoRef',videoRef)
    setUpVideo()
}, []);

  return (
    <video ref={videoRef} src={bgVideo} type="video/mp4" id="siteVideo" />
  );
};

export default Video;
