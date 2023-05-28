import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Body1 from "../components/FirstSection";
import Body2 from "../components/SecondSection";
import Body3 from "../components/ThirdSection";
import CountDown from "../components/CountDown";
import Draw from "../components/Draw";

const Home = () => {
  const [show, setShow] = useState(true);
  const [showState, setShowState] = useState(true);
  const [ball, setBall] = useState([]);
 const [triggerUpdateState, setTriggerUpdateState] = useState(false);
  const [ball1, setBall1] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ball2, setBall2] = useState([]);
  const [ball3, setBall3] = useState();

  useEffect(() => {
    if (!triggerUpdateState) {
      // Make the request here
      const url = 'http://localhost:5000/fetch-data';
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then(data => {
          console.log('Value from backend:', data);
          const ballValues = data.balls.slice(0, 6);
          const ballValues1 = data.statistics.slice(0, 1);
          // Assign the extracted values to the setBall function
        
       

          const numberArray = ballValues.map((str) => parseInt(str));
          const numberArray1 = ballValues1.map((str) => parseInt(str));
          const numberArray2 = data.statistics2.map((str) => parseInt(str));
          const numberArray3 = data.statistics3.map((str) => parseInt(str));
          const numberArray4 = data.statistics4.map((str) => parseInt(str));
          const numberArray5 = data.statistics5.map((str) => parseInt(str));

          setBall(numberArray);
          console.log(numberArray, numberArray1)
        
          setBall2(data);
          setHotNumbers(numberArray2);
          setColdNumbers(numberArray3);
          setHotNumbersFrequency(numberArray4);
          setColdNumbersFrequency(numberArray5);
          // Do something with the retrieved value here
        })
        .catch(error => {
          console.error('Error:', error.message);
          // Handle the error appropriately
        });
    }
  }, [triggerUpdateState]);
  

  // useEffect(() => {
  //   if (!triggerUpdateState) {
  //     // // Generate 6 random numbers from 1 to 48
  //     // const randomNumbers = Array.from(
  //     //   { length: 6 },
  //     //   () => Math.floor(Math.random() * 49) + 1
  //     // );
  //     setBall([12, 13, 14, 45, 31, 29]);
  //   }
  // }, [triggerUpdateState]);
  // console.log(ball);

 

  useEffect(() => {
    if (triggerUpdateState && currentIndex < ball.length) {
      setTimeout(() => {
        setBall1((prevBall) => {
          const newNumber = ball[currentIndex];
          const lastNumber = prevBall[prevBall.length - 1];

          if (newNumber !== lastNumber && !prevBall.includes(newNumber)) {
            return [...prevBall, newNumber];
          }
          return prevBall;
        });

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500);
      setBall3(ball2)
      // Delay between each number update
    } else if (!triggerUpdateState) {
      setTimeout(() => {
        setBall1([]);
        setCurrentIndex(0);
      }, 7000); // Wait for 5 seconds after triggerUpdateState is set to false
    }
  }, [triggerUpdateState, currentIndex]);



 


  const [hotNumbers, setHotNumbers] = useState([]);
  const [hotNumbersFrequency, setHotNumbersFrequency] = useState([]);
  const [coldNumbers, setColdNumbers] = useState([]);
  const [coldNumbersFrequency, setColdNumbersFrequency] = useState([]);
  const [hotNumbers1, setHotNumbers1] = useState([]);
  const [hotNumbersFrequency1, setHotNumbersFrequency1] = useState([]);
  const [coldNumbers1, setColdNumbers1] = useState([]);
  const [coldNumbersFrequency1, setColdNumbersFrequency1] = useState([]);


  // To get Hot Numbers
  useEffect(() => {
    const storedHotNumbers1 = localStorage.getItem("hotNumbers1");
    if (storedHotNumbers1) {
      setHotNumbers1(JSON.parse(storedHotNumbers1));
    }
  }, []);


  useEffect(() => {
    if (triggerUpdateState) {
      setHotNumbers1(hotNumbers);
      localStorage.setItem("hotNumbers1", JSON.stringify(hotNumbers));
    }
 
  }, [triggerUpdateState]);




  // To get Cold Numbers
  useEffect(() => {

    if (triggerUpdateState) {
      setColdNumbers1(coldNumbers);
      localStorage.setItem("coldNumbers1", JSON.stringify(coldNumbers));
    }
  }, [triggerUpdateState]);



  useEffect(() => {
    const storedColdNumbers1 = localStorage.getItem("coldNumbers1");
    if (storedColdNumbers1) {
      setColdNumbers1(JSON.parse(storedColdNumbers1));
    }
  }, []);




  // To get Hot Numbers Frequency
  useEffect(() => {
    const storedHotNumbersFrequency1 = localStorage.getItem(
      "hotNumbersFrequency1"
    );
    if (storedHotNumbersFrequency1) {
      setHotNumbersFrequency1(JSON.parse(storedHotNumbersFrequency1));
    }
  }, []);

  useEffect(() => {
   

    if (triggerUpdateState) {
      setHotNumbersFrequency1(hotNumbersFrequency);
      localStorage.setItem(
        "hotNumbersFrequency1",
        JSON.stringify(hotNumbersFrequency)
      );
    }
  }, [triggerUpdateState]);

 






  // To get Cold Numbers Frequency
  useEffect(() => {

    if (triggerUpdateState) {
      setColdNumbersFrequency1(coldNumbersFrequency);
      localStorage.setItem(
        "coldNumbersFrequency1",
        JSON.stringify(coldNumbersFrequency)
      );
    }
  }, [triggerUpdateState]);

  useEffect(() => {
    const storedColdNumbersFrequency1 = localStorage.getItem(
      "coldNumbersFrequency1"
    );
    if (storedColdNumbersFrequency1) {
      setColdNumbersFrequency1(JSON.parse(storedColdNumbersFrequency1));
    }
  }, []);









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
    setBackgroundColor1((prev) => !prev);
  };








  

  // Countdown section

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 49;
  });
  const [activeButton, setActiveButton] = useState(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    return storedActiveButton ? parseInt(storedActiveButton, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
    localStorage.setItem("activeButton", activeButton.toString());
  }, [count, activeButton]);

  console.log(count);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
        setActiveButton((prevButton) => prevButton + 1);
      } else {
        clearInterval(interval);
        fetchData();
        restartCountdown();
      }

      if (count === 5) {
        // Call your function when count remains 5 seconds
        setTriggerUpdateState(true);
      }
      if (count === 11) {
        // Call your function when count remains 5 seconds
        setTriggerUpdateState(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const fetchData = async () => {
    try {
      // Make the request here
      // Example using fetch API
      const response = await fetch("your-api-endpoint");
      // Check if the response was successful
      if (response.ok) {
        // Process the successful response here
        // ...
      } else {
        // Handle the error response here
        // ...
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  const restartCountdown = () => {
    setCount(49);
    setActiveButton(4);
  };

  const renderButtons = () => {
    const buttons = [];

    for (let i = 0; i < 49; i++) {
      const isBlue = i >= 44 && i >= activeButton;
      const isActive = i >= activeButton;

      const buttonStyle = {
        backgroundColor: isBlue
          ? "#DF281E"
          : isActive && i >= 4
          ? "white"
          : "#373737",
      };

      buttons.push(
        <button key={i} className="button" style={buttonStyle}></button>
      );
    }

    return buttons;
  };

 

  return (
    <div className="body">
      <Header />

      <div style={{ display: "flex", marginTop: "0.5px" }}>
        <Body1
          display={display}
          backgroundColor1={backgroundColor1}
          handleClick1={handleClick1}
          ball1={ball1}
          hotNumbers={hotNumbers1}
          hotNumbersFrequency={hotNumbersFrequency1}
          coldNumbers={coldNumbers1}
          coldNumbersFrequency={coldNumbersFrequency1}
        />
        {show ? (
          <Body2
            changeShowState={changeShowState}
            showState={showState}
            backgroundColor={backgroundColor}
            handleClick={handleClick}
          />
        ) : (
            <Body3
              ball3= {ball3} />
        )}
      </div>
      <CountDown count={49} renderButtons={renderButtons} />
      <Draw
        ball={ball}
        ball3={ball3}
        triggerUpdateState={triggerUpdateState}
        count={count}
        ball1={ball1}
      />
    </div>
  );
};

export default Home;
