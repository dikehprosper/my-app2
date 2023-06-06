import React, { useState, useEffect } from 'react'
import betZeroLogo from "./images/betZeroLogo.png"
import StartFirebase from "./FirebaseConfig/index";
import { ref, set, get } from "firebase/database";
const Bets = ({ totalBalance, selectedBalls, ball1, date, inputValue, EditTotalBalance,updateCustomerData, show3, id, currentShow, drawId, betId, time, count, ball, editTotalBalance }) => {

    const [show, setShow] = useState(false)
    const [db, setDb] = useState(StartFirebase());
    const [customerData, setCustomerData] = useState([]);

   

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



    function generateId() {
        const min = 10000000; // Minimum ID value
        const max = 99999999; // Maximum ID value
        const id = Math.floor(Math.random() * (max - min + 1)) + min;
        return id.toString();
    }


    const insertData = () => {
        const newData = {
            TotalStake: inputValue,
            BetTime: time,
            BetDate: date,
            ResultTime: generateTime(),
            ResultDate: generateDate(),
            id: betId,
            drawId: drawId[0],
            status: "Lost",
            id2: `11${generateId()}`,
            resultBalls: ball1,
            selectedBalls: selectedBalls,
            totalBalance: totalBalance,
            gameName: "49ja"
        };

        const arrayRef = ref(db, "Customer");

        get(arrayRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const existingData = snapshot.val();
                    const dataArray = Array.isArray(existingData) ? existingData : [];

                    const updatedArray = [...dataArray, newData];

                    set(ref(db, "Customer"), updatedArray)
                        .then(() => {
                            console.log("Data was added successfully.");
                        })
                        .catch((error) => {
                            console.log("There was an error. Details: " + error);
                        });
                } else {
                    set(ref(db, "Customer"), [newData])
                        .then(() => {
                            console.log("Data was added successfully.");
                        })
                        .catch((error) => {
                            console.log("There was an error. Details: " + error);
                        });
                }
            })
            .catch((error) => {
                console.log("There was an error. Details: " + error);
            });
        
       
    };

    const insertData1 = () => {
        const newData = {
            TotalStake: inputValue,
            BetTime: time,
            BetDate: date,
            ResultTime: generateTime(),
            ResultDate: generateDate(),
            status: "Won",
            AmountWon: inputValue * odd(),
            id: betId,
            drawId: drawId[0],
            id2: `11${generateId()}`,
            selectedBalls: selectedBalls,
            resultBalls: ball1,
            totalBalance: totalBalance + inputValue * odd(),
              gameName: "49ja"
        };

        const arrayRef = ref(db, "Customer");

        get(arrayRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const existingData = snapshot.val();
                    const dataArray = Array.isArray(existingData) ? existingData : [];

                    const updatedArray = [...dataArray, newData];

                    set(ref(db, "Customer"), updatedArray)
                        .then(() => {
                            console.log("Data was added successfully.");
                        })
                        .catch((error) => {
                            console.log("There was an error. Details: " + error);
                        });
                } else {
                    set(ref(db, "Customer"), [newData])
                        .then(() => {
                            console.log("Data was added successfully.");
                        })
                        .catch((error) => {
                            console.log("There was an error. Details: " + error);
                        });
                }
            })
            .catch((error) => {
                alert("There was an error. Details: " + error);
            });
    
      
    };








  
    const formatSelectedBalls = () => {
        return selectedBalls.join(', ');
    };

    const [odd1, setOdd1] = useState(odd())
    
    function odd() {
        if (selectedBalls.length === 1) {
            return 1.1;
        } else if (selectedBalls.length === 2) {
            return 1.25;
        } else if (selectedBalls.length === 3) {
            return 1.45;
        } else if (selectedBalls.length === 4) {
            return 1.65;
        } else {
            // Handle other cases if needed
            return 0;
        }
    }

   
    useEffect(() => {

        const notFound = selectedBalls.every(number => !ball.includes(number));

        if (count < 1 && notFound) {
            // Perform your function here
            console.log(odd())
            updateCustomerData(inputValue * odd())
            setShow(true);
            insertData1()
            console.log("Numbers not found in ball array");
        } else if (count < 1 && !notFound){
            console.log(odd())
            editTotalBalance(0)
            
            insertData()
            console.log("Numbers not found in ball array");
            console.log("Numbers found in ball array");
        }

    }, [count, selectedBalls])

    console.log("customerData")


    return (show ? <>
        <div style={{ backgroundColor: "#D9EA23", display: "grid", justifyContent: "start", alignItems: "center", gridTemplateColumns: "50px auto", height: "54px", width: "100%", gap: "8px" }}>
            <div style={{ marginLeft: "8px", display: 'flex', justifyContent: "center", alignItems: "center" }}><img src={betZeroLogo} alt="" height="37px" width="43px" /></div>
            <div>
                <div className="formatSelectedBalls" style={{ color: "black", fontWeigth: "900", fontSize: "11px" }}>{formatSelectedBalls()}</div>
                <div className="formatSelectedBalls" style={{ color: "black", fontWeigth: "900", fontSize: "11px" }}> Stake: {inputValue} </div>
            </div>
        </div>
    </> : <> <div className="slide-in" onMouseEnter={() => show3(id)} onMouseLeave={() => show3(id)} style={{ display: "grid", justifyContent: "start", alignItems: "center", gridTemplateColumns: "50px auto", height: "54px", width: "100%", gap: "8px", position: "relative" }}>
        <div style={{ marginLeft: "8px", display: 'flex', justifyContent: "center", alignItems: "center" }}><img src={betZeroLogo} alt="" height="37px" width="43px" /></div>
        <div>
            <div className="formatSelectedBalls" style={{ color: "black", fontWeigth: "900", fontSize: "11px" }}>{formatSelectedBalls()}</div>
            <div className="formatSelectedBalls" style={{ color: "black", fontWeigth: "900", fontSize: "11px" }}> Stake: {inputValue} </div>
        </div>
            {currentShow ? <div className='bet-details' onMouseEnter={() => show3(id)} onMouseLeave={() => show3(id)}>

            <div className="row-1"><img src={betZeroLogo} alt="" height="37px" width="43px" /> <span className='bet-zero'>Bet Zero</span></div>
            <div className="row">
                <span>Date:</span>
                <span className='span2'>{time}</span>
            </div>
            <div className="row1">
                <span>Bet ID:</span>
                <span className='span2'>{betId}</span>
            </div>
            <div className="row">
                <span>Draw ID:</span>
                <span className='span2'>{drawId}</span>
            </div>
            <div className="row1">
                <span>Details:</span>
                <span className='span2' style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>

                    {selectedBalls.map((number, index) => {

                        let backgroundColor;
                        let color;
                        if (number === 49) {
                            backgroundColor = "#ecef07";
                            color = "black"
                        } else if (number % 3 === 2) {
                            backgroundColor = '#127ac2';
                            color = 'white';
                        } else if (number % 3 === 1) {
                            backgroundColor = '#c62b18';
                            color = 'white';
                        } else {
                            backgroundColor = "#178917";
                            color = 'white';
                        }
                        return (
                            <div
                                key={number}
                                style={{
                                    backgroundColor: backgroundColor, color: color, width: "20px", height: "20px", borderRadius: "10px",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}

                            >
                                {number}
                            </div>
                        );
                    })}
                </span>
            </div>
            <div className="row">
                <span>Odds:</span>
                <span className='span2'>{odd()}</span>
            </div>
            <div className="row1">
                <span>Stake:</span>
                <span className='span2'>{inputValue}</span>
            </div>
            <div className="row">
                <span>Payout: </span>
                <span className='span2'>0</span>
            </div>
            <div className="row-2">
                <span>Status:</span>
                <span className='span2'>Pending</span>
            </div>

        </div> : null}
    </div>

    </>

    )
}

export default Bets;


// nMouseEnter = { changeShow2 } onMouseLeave = { changeShow2 }