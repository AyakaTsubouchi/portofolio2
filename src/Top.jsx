import React, { useEffect } from "react";
import backgroundImage from "./img/image.jpg";
import logo from "./img/logo.png";

import displacementMapImage from "./img/blur.png";

const Top = () => {
  let windowSize;
  function handleResize() {
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    if (window.innerWidth < 990) {
      windowSize = "mobile";
    }
  }
  // useEffect(() => {
  //   function handleResize() {
  //     console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  //     let windowSize = "thi";
  //     if (window.innerWidth < 990) {
  //       windowSize = "mobile";
  //      console.log(windowSize);
  //     }
  //   }
  //   window.addEventListener("resize", handleResize);

  // },[]);
  // if (windowSize === "mobile") {
  //   return (
  //     <>
  //     {console.log(windowSize)}
  //       <p>this is for mobile</p>
  //     </>
  //   );
  // } else {
  return (
    <>
      {console.log("win", windowSize)}
      <div className="top wrapper">
        <div className="desktop">
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
        <div className="mobile">
          <div className="title-wrapper">
            <h1 className="title">Ayaka</h1>
            <h5 className="subtitle">Frontend Developer</h5>
          </div>
        </div>
      </div>
    </>
  );
};
// };

export default Top;
