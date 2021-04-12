import React, { useState, useEffect } from "react";
import Header from "./Header";
import Top from "./Top";
import TopMobile from "./TopMobile";
import About from "./About";
import Works from "./Works/";
import Contact from "./Contact";
import "./scss/style.scss";


const App = () => {
  const aosSetting = {
    duration: "2000",
  };
  return (
    <>
      <div className="app">
        <Header />
        <div id="top">
          <Top />
        </div>

        <div id="about">
          <About aosSetting={aosSetting} />
        </div>
        <div id="works">
          <Works aosSetting={aosSetting} />
        </div>
        <dir id="contact">
          <Contact aosSetting={aosSetting} />
        </dir>
      </div>
    </>
  );
};

export default App;
