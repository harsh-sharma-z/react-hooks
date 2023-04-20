import React from "react";
import { useRef,useState } from "react";
const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const refValue = useRef(null);
  const startTimer = () => {
    clearInterval(refValue.current);
    refValue.current=setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 0.01);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(refValue.current);
  };

  const resetTimer = () => {
    setSeconds(0);
  };

  return (
    <div style={{textAlign:"center"}}>
      <p  style={{width:"30%"}}>Timer: {seconds.toFixed(2)}</p>

      <span>
      <button style={{margin:"10px 20px " , display:"inline"}} onClick={startTimer}>Start</button>
      <button style={{margin:"10px 20px " , display:"inline"}} onClick={stopTimer}>Stop</button>
      <button style={{margin:"10px 20px " , display:"inline"}} onClick={resetTimer}>Reset</button>
      </span>
      
    </div>
  );
};
export default StopWatch;
