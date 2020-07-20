import React from "react";
import Image from "./img/aboutPic.jpg";
import "materialize-css";
import { Row, Col, Container } from "react-materialize";

const About = () => {
  return (
    <>
      <div className="about container">
        {/* <h1 className={`section-name ${visible}`} ref={aboutRef}> */}

        <h1 className="section-name">ABOUT</h1>

        <Container className="aboutContents">
          <Row className="aboutContents">
            <Col s={1} m={6} l={6} xl={6} className="left-container">
              <img src={Image} alt="ayaka" />
            </Col>
            <Col s={1} m={6} l={6} xl={6} className="right-container">
              <div className="text-area">
                <h2>Aya</h2>
                <h4>Web Deisgner / Developera</h4>
                <div className="spacer"></div>
                <p>
                  Nice meet you. My specialty is solving problems through
                  frontend development writing readable clean codes.(I'm
                  planning to be that kind of programmer) The infinite potential
                  and complex diversity of web technologies jerked my curiosity
                  to know overwhelming ideas and technologies when I learned how
                  to make a website.
                </p>
                <div className="spacer"></div>
                <div className="spacer"></div>
                <h4>SKILLS</h4>
                <p>
                  Languages Mainly writing TypeScript for React with VS
                  Code.HTML & CSS /JavaScript HTML & CSS /JavaScript/GitHub/
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
