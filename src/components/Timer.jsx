import React, { useState, useEffect } from "react";

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

  const formatNumber = (numero) => {
    return numero < 10 ? "0" + numero : numero;
  };

  const saveData = () => {
    // Adicione sua lógica de salvamento de dados aqui
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " && !isRunning) {
        start();
      } else {
        stop();
        saveData();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning]);

  const minutes = formatNumber(Math.floor(elapsedTime / 60000));
  const seconds = formatNumber(Math.floor((elapsedTime % 60000) / 1000));
  const ms = formatNumber(elapsedTime % 1000);

  return (
    <div className="timer-div">
      <div className="time-div">
        <h1>{minutes}:{seconds}:{ms}</h1>
      </div>
    </div>
  );
};

export default Timer;
