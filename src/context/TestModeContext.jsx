import { createContext, useContext, useState } from "react";

export const TextModeContext = createContext();

export const TextModeContextProvider = ({ children }) => {
	const [testTime, setTestTime] = useState(15);
	const values = () => {
		testTime, setTestTime;
	};
	return (
		<TextModeContext.Provider value={{testTime, setTestTime}}>
			{children}
		</TextModeContext.Provider>
	);
};

export const useTestMode = () => useContext(TextModeContext); 
