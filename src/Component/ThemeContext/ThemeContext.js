import React, { useEffect, useState } from "react";
export { ThemeProvider, ThemeContext };

const themesApp = {
  dark: {
    // backgroundImage:
    //   "radial-gradient( circle farthest-corner at 10% 20%,  rgba(232,41,15,1) 0.1%, rgba(14,14,13,1) 90.1% )",
    backgroundColor: "#FDFEFE",
    color: "white",
  },
  light: {
    backgroundColor: `rgb(205, 205, 205)`,
    // backgroundColor: "#FFE53B",
    // backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
    color: "black",
  },
};

const themesCont = {
  dark: {
    // backgroundImage:
    //   "radial-gradient( circle farthest-corner at 10% 20%,  rgba(151,10,130,1) 0%, rgba(33,33,33,1) 100.2% )",
    backgroundColor: "#111319",
    color: "white",
  },
  light: {
    backgroundColor: `#E9EFF4`,
    // backgroundColor: "#FAD961",
    // backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
    color: "dark",
  },
};

const initialTheme = {
  dark: false,
  themeApp: themesApp.light,
  themeCont: themesCont.light,
  toggle: () => {},
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
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
