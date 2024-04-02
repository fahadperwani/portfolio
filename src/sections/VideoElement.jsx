import React, { useRef, useState } from "react";

function VideoElement() {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsHovered(false);
    }
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        width="360"
        height="100%"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        muted
        controls
        className={`hover:scale-150 transition-all ${
          !isHovered ? "hidden" : "block"
        }`}
        poster={require("../ss.png")}
      >
        <source src={require("../project.mp4")} type="video/mp4" />
      </video>
      {!isHovered && (
        <img
          src={require("../ss.png")}
          width="360"
          className="h-full object-cover rounded-md"
          alt=""
        />
      )}
    </div>
  );
}

export default VideoElement;
