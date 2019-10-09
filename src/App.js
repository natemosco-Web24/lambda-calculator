import React, { useState } from "react";
import "./App.scss";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [display, setDisplay] = useState([])

  function percentage(num) {
    return num / 100
  };
  function negative(num) {
    return num * -1
  };
  function sum(num1, num2) {
    return num1 + num2
  };
  function divide(num1, num2) {
    return num1 / num2
  };
  function multiply(num1, num2) {
    return num1 * num2
  };
  function sub(num1, num2) {
    return num1 - num2
  };

  function doMath(string) {
    setDisplay([...display, string])
    for (let i = 0; i < display.length; i++) {
      if (display[i] === "C") {
        setDisplay([]);
      }
      else if (display[i] === "+/-") {
        display.pop();
        let negNum = negative(Number(display.join("")));
        setDisplay([`${negNum}`]);
      }
      else if (display[i] === "%") {
        display.pop();
        let decimal = percentage(Number(display.join("")));
        setDisplay([`${decimal}`]);
      }
      else if (display[i] === "=") {
        display.pop();
        for (let j = 0; j < display.length; j++) {
          if (display[j] === "-") {
            let num1 = Number(display.slice(0, [j]));
            let num2 = Number(display.slice([j + 1], display.length));
            let decimal = sub(num1, num2);
            setDisplay([`${decimal}`]);
          }
          else if (display[j] === "+") {
            let num1 = Number(display.slice(0, [j]));
            let num2 = Number(display.slice([j + 1], display.length));
            let decimal = sum(num1, num2);
            setDisplay([`${decimal}`]);
          }
          else if (display[j] === "/") {
            let num1 = Number(display.slice(0, [j]));
            let num2 = Number(display.slice([j + 1], display.length));
            let decimal = divide(num1, num2);
            setDisplay([`${decimal}`]);
          }
          else if (display[j] === "*") {
            let num1 = Number(display.slice(0, [j]));
            let num2 = Number(display.slice([j + 1], display.length));
            let decimal = multiply(num1, num2);
            setDisplay([`${decimal}`]);
          }
        }

      }

    }
  }
  return (
    <div className="container">
      <Logo />
      <Display display={display}></Display>
      <div className="App">
        <section className="left">
          <Specials doMath={doMath}></Specials>
          <Numbers doMath={doMath}></Numbers>
        </section>
        <section className="right">
          <Operators doMath={doMath}></Operators>
        </section>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
