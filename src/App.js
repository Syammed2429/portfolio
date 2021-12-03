import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { myOwnTheme, blueTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? blueTheme : myOwnTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main onToggle={toggleTheme} theme={myOwnTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
