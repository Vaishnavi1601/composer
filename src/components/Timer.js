import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import '../styles/InputBox.css';

export default function Timer(props) {
  const { inputText, setInputText } = props;
  const { typingStarted, setTypingStarted } = props;
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    let interval;
    if (typingStarted) {
      interval = setInterval(() => {
        setTime((ss) => ss + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [typingStarted]);

  const formatTime = (time) => {
    let updatedTime = time;
    const hours = Math.floor(updatedTime / 3600);
    updatedTime = updatedTime % 36000;
    const minutes = Math.floor(updatedTime / 60);

    updatedTime = updatedTime % 60;

    const seconds = updatedTime;
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  const handleReset = () => {
    setTime(0);
    setInputText("");
    setTypingStarted(false);
  };

  return (
    <>
      <p className="time">{formatTime(time)}</p>
      <Button className="customButton" variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </>
  );
}