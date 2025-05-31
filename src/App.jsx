import { useRef } from "react";
import TypingBox from "./components/TypingBox";
import { GlobalStyles } from "./Styles/global.js";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {

  const { theme } = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<div className='canvas'>
				<GlobalStyles />
				<div>hello</div>
				<TypingBox />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
