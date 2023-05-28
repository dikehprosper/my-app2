import React, { useEffect, useState } from 'react';




const Table = ({ball}) => {
    const [ball3, setBall3] = useState(ball);
    console.log(ball)

    useEffect(() => {
        setBall3(ball)
    }, [])
//for Drwas
    const ballValues1 = ball3.balls.slice(0, 6);
    const ballValues2 = ball3.balls.slice(6, 12);
    const ballValues3 = ball3.balls.slice(12, 18);
    const ballValues4 = ball3.balls.slice(18, 24);
    const ballValues5 = ball3.balls.slice(24, 30);
    const ballValues6 = ball3.balls.slice(30, 36);
    const ballValues7 = ball3.balls.slice(36, 42);
    const ballValues8 = ball3.balls.slice(42, 48);
    const ballValues9 = ball3.balls.slice(48, 54);
    const ballValues10 = ball3.balls.slice(54, 60);

//for ID

    const ballValue1 = ball3.statistics.slice(0, 1);
    const ballValue2 = ball3.statistics.slice(6, 7);
    const ballValue3 = ball3.statistics.slice(12, 13);
    const ballValue4 = ball3.statistics.slice(18, 19);
    const ballValue5 = ball3.statistics.slice(24, 25);
    const ballValue6 = ball3.statistics.slice(30, 31);
    const ballValue7 = ball3.statistics.slice(36, 37);
    const ballValue8 = ball3.statistics.slice(42, 43);
    const ballValue9 = ball3.statistics.slice(48, 49);
    const ballValue10 = ball3.statistics.slice(54, 55);

// for colours
    const ballValue11 = ball3.statistics1.slice(0, 1);
    const ballValue12 = ball3.statistics1.slice(1, 2);
    const ballValue13 = ball3.statistics1.slice(2, 3);
    const ballValue14 = ball3.statistics1.slice(3, 4);
    const ballValue15 = ball3.statistics1.slice(4, 5);
    const ballValue16 = ball3.statistics1.slice(5, 6);
    const ballValue17 = ball3.statistics1.slice(6, 7);
    const ballValue18 = ball3.statistics1.slice(7, 8);
    const ballValue19 = ball3.statistics1.slice(8, 9);
    const ballValue20 = ball3.statistics1.slice(9, 10);

    const numberArrays1 = ballValues1.map((str) => parseInt(str));
    const numberArray1 = ballValue1.map((str) => parseInt(str));
    const numberArray11 = ballValue11.map((str) => parseInt(str));
    const numberArrays2 = ballValues2.map((str) => parseInt(str));
    const numberArray2 = ballValue2.map((str) => parseInt(str));
    const numberArray12 = ballValue12.map((str) => parseInt(str));
    const numberArrays3 = ballValues3.map((str) => parseInt(str));
    const numberArray3 = ballValue3.map((str) => parseInt(str));
    const numberArray13 = ballValue13.map((str) => parseInt(str));
    const numberArrays4 = ballValues4.map((str) => parseInt(str));
    const numberArray4 = ballValue4.map((str) => parseInt(str));
    const numberArray14 = ballValue14.map((str) => parseInt(str));
    const numberArrays5 = ballValues5.map((str) => parseInt(str));
    const numberArray5 = ballValue5.map((str) => parseInt(str));
    const numberArray15 = ballValue15.map((str) => parseInt(str));
    const numberArrays6 = ballValues6.map((str) => parseInt(str));
    const numberArray6 = ballValue6.map((str) => parseInt(str));
    const numberArray16 = ballValue16.map((str) => parseInt(str));
    const numberArrays7 = ballValues7.map((str) => parseInt(str));
    const numberArray7 = ballValue7.map((str) => parseInt(str));
    const numberArray17 = ballValue17.map((str) => parseInt(str));
    const numberArrays8 = ballValues8.map((str) => parseInt(str));
    const numberArray8 = ballValue8.map((str) => parseInt(str));
    const numberArray18 = ballValue18.map((str) => parseInt(str));
    const numberArrays9 = ballValues9.map((str) => parseInt(str));
    const numberArray9 = ballValue9.map((str) => parseInt(str));
    const numberArray19 = ballValue19.map((str) => parseInt(str));
    const numberArrays10 = ballValues10.map((str) => parseInt(str));
    const numberArray10 = ballValue10.map((str) => parseInt(str));
    const numberArray20 = ballValue20.map((str) => parseInt(str));
    
    console.log(numberArray11)
    const data = [{
        "ID": numberArray1,
        "property2": numberArrays1,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray11,
        "property6": "value6"
    }, {
        "ID": numberArray2,
        "property2": numberArrays2,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray12,
        "property6": "value6"
    }, {
        "ID": numberArray3,
        "property2": numberArrays3,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray13,
        "property6": "value6"
    }, {
        "ID": numberArray4,
        "property2": numberArrays4,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray14,
        "property6": "value6"
    }, {
        "ID": numberArray5,
        "property2": numberArrays5,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray15,
        "property6": "value6"
    }, {
        "ID": numberArray6,
        "property2": numberArrays6,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray16,
        "property6": "value6"
    }, {
        "ID": numberArray7,
        "property2": numberArrays7,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray17,
        "property6": "value6"
    }, {
        "ID": numberArray8,
        "property2": numberArrays8,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray18,
        "property6": "value6"
    }, {
        "ID": numberArray9,
        "property2": numberArrays9,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray19,
        "property6": "value6"
    }, {
        "ID": numberArray10,
        "property2": numberArrays10,
        "property3": "value3",
        "property4": "value4",
        "property5": numberArray20,
        "property6": "value6"
    }]
    const headerNames = ["ID", "Draw", "Hi Mid Lo", "Win Colour", "Colours", "Total"];



   
  

    return (
        <table>
            <thead>
                <tr>
                    {headerNames.map((header, index) => (
                        <th key={index}>
                            <h1> {header}</h1>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tbody1 className="tbody1">
                    {data.map((data, index) => {
                        const total = data.property2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                        function shape() {
                            if (total >= 21 && total <= 148) {
                                return <div className='fff'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.5 18.75" height="35px">
                                    <polygon points="0,0 12.5,12.5 25,0" fill="#ffffff" />
                                </svg></div>
                            } else if (total >= 149 && total <= 151) {
                                return <div style={{ height: "18px", width: "55px", backgroundColor: "white" }}></div>
                            } else {
                                return <div className='fff'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.5 18.75" height="35px">
                                    <polygon points="0,12.75 12.5,0 25,12.75" fill="#ffffff" />
                                </svg></div>
                            }

                        }

                        const DrawResults = () => {

                            const colorCount = {
                                "#c9d916": 0, // Yellow color count
                                "#127ac2": 0, // Blue color count
                                "#c62b18": 0, // Red color count
                                "#178917": 0, // Green color count
                            };

                            data.property2.forEach((number) => {
                                let backgroundColor;
                                let color;

                                if (number === 49) {
                                    backgroundColor = "#c9d916";
                                    color = "black";
                                } else if (number % 3 === 2) {
                                    backgroundColor = "#127ac2";
                                    color = "white";
                                } else if (number % 3 === 1) {
                                    backgroundColor = "#c62b18";
                                    color = "white";
                                } else {
                                    backgroundColor = "#178917";
                                    color = "white";
                                }

                                colorCount[backgroundColor]++;
                            });

                            let highestColor = "none";
                            let highestCount = 0;
                            let none = "none"

                            Object.entries(colorCount).forEach(([color, count]) => {
                                if (count > highestCount) {
                                    highestCount = count;
                                    highestColor = color;
                                    none = ""
                                } else if (count === highestCount) {
                                    highestColor = "none";
                                    none = "none"
                                }
                            });

                            return (
                                <div style={{ height: "28px", width: "57px",display:"flex",justifyContent:"center", alignContent:"center", backgroundColor: `${ highestColor }` }}>
                                    {none}
                                </div>
                            );
                        };
                        return (

                            <tr key={index}>
                                <td>
                                    <h1> {data.ID} </h1>

                                </td>
                                <td>
                                    <div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "5px",
                                            fontSize: "21px"
                                        }}>
                                            {data.property2.map(number => {

                                                let backgroundColor;
                                                let color;

                                                if (number === 49) {
                                                    backgroundColor = "#c9d916";
                                                    color = "black"
                                                } else if (number % 3 === 2) {
                                                    backgroundColor = "#127ac2";
                                                    color = 'white';
                                                } else if (number % 3 === 1) {
                                                    backgroundColor = "#c62b18";
                                                    color = 'white';
                                                } else {
                                                    backgroundColor = "#178917";
                                                    color = 'white';
                                                }
                                                return <span style={{
                                                    backgroundColor, color, width: "32px",
                                                    borderRadius: '20px',
                                                    height: "32px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}>{number}</span>
                                            })}</div>
                                    </div>
                                </td>
                                <td>
                                    {shape()}

                                </td>
                                <td>
                                    <h1>

                                        {DrawResults()}
                                    </h1>
                                </td>
                                <td>
                                    {data.property5.map(data => {

                                        const number = data;
                                        const digits = Array.from(number.toString()).map(Number);

                                        return <>
                                            <h1 style={{ width: "31px", height: "30px", backgroundColor: "#c62b18", display: "flex", justifyContent: "center", alignItems: "center" }}>{digits[0]}</h1> &nbsp;&nbsp;
                                            <h1 style={{ width: "31px", height: "30px", backgroundColor: "#178917", display: "flex", justifyContent: "center", alignItems: "center" }}>{digits[1]}</h1>&nbsp;&nbsp;
                                            <h1 style={{ width: "31px", height: "30px", backgroundColor: "#127ac2", display: "flex", justifyContent: "center", alignItems: "center" }}>{digits[2]}</h1>

                                        </>
                                    })}
                              </td>
                                <td>
                                    <h1>{total}</h1>
                                </td>
                            </tr>
                        )
                    })}
                </tbody1>
            </tbody>

        </table>
    );
};



export default Table;




