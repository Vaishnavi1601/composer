import InputBox from "./components/InputBox";
import Timer from "./components/Timer";
import "../src/styles/App.css";
import Picktopic from "./components/PickTopic";
import { useState } from "react";
import "../src/styles/App.css";

const App = () => {
  const [inputText, setInputText] = useState('');
  const [typingStarted, setTypingStarted] = useState(false);

  return (
    <div className="centerContainer">
      <Picktopic />
      <div className="inputBoxContainer">
        <InputBox
          inputText={inputText}
          setInputText={setInputText}
          typingStarted={typingStarted}
          setTypingStarted={setTypingStarted}
        />
      </div>
      <div className="timer">
        <Timer
          inputText={inputText}
          typingStarted={typingStarted}
          setTypingStarted={setTypingStarted}
          setInputText={setInputText}
        />
      </div>
    </div>
  );
};

export default App;
