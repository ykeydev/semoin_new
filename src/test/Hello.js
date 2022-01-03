import React from "react";

const Hello = (props) => {
  const text = "@##@#";
  return <div style={{ color: props.color }}>hello~!{props.name}</div>;
};

export default Hello;
