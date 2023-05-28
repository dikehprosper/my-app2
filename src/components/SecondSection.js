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

const Body2 = (props) => {

    return (<div style={{ display: "flex", width: "100%", height: "585px", marginBottom: "2px" }}>
        <div style={{ display: "flex", width: "77.5%", flexDirection: "column", height: "" }}>
            <div className='f0'>
                <div className='f11'>
                    <img src={image4} alt="logo" className='f1 f2' />
                    <div className='f12'></div>
                </div>
                <div className='f11'>
                    <img src={image5} alt="logo" className='f1 f3' />
                    <div className='f12'></div>
                </div>
                <div className='f11'>
                    <img src={image6} alt="logo" className='f1 f4' />
                    <div className='f12'></div>
                </div>
                <div className='f11'>
                    <img src={image7} alt="logo" className='f1 f5' />
                    <div className='f12'></div>
                </div>
                <div className='f11'>
                    <img src={image8} alt="logo" className='f1 f6' />
                    <div className='f12'></div>
                </div>
                <div onClick={() => {
                    props.changeShowState();
                    props.handleClick()
                    
                }} className='f11'>
                    {props.backgroundColor ? <img src={image9} alt="logo" className='f1 f7' /> : <img src={image16} alt="logo" className='f18' />}
                    <div className='f12-1'></div>
                </div>
            </div>
            {
                props.showState ? <div> <img src={image10} alt="logo" className='f8' /></div> : <BetZeroSection />}

        </div>
         <div style={{ display:"flex", width: "20.5%" ,marginRight: "18px", marginLeft: "6px" }}>
            <div className='bets'>Bets(0)</div>

        </div>
    </div>
    )
}

export default Body2