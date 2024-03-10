import React, { useState, useEffect, useCallback } from "react";
import DisableElevation from "./general/Button";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [formattedTime, setFormattedTime] = useState('00:00:00');
  const [timeData, setTimeData] = useState([]);


  const formatNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      setStartTime(new Date().getTime());
    }
  }, [isRunning]);


  const saveData = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${formatNumber(currentDate.getMonth() + 1)}-${formatNumber(currentDate.getDate())}`;

    const data = {
      date: formattedDate,
      time: formattedTime,
    };

    
    setTimeData([...timeData, data]);
    localStorage.setItem("timerData", JSON.stringify(timeData));    

  };
  
  const stop = useCallback(() => {
    setIsRunning(false);
    saveData();
  }, [saveData]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " && !isRunning) {
        start();
      } else {
        stop();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning, start, stop]);

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        const currentTime = new Date().getTime();
        const newElapsedTime = currentTime - startTime;
        setFormattedTime(`${formatNumber(Math.floor(newElapsedTime / 60000))}:${formatNumber(Math.floor((newElapsedTime % 60000) / 1000))}:${formatNumber(newElapsedTime % 100)}`);
      }, 100);

      return () => clearInterval(timerId);
    }
  }, [isRunning, startTime]);

  return (
    <div>
      <div className="timer-div">
        <div className="time-div">
          <h1>{formattedTime}</h1>
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
