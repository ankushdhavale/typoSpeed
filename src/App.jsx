import { useRef } from "react";
import TypingBox from "./components/TypingBox"
import { GlobalStyles } from "./Styles/global.js"

function App() {
  
  return (
    <div className="canvas">
      <GlobalStyles/>
      <div>hello</div>
      <TypingBox/> 
    </div>
  )
}

export default App
