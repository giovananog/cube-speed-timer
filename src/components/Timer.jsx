import React, { useState, useEffect } from "react";
import DisableElevation from "./Button";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        const currentTime = new Date().getTime();
        const newElapsedTime = currentTime - startTime;
        setElapsedTime(newElapsedTime);
      }, 100);

      return () => clearInterval(timerId);
    }
  }, [isRunning, startTime]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      setStartTime(new Date().getTime());
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  const formatNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };

  // const saveData = () => {
  //   fetch('../../public/data.json', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`Network error: ${response.statusText}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => console.error('Save error', error));
  // };
  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " && !isRunning) {
        start();
      } else {
        stop();
        // saveData();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning, start]);

  const minutes = formatNumber(Math.floor(elapsedTime / 60000));
  const seconds = formatNumber(Math.floor((elapsedTime % 60000) / 1000));
  const ms = formatNumber(elapsedTime % 1000);

  return (
    <div>

    <div className="timer-div">
      <div className="time-div">
        <h1>{minutes}:{seconds}:{ms}</h1>
      </div>
    </div>
    <div className="buttons-div">

        <DisableElevation text='start (space)'/>
        <DisableElevation text='stop (any key)'/>

      </div>

    </div>
  );
};

export default Timer;
