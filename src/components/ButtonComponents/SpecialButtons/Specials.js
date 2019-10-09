import React, { useState } from "react";
import SpecialButton from "./SpecialButton"
import { specials } from "../../../data"
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsList, setspecialList] = useState(specials)
  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsList.map(special => <SpecialButton doMath={props.doMath} key={special} special={special}></SpecialButton>)}
    </div>
  );
};
export default Specials