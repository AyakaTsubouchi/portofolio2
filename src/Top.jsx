import React from "react";

import backgroundImage from "./img/image.jpg";
import logo from "./img/logo.png";
// import logo from "./img/shtick-logo-wit.png";

import displacementMapImage from "./img/blur.png";

const Top = () => {
  return (
    <>
      <div className="top wrapper">
        <img
          src={displacementMapImage}
          id="displacementMap"
          className="asset"
        />
        <div
          style={{
            width: "100%",
            position: "absolute",
            textAlign: "center",
            zIndex: -1,
          }}>
          <img src={logo} id="logoImage" className="logo" />
        </div>
        <img src={backgroundImage} id="headerImage" className="headerImage" />
        {/* <div className="top-title">
          <p className="name">Ayaka</p>
          <p>A frontend developer</p>
        </div> */}
        <div className="scroll-down">
          <p>scroll down →</p>
        </div>
      </div>
    </>
  );
};

export default Top;
