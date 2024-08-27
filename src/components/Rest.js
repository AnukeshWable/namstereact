import React from "react";
import "./Rest.css";

const Rest = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt="Food Image" />
      <h2>{props.description}</h2>
      <h1>hello</h1>
      
    </div>
  );
};

export default Rest;
