import React, { useState, useEffect } from "react";


const Body1 = (props) => {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (filled < 279 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 2), 50)
        }
    }, [filled, isRunning])

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
                        <div className="b51">13</div>
                        <div className="b511">12</div>
                        <div className="b51">8</div>
                        <div className="b51111"></div>
                        <div className="b5111">12</div>
                    </div>
                    <div className="b6">
                        <div className="b52">13</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                    </div>
                </div>
            </div>
            <div className="c2">
                <div className="c3">Cold numbers</div>
                <div className="c4">
                    <div className="c5">
                        <div className="b5111">13</div>
                        <div className="b51">12</div>
                        <div className="b511">8</div>
                        <div className="b51">12</div>
                        <div className="b51">12</div>
                    </div>
                    <div className="c6">
                        <div className="b52">13</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                        <div className="b52">12</div>
                    </div>
                </div>
            </div>

            <div className="d1">
                <div className="d2">Draw summary</div>
                <div className="d3">
                    <div className="d4">
                        <div className="d9"></div>
                        <div className="d10"></div>
                        <div className="d11"></div>
                        <div className="d12"></div>
                        <div className="d13"></div>
                        <div className="d14"></div>
                    </div>
                    <div className="d5">
                        <div className="d15"></div>
                        <div className="d16"></div>
                        <div className="d17"></div>
                        <div className="d18"></div>
                        <div className="d19"></div>
                        <div className="d20"></div>
                    </div>
                    <div className="d6">
                        <div className="d21"></div>
                        <div className="d22"></div>
                        <div className="d23"></div>
                        <div className="d24"></div>
                        <div className="d25"></div>
                        <div className="d26"></div>
                    </div>
                    <div className="d7">
                        <div className="d27"> <span>Hi</span></div>
                        <div className="d28"> <span>Mid</span></div>
                        <div className="d29"> <span>Lo</span></div>
                    </div>
                    <div className="d8">
                        <div className="progressbar">
                            <div style={{ width: "24px", height: `${filled / 279 * 100}%`, backgroundColor: "white", transition: "width 0.5s" }}></div>
                        </div>
                    </div>
                </div>
                <div className="e1">
                    <div className="e2">Total</div>
                    <div className="e3">{filled} </div>
                </div>
            </div>
            <div>



            </div>
            <button className="btn" onClick={() => setIsRunning(true)}>Add Number</button>
        </div>
    );
};

export default Body1;
