import React, { useState } from "react";
import Header from "../components/Header";
import Body1 from "../components/FirstSection";
import Body2 from "../components/SecondSection";
import Body3 from "../components/ThirdSection";
import CountDown from "../components/CountDown";

const Home = () => {
  const [show, setShow] = useState(true);
  const [showState, setShowState] = useState(true);
  function display() {
    setShow((show) => {
      return !show;
    });
  }

  function changeShowState() {
    setShowState(false);
  }

  const [backgroundColor, setBackgroundColor] = useState(true);

  const handleClick = () => {
    setBackgroundColor(false);
  };
  const [backgroundColor1, setBackgroundColor1] = useState(false);

  const handleClick1 = () => {
    setBackgroundColor1(prev => !prev);
  };

  return (
    <div className="body">
      <Header />
      <div style={{ display: "flex", marginTop: "0.5px" }}>
        <Body1 display={display}
          backgroundColor1={backgroundColor1}
          handleClick1={handleClick1} />
        {show ? (
          <Body2
            changeShowState={changeShowState}
            showState={showState}
            backgroundColor={backgroundColor}
            handleClick={handleClick}
          />
        ) : (
          <Body3 />
        )}
      </div>
      <CountDown count={49} />
    </div>
  );
};

export default Home;
