import React, { useState, useEffect } from 'react';

const Stamps = ()=>{
    const [elapsedTimes, setElapsedTimes] = useState([]);
//this hook will be used to load all of the timestamps from the local storage

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('stamps'));
        if(items){
            setElapsedTimes(items);
        }
        //on mount, load all timestamps into elapsedTimes
    },[]);
    
      return (
        <div>
          <h1> The Elapsed Times</h1>
          {elapsedTimes.map((time, index) => (
            <p key={index}>{time} seconds</p>
          ))}
        </div>
      ); 
}


export default Stamps;
