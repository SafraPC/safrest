import React from "react";
import { createContext, useState } from "react";
import light from "../styles/themes/light";

export const ToggleContext = createContext({});

const ToggleProvider = ({ children }) => {
   
    const [toggle,setToggle] = useState(light.title);

    return(
      <ToggleContext.Provider value={{toggle,setToggle}}>
          {children}
      </ToggleContext.Provider>
  )

};
export { ToggleProvider };
