import React from "react";
import { Col } from "react-materialize";
import { blogData } from "./data";
import Mymodal from "./Mymodal";

const WorkList = () => {
  const data = blogData;
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Col s={12} m={6} l={6} xl={6}>
              <div className="blog_container">
                <img src={item.img} alt="work" className="image" />
                <div className="overlay">
                  <h5>{item.title}</h5>
                  <a href={item.url} alt={item.url} target="_blank">
                    READ
                  </a>
                </div>
              </div>
            </Col>
          </>
        );
      })}
    </>
  );
};

export default WorkList;
