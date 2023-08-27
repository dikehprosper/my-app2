import React, { useState, useEffect } from 'react'
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"
import image7 from "./images/image7.png"
import image8 from "./images/image8.png"
import image9 from "./images/image9.png"
import image10 from "./images/image10.png"
import image16 from "./images/image16.png"
import BetZeroSection from './BetZeroSection'
import { nanoid } from 'nanoid'
import Bets from './Bets'


const Body2 = (props) => {

    const [selectedBalls, setSelectedBalls] = useState([]);
    const [inputValue, setInputValue] = useState(50);
    const [betNumber, setBetNumber] = useState([]);

    useEffect(() => {
        const storedBetNumber = localStorage.getItem('betNumber');
        if (storedBetNumber) {
            setBetNumber(JSON.parse(storedBetNumber));
        }
    }, []);

    const CurrentDraw = () => {
        if (props.ball3) {
            const ballValue1 = props.ball3.statistics.slice(0, 1);
            const numberArray1 = ballValue1.map((str) => parseInt(str));
            return numberArray1
        } else {
            return "987654"
        }
    }

    useEffect(() => {
        localStorage.setItem('betNumber', JSON.stringify(betNumber));
    }, [betNumber]);

    const [generatedRandomNumber, setGeneratedRandomNumber] = useState();

    useEffect(() => {

        let randomNumber = "VGWU";

        for (let i = 0; i < 6; i++) {
            const digit = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
            randomNumber += digit.toString(); // Append the digit to the random number string
        }

        setGeneratedRandomNumber(randomNumber);
    }, [betNumber])



    function generateDate() {
        const currentDate = new Date();

        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = currentDate.getFullYear();

        const date = `${day}/${month}/${year} `;

        return date;
    }
    function generateTime() {
        const currentTime = new Date();


        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');

        const Time = ` ${hours}:${minutes}:${seconds}`;

        return Time;
    }


    useEffect(() => {
        if (props.count === 48) {
            setBetNumber([])
        }
    }, [props.count])



    const callBetNumber = () => {
        props.EditTotalBalance(inputValue);
        const Time = generateTime(); // Generate the current date and time
        const Date = generateDate();

        const number = {
            selectedBalls: selectedBalls,
            inputValue: inputValue,
            id: nanoid(),
            currentShow: false,
            drawId: CurrentDraw(),
            betId: generatedRandomNumber,
            time: Time,
            date: Date
        };

        setBetNumber(prev => [...prev, number]);
    };























    const handleInputChange2 = (event) => {

        setInputValue(event.target.value);
    };

    const handleBallClick = (ball) => {
        if (selectedBalls.includes(ball)) {
            setSelectedBalls(selectedBalls.filter(selectedBall => selectedBall !== ball));
        } else {
            if (selectedBalls.length < 4) {
                setSelectedBalls([...selectedBalls, ball]);
            }
        }
    };

    function show3(id) {
        console.log(id)
        const result = betNumber.map(data => {
            if (id === data.id) {
                return { ...data, currentShow: !data.currentShow };
            }
            return data;
        });
        setBetNumber(result);
    };


    const [videoView, setVideoView] = useState()
    function callShow(value) {
        setVideoView(value)
    }

    useEffect(() => {
        if (videoView) {
            const timer = setTimeout(() => {
                // Your function to be executed after 2 seconds
                setVideoView()
                // Perform any other actions here
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [videoView]);

    return (<div style={{ display: `${props.show ? "flex" : "none"}`, width: "100%", marginRight: "22px", height: "585px", marginBottom: "2px", overflow: "hidden" }}>


        <div style={{ display: "flex", width: "914px", flexDirection: "column", height: "" }}>
            <div className='f0'>
                <div className='f11' onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }}>
                    <img src={image4} alt="logo" className='f1 f2' />
                    <div className='f12'></div>
                </div>
                <div className='f11' onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }}>
                    <img src={image5} alt="logo" className='f1 f3' />
                    <div className='f12'></div>
                </div>
                <div className='f11' onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }}>
                    <img src={image6} alt="logo" className='f1 f4' />
                    <div className='f12'></div>
                </div>
                <div className='f11' onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }}>
                    <img src={image7} alt="logo" className='f1 f5' />
                    <div className='f12'></div>
                </div>
                <div className='f11' onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }}>
                    <img src={image8} alt="logo" className='f1 f6' />
                    <div className='f12'></div>
                </div>
                <div onClick={() => {
                    props.changeShowState();
                    props.handleClick()

                }} className='f11'>
                    {props.backgroundColor ? <div>  <img src={image9} alt="logo" className='f1 f7' /> <div className='f12-1'></div></div> : <img src={image16} alt="logo" className='f18' />}

                </div>
            </div>
            {
                props.showState ? <div className='f8-12'> <img src={image10} alt="logo" className='f8' /></div> : <BetZeroSection videoView={videoView} count={props.count} handleBallClick={handleBallClick} selectedBalls={selectedBalls} callBetNumber={callBetNumber} inputValue={inputValue} handleInputChange2={handleInputChange2} />}

        </div>
        <div style={{ display: "flex", width: "25%", marginLeft: "6px", flexDirection: "column" }}>
            <div className='bets' style={{ marginBottom: "4px", }}>Bets({betNumber.length})</div>
            <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", gap: "4px", }}>



                {betNumber.map((bets) => (
                    <Bets
                        selectedBalls={bets.selectedBalls}
                        inputValue={bets.inputValue}
                        id={bets.id}
                        show3={show3}
                        currentShow={bets.currentShow}
                        key={bets.id}
                        drawId={bets.drawId}
                        betId={bets.betId}
                        time={bets.time}
                        date={bets.date}
                        ball={props.ball}
                        count={props.count}
                        editTotalBalance={props.editTotalBalance}
                        ball1={props.ball1}
                        totalBalance={props.totalBalance}
                        updateCustomerData={props.updateCustomerData}
                        callShow={callShow}
                    />
                ))}

            </div>
        </div>
    </div>
    )
}

export default Body2