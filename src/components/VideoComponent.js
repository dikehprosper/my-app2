import React from 'react';
import draw20 from "./images/draw20.png";
const VideoComponent = (props) => {
    const { source, autoplay, loop, muted, approximateNumber, videoView } = props;

    return (
        <div
            style={{
                position: "absolute",
                zIndex: "100000",
                height: "497px",
                width: "882px",
                bottom: "170px",
                left: "253px",
                top: "125px",
            }}
        >
            <div
                className="image-value"
                style={{
                    position: "absolute",
                    zIndex: "1000000",
                    color: "white",
                    top: "290px",
                    heigth: "10px",
                    left: "180px",
                }}
            >
                <img src={draw20} alt="" height="101px" width="400px" />{" "}
            </div>
            <video src={source} autoPlay={autoplay} loop={loop} muted={muted} />
            <h2
                style={{
                    position: "absolute",
                    zIndex: "100000000",
                    color: "white",
                    top: "222px",
                    display: "flex",
                    justifyContent: "center",
                    left: 0,
                    right: 0,
                    fontSize: "70px",
                    fontWeight: "bold",
                }}
            >
                {" "}
                NGN &nbsp;{videoView && approximateNumber}
            </h2>{" "}
        </div>
    );
};

export default VideoComponent;
