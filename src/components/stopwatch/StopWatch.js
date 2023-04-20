import React from "react";
import { useState } from "react";
const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 0.01);
    }, 10);
  };

  const stopTimer = () => {
    setSeconds(0);
  };

  return (
    <div>
      <p  style={{width:"30%"}}>Timer: {seconds.toFixed(2)}</p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
export default StopWatch;
