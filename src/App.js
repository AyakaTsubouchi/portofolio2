import React, { useState, useEffect } from "react";
import Header from "./Header";
import Top from "./Top";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import "./style.scss";
import styled from "styled-components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div id="top">
        <Top />
      </div>

      <div id="about">
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          // data-aos-once="false"
          data-aos-anchor-placement="top-center">
          <About />
        </div>
      </div>
      <div id="works">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          // data-aos-once="false"
          data-aos-anchor-placement="top-center">
          <Works />
        </div>
      </div>
      <dir id="contact">
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          // data-aos-once="false"
          data-aos-anchor-placement="top-center">
          <Contact />
        </div>
      </dir>
    </div>
  );
};

export default App;
