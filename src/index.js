import React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom/client";
import WeatherApp from "./App";
//import "bootstrap/dist/css/bootstrap.css";
//import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
reportWebVitals();
*/

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
