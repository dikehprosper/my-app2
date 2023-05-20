import React, { useState, useEffect } from "react";
import redImage from './images/ball-red.svg';
import blueImage from './images/ball-blue.svg';
import greenImage from './images/ball-green.svg';
import yellowImage from './images/ball-green.svg';

const Body1 = (props) => {

    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.ball1.length > 0) {
            const targetSum = props.ball1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const increment = Math.ceil((targetSum - sum) / 100); // Adjust the increment value as desired

            const interval = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + increment;
                    if (newCount >= targetSum) {
                        clearInterval(interval);
                        return targetSum;
                    } else {
                        return newCount;
                    }
                });
            }, 30); // Adjust the interval duration as desired

            return () => {
                clearInterval(interval);
            };
        } else {
            setCount(0)
        }
    }, [props.ball1]);



    useEffect(() => {
        if (props.ball1.length > 0) {
            setSum(props.ball1.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
        } else {
            setSum(0);
        }
    }, [props.ball1]);

    const emptyBoxes = Array(6).fill(null); 
    const emptyBoxes2 = Array(6).fill(null);
    const emptyBoxes3 = Array(6).fill(null);



    const [redBallsCount, setRedBallsCount] = useState(0);;
    const [greenBallsCount, setGreenBallsCount] = useState(0);;
    const [blueBallsCount, setBlueBallsCount] = useState(0);;


    useEffect(() => {
        let redCount = 0;
        let greenCount = 0;
        let blueCount = 0;

        for (let i = 0; i < props.ball1.length; i++) {
            if (props.ball1[i] % 3 === 1) {
                redCount++;
            } else if (props.ball1[i] % 3 === 0) {
                greenCount++;
            } else if (props.ball1[i] % 3 === 2) {
                blueCount++;
            }
        }
        setRedBallsCount(redCount);
        setGreenBallsCount(greenCount);
        setBlueBallsCount(blueCount)
    }, [props.ball1]);




    return (
        <div className="b0">
            <div className="b1" onClick={() => {
                props.display();
                props.handleClick1();
            }} style={{ background: `${props.backgroundColor1 ? "#192649" : ""}` }}>
                {" "}
                <div className="b7" >
                    {" "}
                    <span>Statistics</span>
                </div>
            </div>
            <div className="b2">
                <div className="b3">Hot numbers</div>
                <div className="b4">
                    <div className="b5">
                        {props.hotNumbers.map(number => {

                            let backgroundImage;
                            let color;

                            if (number === 49) {
                                backgroundImage = `url(${yellowImage})`;
                                color = "black"
                            } else if (number % 3 === 2) {
                                backgroundImage = `url(${blueImage})`;
                                color = 'white';
                            } else if (number % 3 === 1) {
                                backgroundImage = `url(${redImage})`;
                                color = 'white';
                            } else {
                                backgroundImage = `url(${greenImage})`;
                                color = 'white';
                            }
                            return <div
                                className="b51"
                                style={{
                                    backgroundImage,
                                    color}}
                            >
                                {number}
                            </div>
                        })}
                    </div>
                    <div className="b6">
                        {props.hotNumbersFrequency.map(number => {
                            return <div className="b52">{number}</div>
                        })}
                    </div>
                </div>
            </div>
            <div className="c2">
                <div className="c3">Cold numbers</div>
                <div className="c4">
                    <div className="c5">
                        {props.coldNumbers.map(number => {

                            let backgroundImage;
                            let color;

                            if (number === 49) {
                                backgroundImage = `url(${yellowImage})`;
                                color = "black"
                            } else if (number % 3 === 2) {
                                backgroundImage = `url(${blueImage})`;
                                color = 'white';
                            } else if (number % 3 === 1) {
                                backgroundImage = `url(${redImage})`;
                                color = 'white';
                            } else {
                                backgroundImage = `url(${greenImage})`;
                                color = 'white';
                            }
                            return <div
                                className="b51"
                                style={{
                                    backgroundImage,
                                    color
                                }}
                            >
                                {number}
                            </div>
                        })}
                    </div>
                    <div className="c6">
                        {props.coldNumbersFrequency.map(number => {
                            return <div className="b52">{number}</div>
                        })}
                    </div>
                </div>
            </div>

            <div className="d1">
                <div className="d2">Draw summary</div>
                <div className="d3">
                    <div className="d4">

                        {emptyBoxes3.map((_, index) => (
                            <div key={index} className="d21" style={{ background: `${index >= 6 - blueBallsCount ? '#127ac2' : ''}` }}></div>

                        ))}

                        
                                 
                    </div>
                    <div className="d5">
                        {emptyBoxes2.map((_, index) => (
                            <div key={index} className="d15" style={{ background: `${index >= 6 - greenBallsCount ? '#178917' : ''}` }}></div>
                            
                        ))}
                    </div>
                    <div className="d6">
                        {emptyBoxes.map((_, index) => (
                            <div key={index} className='d9' style={{ background: `${index >= 6 - redBallsCount ? '#c62b18' : ''}` }}></div>
                        ))} 
                    </div>
                    <div className="d7">
                        <div className="d27" style={{ borderBottom: `${count >= 152 && count <= 279 ? "45px solid white" : "45px solid #373737"}`}}> <span>Hi</span></div>
                        <div className="d28" style={{ background: `${count >= 149 && count <= 151 ? "white" : "#373737"}` }}> <span>Mid</span></div>
                        <div className="d29" style={{ borderBottom: `${count >= 21 && count <= 148 ? "45px solid white" : "45px solid #373737"}` }}> <span>Lo</span></div>
                    </div>
                   
                    <div className="d8">
                        <div className="progressbar">
                            <div style={{ width: "24px", height: `${sum / 279 * 100}%`, backgroundColor: "white", transition: "width 0.5s" }}></div>
                        </div>
                    </div>
                </div>
                <div className="e1">
                    <div className="e2">Total</div>
                    <div className="e3">{count} </div>
                </div>
            </div>
            <div>



            </div>
            {/* <button className="btn" onClick={() => setIsRunning(true)}>Add Number</button> */}
        </div>
    );
};

export default Body1;
