import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function Timer(props) {
  const { inputText, setInputText } = props;
  const { typingStarted, setTypingStarted } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("inputText.length", inputText.length);
    // Only start the timer if inputText.length is greater than 0
    if (inputText.length > 0) {
      const interval = setInterval(() => {
        setTime((ss) => ss + 1);
      }, 1000);

      // Clear the interval when the component unmounts or when inputText length becomes 0
      return () => clearInterval(interval);
    } else {
      // Clear the interval if inputText.length becomes 0
      return () => clearInterval();
    }
  }, [typingStarted]);

  const formatTime = (time) => {
    let updatedTime = time;
    const hours = Math.floor(updatedTime / 3600);
    updatedTime = updatedTime % 36000;
    const minutes = Math.floor(updatedTime / 60);

    updatedTime = updatedTime % 60;

    const seconds = updatedTime;
    console.log("time", hours, minutes, seconds);
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    console.log("time", paddedHours, paddedMinutes, paddedSeconds);
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  const handleReset = () => {
    setTime(0);
    setInputText("");
    setTypingStarted(false);
  };

  return (
    <>
      <Button>{formatTime(time)}</Button>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </>
  );
}