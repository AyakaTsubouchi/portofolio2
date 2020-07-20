import React from "react";

import backgroundImage from "./img/bg.svg";
import logo from "./img/PngItem_578268.png";
import displacementMapImage from "./img/displacement_map_blurred.png";

const Top = () => {
  return (
    <>
      <img src={displacementMapImage} id="displacementMap" className="asset" />
      <div style={{ width: "100%", position: "absolute", textAlign: "center" }}>
        <img src={logo} id="logoImage" className="logo" />
      </div>
      <img src={backgroundImage} id="headerImage" className="headerImage" />
    </>
  );
};

export default Top;

// https://blog.logrocket.com/animations-with-react-spring/
// https://blog.yuhiisk.com/archive/2017/04/13/svg-icon-on-react.html
