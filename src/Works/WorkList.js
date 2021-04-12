import React from 'react';
import { Row, Col } from "react-materialize";
import { workData } from "./data";
import Mymodal from './Mymodal'

const WorkList = () => {
    const data = workData
    return(
        <>
    {data.map(item=>{
        return(
            <>
             <Col s={12} m={6} l={6} xl={6}>
                <div className="work_container">
                  <img
                    src={item.img}
                    alt="work"
                    className="image"
                  />
                  
                  <div className="overlay">
                    <h5>{item.title}</h5>
                    <p>{item.skill}</p>
                    <Mymodal data={item} />
                  </div>
                </div>
              </Col>
            </>
        )
    })}
    </>
    ) 
};

export default WorkList;