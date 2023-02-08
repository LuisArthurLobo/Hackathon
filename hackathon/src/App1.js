import React, { useState, useEffect } from 'react';

const TimeCounter = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonColor, setButtonColor] = useState('lightblue');

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => setTime((time) => time + 1), 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
    setButtonColor('green');
  };
  const handleStop = () => {
    setIsRunning(false);
    setButtonColor('red');
  };

  return (
    <div>
      <p>{time}</p>
      <button onClick={handleStart} style={{ backgroundColor: buttonColor }}>Iniciar</button>
      <button onClick={handleStop} style={{ backgroundColor: buttonColor }}>Parar</button>
    </div>
  );
};

export default TimeCounter;


function MyComponent() {
  return (
    <div>
      <p>Esse é o Aplicativo, Galerinha</p>
    </div>
  );
}

export {MyComponent};