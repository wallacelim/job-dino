import React from 'react';
import {Button} from "../components/Button"
import logo from '../logo.svg'


export function HomePage() {
    return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to JobDino</p>
      <Button textContent="Start App" clickHandler={() => {}} />
    </header>
  </div>
}