import React, { useState, useRef } from 'react';

const Stopwatch = () => {
const [time, setTime]  = useState(0);

let intervalId = useRef();
//using this hook to make sure we dont lose the value of the interval id on rerender

const startTime = ()=>{
    intervalId.current = setInterval(()=>{
        setTime((prev)=>prev+1);
    },1000);
};
//this functions runs when start button is clicked

const stopTime= ()=> {
clearInterval(intervalId.current);
//remove the setInterval that was started

let times = JSON.parse(localStorage.getItem('stamps'));
//getting the list of timestamps

if (times){
    times=[...times,time];
    //appending a new timestamp
}else{
    times=[time];
}
localStorage.setItem('stamps',JSON.stringify(times));
//setting 'stamps' to the updated value

setTime(0);

};
//this function runs when stop button is clicked

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
    </div>
  );
};

export default Stopwatch;
