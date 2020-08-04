import React from "react";
import Work1 from "../img/fourcast.png";
import Work2 from "../img/weatherApp.png";
import "materialize-css";
import { Row, Col } from "react-materialize";
import Mymodal from "./Mymodal";
import { workData } from "./data";

const Works = (props) => {
  const duration = props.aosSetting.duration;
  return (
    <>
      {console.log("workdata", workData)}
      <div className="work wrapper">
        <div data-aos="fade-up" data-aos-duration={duration}>
          <h1 className="section-title">WORKS</h1>
        </div>
        <div className="work_contents">
          <div data-aos="fade-up" data-aos-duration={duration}>
            <Row>
              <Col s={12} m={6} l={6} xl={6} className="left-container">
                <div className="work_container">
                  <img
                    src={workData[0].img}
                    alt="work"
                    className="image"
                    style={{ width: "100%" }}
                  />
                  <div className="overlay">
                    <p>{workData[0].title}</p>
                    <p>{workData[0].skill}</p>
                    <Mymodal data={workData[0]} />
                  </div>
                </div>
              </Col>
              <Col s={12} m={6} l={6} xl={6} className="left-container">
                <div className="work_container">
                  <img
                    src={workData[1].img}
                    alt="work"
                    className="image"
                    style={{ width: "100%" }}
                  />
                  <div className="overlay">
                    <p>{workData[1].title}</p>
                    <p>{workData[1].skill}</p>
                    <Mymodal data={workData[1]} />
                  </div>
                </div>
              </Col>
             
            
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
