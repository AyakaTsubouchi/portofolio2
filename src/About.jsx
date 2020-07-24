import React from "react";
import Image from "./img/aboutPic.jpg";
import "materialize-css";
import { Row, Col, Container } from "react-materialize";
import { createRenderer } from "react-dom/test-utils";

const About = (props) => {
  const duration = props.aosSetting.duration;
  return (
    <>
      <div className="about container">
        <div data-aos="fade-up" data-aos-duration={duration}>
          <h1 className="section-title">About</h1>
        </div>
        <Container className="aboutContents">
          <div data-aos="fade-up" data-aos-duration={duration}>
            <Row>
              <Col s={12} m={6} l={6} xl={6} className="left-container">
                <img src={Image} alt="ayaka" />
              </Col>
              <Col s={12} m={6} l={6} xl={6} className="right-container">
                <div className="text-area">
                  <div className="title">
                    <h3>Ayaka</h3>

                    <p>Front-End Developer</p>
                  </div>

                  <div className="spacer"></div>
                  <p>
                    Skilled in JavaScript, React, Redux, jQuery, Node.js, Java,
                    HTML5, CSS3, SaSS.　
                  </p>
                  <br />
                  <p>
                    I am a front-end developer who is passionate about building
                    in JavaScript (including React).
                  </p>
                  <div className="spacer"></div>
                  <div className="spacer"></div>
                  <h4>SKILLS</h4>
                  <p>
                    Languages Mainly writing Javascript for React with VS
                    Code.HTML & CSS /JavaScript HTML & CSS /JavaScript/GitHub/
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
