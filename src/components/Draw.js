import React, { useEffect, useState } from 'react';
import redImage from './images/red-ball.svg';
import blueImage from './images/blue-ball.svg';
import greenImage from './images/green-ball.svg';
import yellowImage from './images/ball-yellow.svg';
import image18 from './images/image18.png'
import image19 from './images/image19.png'
import image20 from './images/image20.png'
import image21 from './images/image21.png'

const Box = ({ number, animate, triggerUpdateState, ball }) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (animate && !triggerUpdateState) {
            const delay = (ball.length - animate + 1) * 800; // Increase the delay based on the index of the box from the end of the array
            setTimeout(() => {
                setAnimationClass('animate');
            }, delay);
        }
    }, [animate, ball, triggerUpdateState]);

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




    return (
        <div
            className={`box ${animationClass}`}
            style={{
                backgroundImage,
                color,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: '65px',
                transform: triggerUpdateState ? 'translateX(0)' : 'translateX(-100%)', // Modify the transform based on triggerUpdateState
            }}
        >
            <span className='spin'> {number}</span>
        </div>
    );
};







const Draw = ({ triggerUpdateState, ball, count, ball1, ball3 }) => {

    const CurrentDraw = () => {
        if (ball3) {
            const ballValue1 = ball3.statistics.slice(0, 1);
            const numberArray1 = ballValue1.map((str) => parseInt(str));
            return numberArray1
        } else {
            return "987654"
        }
    }


    function checkCount() {
        if (count - 4 <= 5 && count - 4 >= 0) {
            return "redBackground"
        } else if (count - 4 <= 0) {
            return "show-image"
        } else {
            return "blackBackground"
        }
    }

    function checkCount2() {
        if (count - 4 <= 0) {
            return "show-image"
        } else {
            return "blackBackground"
        }
    }


    return (
        <div id="draw">
            <div className="draw2">
                {ball1.map((number, index) => (
                    <Box key={index} number={number} animate={index + 1} triggerUpdateState={triggerUpdateState} ball={ball} />
                ))}
            </div>
            <div id="draw3"></div>
            <div id="draw5"> <img src={image18} alt="" /></div>
            <div id="draw6"> <img src={image19} alt="" />
            </div>
            <div id="draw7"> <img src={image20} alt="" />
            </div>
            <div id="draw9"> <img src={image21} alt="" />
            </div>

            <div id="draw4">Current draw: {CurrentDraw()}</div>
            <div id="draw10">{count - 4}</div>
            <div id="draw11" className={`imageBackground ${checkCount2()}`}></div>
            <div id="draw13" ></div>
            <div id="draw12" className={checkCount()}></div>
        </div>
    );
};

export default Draw;
