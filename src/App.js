/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from "react";
import PlaceSearch from "./Place_search";
import NowWeekDayCards from "./Weekday_cards";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <PlaceSearch />
      <NowWeekDayCards />
      <p>
        {" "}
        <a href="https://github.com/SavchynNastya/SheCodesPlus-project">
          Open-source code
        </a>{" "}
        by Anastasia Savchyn
      </p>
    </div>
  );
}
