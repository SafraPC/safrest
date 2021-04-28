import React from "react";
import { createContext, useState } from "react";
import light from "../styles/themes/light";

export const ToggleContext = createContext({});

const ToggleProvider = ({ children }) => {
   
  console.log(JSON.parse(localStorage.getItem("theme")))
    const [toggle,setToggle] = useState();
    if(!toggle){
      if(localStorage.getItem('theme')){
        setToggle(JSON.parse(localStorage.getItem("theme")));
      }else{
        setToggle(light);
        localStorage.setItem('theme',JSON.stringify(light));
      }
    }else{
      localStorage.setItem('theme',JSON.stringify(toggle));
    }

    return(
      <ToggleContext.Provider value={{toggle,setToggle}}>
          {children}
      </ToggleContext.Provider>
  )

};
export { ToggleProvider };
