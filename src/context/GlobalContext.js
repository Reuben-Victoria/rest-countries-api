import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const DataProvider = ({children}) => {
    const [color, setColorMode] = useState(false);
    const toggleColorMode = () => {
      setColorMode((prevMode) => !prevMode);
      localStorage.setItem("colorMode", JSON.stringify(color))
    };
    let colorMode = JSON.parse(localStorage.getItem("colorMode"))
    return(
        <GlobalContext.Provider value={{colorMode, toggleColorMode}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;