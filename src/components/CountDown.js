import React, { useEffect, useState } from 'react';

const Countdown = (props) => {


    return <div className="container">{props.renderButtons()}</div>;
};

export default Countdown;
