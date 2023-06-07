import React, { useEffect, useState } from 'react'
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const Header = ({ totalBalance, retrieveData }) => {

    // console.log(totalBalance)
    // function roundNumber() {
    //     if (Number.isInteger(totalBalance)) {
    //         // Number is already an integer, return as is
    //         return totalBalance;
    //     } else if (Number.isInteger(totalBalance * 10)) {
    //         // Number has one decimal place
    //         return Math.round(totalBalance);
    //     } else {
    //         // Number has more than one decimal place
    //         return Math.round(totalBalance * 10) / 10;
    //     }
    // }


    // const [totalBalance1, setTotalBalance1] = useState()
    // useEffect(() => {
    //     let formattedNumber;
    //     if (Number.isInteger(totalBalance * 10)) {
    //         formattedNumber = Math.round(totalBalance);
    //     } else {
    //         formattedNumber = Math.round(totalBalance * 10) / 10;
    //     }
    //     setTotalBalance1(formattedNumber)
    // }, [totalBalance])

    function approximateNumber() {
        const roundedNumber = parseFloat(totalBalance.toFixed(1));

        if (Number.isInteger(roundedNumber)) {
            return roundedNumber.toFixed(0);
        } else {
            return roundedNumber.toString();
        }
    }

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
                        <div className="a12"><span>{totalBalance && approximateNumber()}</span></div>
                    </div>

                </div>
                <div className="a5">
                    <div className="a10">
                        <img src={image2} alt="image2" height="31px" />
                    </div>
                    <div className="a10" >
                        <img src={image3} alt="image3" height="31px" onClick={() => retrieveData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header