import React, {useState, useEffect} from 'react'
import image12 from "./images/image12.png"
import image13 from "./images/image13.png"
import image14 from "./images/image14.png"
import image25 from "./images/image25.png"
import image15 from "./images/image15.png"
import draw20 from "./images/draw20.png"
import { v4 as uuidv4 } from 'uuid';
import videobg from "./Win.mp4"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"

const balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
const balls2 = [49]

const BetZeroSection = ({ handleBallClick, videoView, selectedBalls, count, callBetNumber, inputValue, handleInputChange2 }) => {

    const [isHovered, setIsHovered] = useState(true);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

  
    const [inputValue1, setInputValue1] = useState(1);
    const [inputValue3, setInputValue3] = useState(0);
    const [isVisible, setIsVisible] = useState(false);     
    const [isVisible1, setIsVisible1] = useState(false);  
   
   
    const handleInputChange = (event) => {
        handleInputChange2(event);
    };
    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    function Visibility() {
        setIsVisible(visible => !visible)
    }

    function Visibility1() {
        setIsVisible1(visible => !visible)
    }
   
    const colors = ['#c62b18', '#127ac2', '#178917'];
    const colors2 = ["#ecef07"];

    useEffect(() => {
        if (selectedBalls.length === 1) {
            const number = inputValue * 1.1
            let formattedNumber;
            if (Number.isInteger(number)) {
                formattedNumber = number.toFixed(0);
            } else {
                formattedNumber = number.toFixed(1);
            }
            setInputValue3(formattedNumber)
        } else if (selectedBalls.length === 2) {
            const number = inputValue * 1.25
            let formattedNumber;
            if (Number.isInteger(number)) {
                formattedNumber = number.toFixed(0);
            } else {
                formattedNumber = number.toFixed(1);
            }
            setInputValue3(formattedNumber)
        } else if (selectedBalls.length === 3) {
            const number = inputValue * 1.45
            let formattedNumber;
            if (Number.isInteger(number)) {
                formattedNumber = number.toFixed(0);
            } else {
                formattedNumber = number.toFixed(1);
            }
            setInputValue3(formattedNumber)
        } else if (selectedBalls.length === 4) {
            const number = inputValue * 1.65
            let formattedNumber;
            if (Number.isInteger(number)) {
                formattedNumber = number.toFixed(0);
            } else {
                formattedNumber = number.toFixed(1);
            }
            setInputValue3(formattedNumber)
        }
    }, [selectedBalls, inputValue])
  



    const formatSelectedBalls = () => {
        const selectedCount = selectedBalls.length;
        const formattedBalls = selectedBalls.map((ball, index) => {
            if (index === selectedCount - 1) {
                return ball;
            } else if (index === selectedCount - 2) {
                return ball + ' and';
            } else {
                return ball + ',';
            }
        });

        return formattedBalls.join(' ');
    };

    function callBetNumber1 () {
        callBetNumber();
    }

 
    
    function approximateNumber() {
        const roundedNumber = parseFloat(videoView.toFixed(1));

        if (Number.isInteger(roundedNumber)) {
            return roundedNumber.toFixed(0);
        } else {
            return roundedNumber.toString();
        }
    }


    return (
        <div className='f20'>

            {videoView ? <div style={{ position: "absolute", zIndex: "100000", height: "497px", width: "882px", bottom: "170px", left: "253px", top: "125px" }}>

              <div className="image-value" style={{position:"absolute", zIndex:"1000000", color:"white", top:"290px", heigth:"10px", left:"180px"}}>
                    <img src={draw20} alt='' height="101px" width="400px"/> </div>
                <video src={videobg} autoPlay loop muted /> 
                <h2 style={{ position: "absolute", zIndex: "100000000", color: "white", top: "222px", display: "flex", justifyContent: 'center', left: 0, right: 0, fontSize: "70px", fontWeight: 'bold' }}> NGN &nbsp;{videoView && approximateNumber()}</h2>    </div> : null} 
           
           
            <div className='f21'>
                <div className='f24'>
                    <div className='f26'> Predict which numbers NOT will appear in the draw. <br />
                        Select 1 to 4 numbers below:
                    </div>
                    <div className='f27'>
                       
  
                        {balls.map((ball, index) => {
                            const color = colors[index % colors.length];
                            const isSelected = selectedBalls.includes(ball);

                            return (
                                <div
                                    className={`f28 ${isSelected ? 'selected' : ''}`}
                                    key={ball}
                                    style={{ backgroundColor: color, border: `3px solid ${isSelected ? 'white' : color}` }}
                                    onClick={() => handleBallClick(ball)}
                                >
                                    {ball}
                                </div>
                            );
                        })}

                    </div>
                    <div className='f30'>

                        {balls2.map((ball, index) => {
                            const color = colors2[index % colors.length];
                            const isSelected = selectedBalls.includes(ball);

                            return (
                                <div
                                    className={`f41 ${isSelected ? 'selected' : ''}`}
                                    key={ball}
                                    style={{ backgroundColor: color, border: `3px solid ${isSelected ? 'white' : color}` }}
                                    onClick={() => handleBallClick(ball)}
                                >
                                    {ball}
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div8 className='f25'>
                    <img src={image12} alt="" />
                    <div className='f121-12'></div>
                    <div className='f121-13'></div>
                </div8>
            </div>
            <div className='f22' style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fffaa5",
                fontWeight: "bold",
                fontSize:"17px"
            }}>
            
                {selectedBalls.length > 0 && (
                    <>
                        Bet that the numbers {formatSelectedBalls()} would NOT be in the next draw
                    </>
                )}
           </div>


            <div className='f23'>

                <div className='f35'>

                    <div className='f36'>Max stake
                        <div style={{ display: "flex", gap: "1px", alignItems: "center" }} onMouseEnter={Visibility} onMouseLeave={Visibility}>
                            <input className='f39' type="text" value={inputValue} onChange={handleInputChange} />
                            <div style={{ height: "20px", width: "20px", display: "flex", alignItems: "center" }}>
                              <div style={{  display: `${isVisible === true? "flex" : "none"}`, flexDirection:"column" }}>
                                <div className='button1' style={{ height: "16px" }} ><BsFillCaretUpFill fontSize="14px"  /></div>
                                <div className='button1' style={{ height: "16px"}}><BsFillCaretDownFill fontSize="14px"  /></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='f36'>Repeats
                        <div style={{ display: "flex", gap: "1px", alignItems: "center" }} onMouseEnter={Visibility1} onMouseLeave={Visibility1}>
                            <input className='f39' type="text" value={inputValue1} onChange={handleInputChange1} />
                            <div style={{ height: "20px", width: "20px", display: "flex", alignItems: "center" }}>
                            <div style={{ display: `${isVisible1 === true? "flex" : "none"}`, flexDirection: "column" }}>
                                <div className='button1' style={{ height: "16px" }} ><BsFillCaretUpFill fontSize="14px" /></div>
                                <div className='button1' style={{ height: "16px" }}><BsFillCaretDownFill fontSize="14px" /></div>
                                </div></div></div> 
                        </div>
                </div>

                <div className='f35'>
                    <div className='f36'>Max Payout
                        <div className='f40'><input className='f37' type="text" value={inputValue3} /></div>
                        
                    </div>
                    <div className='f36'>Total stake
                        <input className='f38' type="text" value={inputValue}  />
                    </div> 
                </div>

                {count < 10 ? <div className='f31 unclickable'><img src={image13} alt="" height="67px" width="145px" className='alternate-image' /></div> :<>
                    {
                        selectedBalls.length < 1 ?
                            <div className='f31 unclickable'> <img src={image13} alt="" height="67px" width="145px" className='alternate-image' /></div>
                            :
                            <div className='f31'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover} onClick={callBetNumber1}>
                            {isHovered ? <img src={image25} alt="" height="67px" width="145px" className='alternate-image' /> : <img className='alternate-image1' src={image14} alt="" height="67px" width="145px" />}
                        </div>
                      }
                </>
                   }
               
            </div>
        </div>
    )
}

export default BetZeroSection;