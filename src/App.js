import React from "react";
//import PlaceSearch from "./Place_search";
import WeekDayCards from "./MainWeatherApp";

export default function WeatherApp() {
  return (
    <div>
      <div className="weather-app container">
        <WeekDayCards />
      </div>
      <p>
        {" "}
        <a
          href="https://github.com/SavchynNastya/SheCodesPlus-project"
          target="_blanc"
        >
          Open-source code
        </a>{" "}
        by Anastasia Savchyn
      </p>
    </div>
  );
}
