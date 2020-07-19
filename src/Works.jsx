import React from "react";
import Work1 from "./images/fourcast.png";
import Work2 from "./images/weatherApp.png";
import "materialize-css";
import { Row, Col, Container } from "react-materialize";

const Works = () => {
  return (
    <>
      <div className="work container">
        <h1 className="section-title">WORKS</h1>

        <div className="work_contents">
          <div className="work_container">
            <img
              src={Work1}
              alt="work"
              className="image"
              style={{ width: "100%" }}
            />
            <div className="overlay">
              <i className="material-icons">insert_link</i>
              <p>Fourcast</p>
            </div>
          </div>
          <div className="work_container">
            <img
              src={Work2}
              alt="work2"
              className="image"
              style={{ width: "100%" }}
            />
            <div className="overlay">
              <i className="material-icons">insert_link</i>
              <p>weather app</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
