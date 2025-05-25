import { useEffect, useRef, useState } from 'react'
import { generate  } from "random-words";
import UpperMenu from './UpperMenu';
import { useTestMode } from '../context/TestModeContext';


const TypingBox = () => {
  const { testTime, setTestTime } = useTestMode();
  const [countDown, setCountDown] = useState(testTime);
  const inputRef = useRef(null);
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(15);
})
    
  useEffect(() => {
    setCountDown(testTime);
    setWordsArray(generate(testTime))
  },[testTime])
    
  const handelInputUser = (e) => {
    console.log(e);
  }

  const inputFocus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputFocus();    
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
            wordsArray.map(word => (
              <span key={word} className='word'>
                {
                  word.split('').map(char => (
                    <span key={char}>{char}</span>
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