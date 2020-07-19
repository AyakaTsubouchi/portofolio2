import React, { useState, useEffect } from "react";
import Header from "./Header";
import Top from "./Top";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import "./style.scss";
import styled from "styled-components";
import { useFadeIn } from "./use/useFadeIn";

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

  const {
    visibleSection,
    // scrollTo,
    headerRef,
    aboutRef,
    worksRef,
    contactRef,
  } = useFadeIn();

  const showOnScroll = () => {
    if (
      visibleSection === "About" ||
      visibleSection === "Works" ||
      visibleSection === "Contact"
    ) {
      return "visible";
    } else {
      return "";
    }
  };
  return (
    <div className="app">
      {console.log("visible", showOnScroll())}
      <div ref={headerRef}>
        header
        <Header />
      </div>

      {/* <BackGround opacity={1 - scrAmount / 500}> */}
      <Top style={{ position: "fixed", top: 0 }} />
      {/* </BackGround> */}
      {/* <BackGround opacity={scrAmount / 1000}> */}
      <div className={`test ${showOnScroll()}`} id="About" ref={aboutRef}>
        <About
          style={{ position: "fixed", top: 0 }}
          // visible={visible}
          // aboutRef={aboutRef}
        />
        {/* </div> */}
      </div>
      {/* </BackGround> */}
      <div className={`test ${showOnScroll()}`} id="Works" ref={worksRef}>
        <Works />
      </div>
      <div className={`test ${showOnScroll()}`} id="Contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
