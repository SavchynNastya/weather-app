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
