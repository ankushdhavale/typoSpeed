import { createRef, useEffect, useMemo, useRef, useState } from 'react'
import { generate  } from "random-words";
import UpperMenu from './UpperMenu';
import { useTestMode } from '../context/TestModeContext';


const TypingBox = () => {
  const { testTime, setTestTime } = useTestMode();
  const [countDown, setCountDown] = useState(testTime);
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const inputRef = useRef(null);
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(15);
})
    
  useEffect(() => {
    setCountDown(testTime);
    setWordsArray(generate(testTime))
  }, [testTime])
  
  const wordSpanRef = useMemo(() => {
    return Array(wordsArray.length).fill(0).map(i => createRef(null));
  }, [wordsArray])
  
  console.log(wordSpanRef);
  
    
  const handelInputUser = (e) => {
    const allCurrChars = wordSpanRef[currWordIndex].current.childNodes;
    if (e.key === allCurrChars[currCharIndex].innerText) {
      allCurrChars[currCharIndex].className = "correctColor";
    } else {
      allCurrChars[currCharIndex].className = "inCorrectColor";
    }

    allCurrChars[currCharIndex + 1].className = "current";
    setCurrCharIndex(currCharIndex + 1);
  }

  const inputFocus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputFocus();
    wordSpanRef[0].current.childNodes[0].className = "current";
  }, [])
  

  const reset = () => {
    setWordsArray(generate(50))
  }
  return (
    <div>
      <UpperMenu countDown={countDown}/>
      <div className="type-box" onClick={inputFocus}>
        <div className="words">
          {
            wordsArray.map((word,index) => (
              <span key={index} className='word' ref={wordSpanRef[index]}>
                {
                  word.split('').map((char,i) => (
                    <span key={i} >{char}</span>
                  ))
                }</span>
            ))
          }
        </div>
        <input type="text"
          className='input-hidden'
          ref={inputRef}
          onKeyDown={handelInputUser}
        />
      </div>
    </div>
  )
}

export default TypingBox;