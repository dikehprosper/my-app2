import React, {useState} from 'react'
import image12 from "./images/image12.png"
import image13 from "./images/image13.png"
import image14 from "./images/image14.png"
import image15 from "./images/image15.png"
import { v4 as uuidv4 } from 'uuid';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"

const balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]

const BetZeroSection = () => {

    const [isHovered, setIsHovered] = useState(true);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const [inputValue, setInputValue] = useState(50);
    const [inputValue1, setInputValue1] = useState(1);
    const [isVisible, setIsVisible] = useState(false);     
    const [isVisible1, setIsVisible1] = useState(false);  
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
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
    return (
        <div className='f20'>
            <div className='f21'>
                <div className='f24'>
                    <div className='f26'> Predict which numbers NOT will appear in the draw. <br />
                        Select 1 to 4 numbers below:
                    </div>
                    <div className='f27'>
                        {balls.map((ball, index) => {
                            const color = colors[index % colors.length];
                            return <div className='f28' key={ball} style={{ backgroundColor: color }}>{ball}</div>
                        })}

                    </div>
                    <div className='f30'>
                        <div className='f41'>49</div>
                    </div>
                </div>
                <div8 className='f25'>
                    <img src={image12} alt="" />
                </div8>
            </div>
            <div className='f22'>
                
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
                        <div className='f40'><input className='f37' type="text" value="0222" /></div>
                        
                    </div>
                    <div className='f36'>Total stake
                        <input className='f38' type="text" value={inputValue}  />
                    </div> 
                </div>
                <div className='f31' 
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}> {isHovered ? <img src={image13} alt="" height="67px" width="145px" className='alternate-image' /> : <img className='alternate-image1' src={image14} alt="" height="67px" width="145px" /> }
                  </div>
            </div>
        </div>
    )
}

export default BetZeroSection;