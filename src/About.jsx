import React from "react";
import Image from "./img/aboutPic.jpg";
import "materialize-css";
import { Row, Col, Container } from "react-materialize";

const aboutData = {
  skill: [
    "JavaScript",
    "React",
    "Redux",
    "jQuery",
    " Node.js",
    " HTML5",
    "CSS3",
    "SaSS",
  ],
};

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
                  <Row>
                    <div className="title">
                      <h3>Ayaka Tsubouchi</h3>

                      <p>Front-End Developer</p>
                    </div>
                    <p>
                      I am a front-end developer who is passionate about
                      building in JavaScript. I Keep in mind to write readable
                      and maintainable code.
                    </p>
                    <Row className="about-specialties-row">
                      <h4>Specialties</h4>
                      <ul>
                        <li>
                          <i class="fab fa-react"></i>
                          <p>react.js</p>
                        </li>
                        <li>
                          <i class="fab fa-js-square"></i>
                          <p>JavaScript</p>
                        </li>
                      </ul>
                    </Row>
                  </Row>
                  <Row>
                    <h4>Other Skills</h4>
                    <ul>
                      {aboutData.skill.map((item) => (
                        <>
                          <li>{item}</li>
                        </>
                      ))}
                    </ul>
                  </Row>
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
