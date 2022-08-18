import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import logo1 from "../public/Dice-1-b.svg.png";
import logo2 from "../public/Dice-2-b.svg.png";
import logo3 from "../public/Dice-3-b.svg.png";
import logo4 from "../public/Dice-4-b.svg.png";
import logo5 from "../public/Dice-5-b.png";
import logo6 from "../public/Dice-6-b.png";

function App() {
  const [dice, setDice] = useState("");
  function onClick() {
    let random = Math.random();
    console.log(random);
    if (random <= 0.15) {
      setDice("1");
      console.log("1");
    }
    if (random <= 0.3) {
      setDice("2");
      console.log("2");
    }
    if (random <= 0.45) {
      setDice("3");
      console.log("3");
    }
    if (random >= 0.6) {
      setDice("4");
      console.log("4");
    }
    if (random >= 0.75) {
      setDice("5");
      console.log("5");
    }
    if (random > 0.9) {
      setDice("6");
      console.log("6");
    }
  }

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            onClick();
          }}
        >
          RoLl
        </button>
        {dice === "1" ? (
          <img src={logo1} alt="" />
        ) : dice === "2" ? (
          <img src={logo2} alt="" />
        ) : dice === "3" ? (
          <img src={logo3} alt="" />
        ) : dice === "4" ? (
          <img src={logo4} alt="" />
        ) : dice === "5" ? (
          <img src={logo5} alt="" />
        ) : dice === "6" ? (
          <img src={logo6} alt="" />
        ) : null}
      </div>
    </div>
  );
}

export default App;
