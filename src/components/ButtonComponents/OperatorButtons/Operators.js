import React, { useState } from "react";
import OperatorButton from "./OperatorButton"
import { operators } from "../../../data"
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorList, setOperatorList] = useState(operators)
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorList.map(operator => <OperatorButton doMath={props.doMath} key={operator} operator={operator}></OperatorButton>)}
    </div>
  );
};
export default Operators 