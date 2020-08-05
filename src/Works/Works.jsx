import React from "react";
import Work1 from "../img/fourcast.png";
import Work2 from "../img/weatherApp.png";
import "materialize-css";
import { Row, Col } from "react-materialize";
import Mymodal from "./Mymodal";
import BlogList from "./BlogList";

import WorkList from "./WorkList";

const Works = (props) => {
  const duration = props.aosSetting.duration;
  return (
    <>
      <div className="work wrapper">
        <div data-aos="fade-up" data-aos-duration={duration}>
          <h1 className="section-title">WORKS</h1>
        </div>
        <div className="work_contents">
          <div data-aos="fade-up" data-aos-duration={duration}>
            <h5>PROJECTS</h5>
            <Row>
              <WorkList />
            </Row>
          </div>
          <div data-aos="fade-up" data-aos-duration={duration}>
            <h5>BLOG</h5>
            <Row>
              <BlogList />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
