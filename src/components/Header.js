import React from 'react'
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const Header = () => {
    return (
        <div className="top">
            <img src={image1} height="33px" alt="IMG" className="logo1" />
            <div className="a3">
                <div className="a7">
                    <div className="a9">
                        <h2>CASHIER</h2>
                    </div>
                </div>
                <div className="a8">
                    Balance:
                    <div className="a4">
                        <div className="a11"> </div>
                        <div className="a12"><span>0</span></div>
                    </div>

                </div>
                <div className="a5">
                    <div className="a10">
                        <img src={image2} alt="image2" height="31px" />
                    </div>
                    <div className="a10">
                        <img src={image3} alt="image3" height="31px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header