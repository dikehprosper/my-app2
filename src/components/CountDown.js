import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount, 10) : 49;
    });
    const [activeButton, setActiveButton] = useState(() => {
        const storedActiveButton = localStorage.getItem('activeButton');
        return storedActiveButton ? parseInt(storedActiveButton, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count.toString());
        localStorage.setItem('activeButton', activeButton.toString());
    }, [count, activeButton]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 0) {
                setCount(prevCount => prevCount - 1);
                setActiveButton(prevButton => prevButton + 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const renderButtons = () => {
        const buttons = [];

        for (let i = 0; i < 49; i++) {
            const isBlue = i >= 44 && i >= activeButton;
            const isActive = i >= activeButton;

            const buttonStyle = {
                backgroundColor: isBlue ? '#DF281E' : isActive ? 'white' : '#373737',
            };

            buttons.push(
                <button key={i} className="button" style={buttonStyle}></button>
            );
        }

        return buttons;
    };

    return <div className="container">{renderButtons()}</div>;
};

export default Countdown;

              
              
        