import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { myOwnTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={myOwnTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={myOwnTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
