import React, { useEffect, useState } from "react";

const themesApp = {
  dark: {
    backgroundColor: "#FDFEFE",
    color: "white",
  },
  light: {
    backgroundColor: `rgb(205, 205, 205)`,
    color: "black",
  },
};

const themesCont = {
  dark: {
    backgroundColor: "#111319",
    color: "white",
  },
  light: {
    backgroundColor: `#E9EFF4`,
    color: "dark",
  },
};

// const themeAdmin = {
//   dark : {

//   }
// }

const initialTheme = {
  dark: false,
  themeApp: themesApp.light,
  themeCont: themesCont.light,
  toggle: () => { },
};

const ThemeContext = React.createContext(initialTheme);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  //get theme from localStorage

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };



  const themeApp = dark ? themesApp.dark : themesApp.light;
  const themeCont = dark ? themesCont.dark : themesCont.light;
  const value = {
    dark,
    themeApp,
    themeCont,
    toggle,
  };

  return (
    <ThemeContext.Provider value={{ value: value }} > {children}</ ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };
