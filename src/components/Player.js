import React from 'react';
import { Player } from 'video-react';
import video from "../splash_video/splash.mp4"

const Playerr = (props) => {
  
  return (
    <div className="video_splash">
      <video muted loop autoPlay width="100%" height="100%">
        <source src={video} type="video/mp4" />
      </video>
    </div>

    // <div>
    //   <Player
    //     fluid="true"
    //     muted="true"
    //     autoPlay="true"
    //     playsInline
    //     poster="../assets/logo.png"
    //     src={video}
    //   />
    // </div>
  )
}

export default Playerr