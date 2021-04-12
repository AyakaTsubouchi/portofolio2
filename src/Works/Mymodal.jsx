import React from "react";
import { Modal, Button } from "react-materialize";

const Mymodal = (props) => {
  const { img, github, web, title, disc, techDisc, tech,feedbackLink } = props.data;
  return (
    <>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Close
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        className="my-modal"
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 550,
          outDuration: 550,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={<a>DETAIL</a>}>
        <div className="work-modal">
          <h1>{title}</h1>
          <a href={github}>
            <img src={img} alt="weather" />
          </a>
          <div className="text-container">
            <h5>Discription</h5>
            <p>{disc}</p>
          </div>
          <div className="text-container">
            <h5>Technology</h5>
{techDisc? (<p>{techDisc}</p>) : null}
{feedbackLink? (<a href={feedbackLink} target="blank">Feedback</a>) : null}
            <p>{tech}</p>
          </div>
          <div className="text-container button">
          {github?  <a href={github} target="blank">
              View Github
            </a> : null}
          {web?  <a href={web} target="blank">
              Visit Website
            </a> : null}
           
            
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Mymodal;
