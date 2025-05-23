import { createContext } from "react";

export const TextModeContext = createContext();

export const TextModeContextProvider = ({children}) => {
    return (
        <TextModeContext.Provider value={{name:"hello"}}>
            {children}
        </TextModeContext.Provider>
    )
}