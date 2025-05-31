import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TextModeContextProvider } from "./context/TestModeContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
	<ThemeContextProvider>
		<TextModeContextProvider>
			<App />
		</TextModeContextProvider>
	</ThemeContextProvider>
);
