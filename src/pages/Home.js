import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Body1 from "../components/FirstSection";
import Body2 from "../components/SecondSection";
import Body3 from "../components/ThirdSection";
import CountDown from "../components/CountDown";
import Draw from "../components/Draw";
import StartFirebase from "../components/FirebaseConfig/index";

import { ref, set, get } from "firebase/database";


const Home = () => {
  const [show, setShow] = useState(true);
  const [showState, setShowState] = useState(true);
  const [ball, setBall] = useState([]);
 const [triggerUpdateState, setTriggerUpdateState] = useState(false);
  const [ball1, setBall1] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ball2, setBall2] = useState([]);
  const [ball3, setBall3] = useState(null); 

 

  useEffect(() => {
    if (!triggerUpdateState) {
      // Make the request here
      const url = 'http://localhost:5000/fetch';
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
          // setBall3([data]);
          setBall2(data);

          const newData = data; // Create a copy of the original data array

          if (newData.length > 0) {
            const firstObject = newData[0]; // Get the first object

            if (Array.isArray(firstObject)) {
              newData[0] = firstObject.slice(6); // Remove the first six elements
            }
          }
          console.log(newData)
         
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
    setShow(!show);
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
  const [count, setCount] = useState();
  const [activeButton, setActiveButton] = useState();


  useEffect(() => {
    const fetchCountdown = async () => {
      try {
        const response = await fetch("http://localhost:5000/countdown");
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
          setActiveButton(data.activeButton);
        } else {
          // Handle error response
        }
      } catch (error) {
        // Handle network or other errors
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCountdown(); // Run fetchCountdown when the tab becomes visible again
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    fetchCountdown(); // Run fetchCountdown initially

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);



  console.log(count);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
        setActiveButton((prevButton) => prevButton + 1);
      } else {
        clearInterval(interval);
       
        restartCountdown()
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






  useEffect(() => {
    console.log(currentIndex, ball.length)
    if (triggerUpdateState && currentIndex < ball.length ) {
      console.log(currentIndex, ball.length)
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
    
    
      setBall3(ball2);
      localStorage.setItem("ball3", JSON.stringify(ball2));

      // Delay between each number update
    } else if (!triggerUpdateState) {
      setTimeout(() => {
        setBall1([]);
        setCurrentIndex(0);
      }, 7000); // Wait for 5 seconds after triggerUpdateState is set to false
    }
  }, [triggerUpdateState, currentIndex]);



  useEffect(() => {
    const ball4 = localStorage.getItem(
      "ball3"
    );
    if (ball4) {
      setBall3(JSON.parse(ball4));
    }
  }, []);





  
  const [totalBalance, SetTotalBalance] = useState(); 
  console.log(totalBalance)
 
  function updateCustomerData(value) {
    SetTotalBalance(totalBalance+value)
  }



  function EditTotalBalance(value)  {
    SetTotalBalance(totalBalance-value)
  }

  function editTotalBalance(value) {
    SetTotalBalance(totalBalance + value)
  }

  const [db, setDb] = useState(StartFirebase());
  const [customerData, setCustomerData] = useState([]);


  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    const arrayRef = ref(db, "Customer");

    get(arrayRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const existingData = snapshot.val();
          const dataArray = Array.isArray(existingData) ? existingData : [];
          const lastIndex = dataArray.length - 1;
          const lastObject = dataArray[lastIndex];
          const value5 = lastObject.totalBalance;
          console.log(value5)
          let formattedNumber;
          if (Number.isInteger(value5)) {
            formattedNumber = value5.toFixed(0);
          } else {
            formattedNumber = value5.toFixed(1);
          }
      

          SetTotalBalance(value5);
        } else {
          SetTotalBalance(5000000);
        }
      })
      .catch((error) => {
        alert("There was an error. Details: " + error);
      });
  };






  


  return (
    <div className="body">
      <Header totalBalance={totalBalance}
        retrieveData={retrieveData}/>

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
  
          <Body2
            show={show}
            changeShowState={changeShowState}
            showState={showState}
            backgroundColor={backgroundColor}
            handleClick={handleClick}
            count={count}
            ball3={ball3}
          ball={ball}
          ball1={ball1}
            EditTotalBalance={EditTotalBalance}
            editTotalBalance={editTotalBalance}
            totalBalance={totalBalance}
            updateCustomerData={updateCustomerData}time
          />
       
          <Body3
            show={show}
            ball3={ball3}
          />
   
      </div>
      <CountDown count={count-4} renderButtons={renderButtons} />
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
