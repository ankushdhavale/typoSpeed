import React, { useState } from 'react'
// import randomWords from "random-words";

// var randomWords = require('random-words');
const TypingBox = () => {
const [wordsArray,setWordsArray] = useState(()=>{
    // return randomWords(50);
})
    
    console.log(wordsArray);
    
  return (
    <div>
      Typing Box
    </div>
  )
}

export default TypingBox;