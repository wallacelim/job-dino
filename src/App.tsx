import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "components/Button";
import { Color } from "constants/Color";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.WHITE,
      contrastText: Color.DARK_PRIMARY,
    },
    secondary: {
      main: Color.GREEN_TERTIARY,
      contrastText: Color.DARK_PRIMARY,
    },
    success: {
      main: Color.GREEN_PRIMARY,
      contrastText: Color.WHITE,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to JobDino</p>
          <Button textContent="Start App" clickHandler={() => {}}/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
