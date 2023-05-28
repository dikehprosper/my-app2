import React from 'react'
import Table from './Table'

const Body3 = ({ ball3 }) => {

   
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", marginRight: "22px", backgroundColor: "black", height: "585px", marginBottom: "2px" }}>
            <div className='f130'>
                <div className='f1301'>
                    {/* {props.backgroundColor ? <img src={image9} alt="logo" className='f1 f7' /> : <img src={image16} alt="logo" className='f18' />}
                    <div className='f12'></div> */}
                    <h1>  History</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image4} alt="logo" className='f1 f2' />
                    <div className='f12'></div> */}
                    <h1> Bet49</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image5} alt="logo" className='f1 f3' />
                    <div className='f12'></div> */}
                    <h1>Hi Lo</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image6} alt="logo" className='f1 f4' />
                    <div className='f12'></div> */}
                    <h1>Dragon</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image7} alt="logo" className='f1 f5' />
                    <div className='f12'></div> */}
                    <h1> Rainbow</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image8} alt="logo" className='f1 f6' />
                    <div className='f12'></div> */}
                    <h1> Total Colour</h1>
                </div>
                <div className='f13'>
                    {/* <img src={image8} alt="logo" className='f1 f6' />
                    <div className='f12'></div> */}
                    <h1>Bet Zero</h1>
                </div>
            </div>
            <div className='f131' style={{ border: "2px solid #838383", display: "flex", height: "100%", color: "white" }}>

                <Table ball={ball3} />

            </div>



        </div >
    )
}

export default Body3