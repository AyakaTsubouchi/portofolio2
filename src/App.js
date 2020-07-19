import React, { useState, useEffect } from "react";
import Header from "./Header";
import Top from "./Top";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import "./style.scss";
import styled from "styled-components";

const BackGround = styled.div`
  /* if true, button will be visible */
  background-color: #0d2021;
  opacity: ${(props) => props.opacity};
`;

const App = () => {
  // const [scrAmount, setScrAmount] = useState(0);
  // const listenScrollEvent = (e) => {
  //   setScrAmount(window.scrollY);
  // };

  // useEffect(() => {
  //   // window.addEventListener("scroll", listenScrollEvent);
  //   console.log(scrAmount);
  //   window.addEventListener("scroll", listenScrollEvent);
  //   console.log(window.scrollY);
  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);
  return (
    <div className="app">
      <Header />
      {/* <BackGround opacity={1 - scrAmount / 500}> */}
      <Top style={{ position: "fixed", top: 0 }} />
      {/* </BackGround> */}
      {/* <BackGround opacity={scrAmount / 1000}> */}
      <About style={{ position: "fixed", top: 0 }} />
      {/* </BackGround> */}
      <Works />

      <Contact />
    </div>
  );
};

export default App;
