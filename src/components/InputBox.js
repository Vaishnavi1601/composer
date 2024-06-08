import React from 'react';
import '../styles/InputBox.css';
export default function InputBox(props) {

  const {inputText, setInputText} = props;
  const {setTypingStarted} = props;

  const handleChange = (event) => {
    setInputText(event.target.value);
    setTypingStarted(true);
  };

  const countWords = (text) => {
    return text.split(' ').filter(word => word.length > 0).length;
  };

  return (
    <>
      <textarea 
        value={inputText} 
        onChange={handleChange} 
        className="inputText" 
      />    
    <p className='wordCount'>Word count: {countWords(inputText)}</p>
    </>
  );
}
