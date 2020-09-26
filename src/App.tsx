import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "components/Button";
import { Colors } from "constants/Colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.WHITE,
      contrastText: Colors.DARK_PRIMARY,
    },
    secondary: {
      main: Colors.GREEN_TERTIARY,
      contrastText: Colors.DARK_PRIMARY,
    },
    success: {
      main: Colors.GREEN_PRIMARY,
      contrastText: Colors.WHITE,
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
