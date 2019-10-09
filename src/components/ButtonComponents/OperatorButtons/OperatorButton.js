import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={props.operator.value} onClick={() => { props.doMath(props.operator.value) }}>{props.operator.value}</button>
    </>
  );
};
export default OperatorButton