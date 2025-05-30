import { useRef } from "react";
import TypingBox from "./components/TypingBox"
import { GlobalStyles } from "./Styles/global.js"
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    <div className="canvas">
      <GlobalStyles/>
      <div>hello</div>
      <TypingBox /> 
      <Footer/>
    </div>
  )
}

export default App
