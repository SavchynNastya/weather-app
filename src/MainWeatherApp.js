import React, { useState } from "react";
import axios from "axios";

import WeatherCard from "./WeatherCard";
import WeatherIcon from "./WeatherIcon";
import "./index.css";
import "./search_form_style.css";

export default function WeekDayCards() {
  let apiKey = "1dbaf30f100bc3f17acbc909606b0e7f";

  let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  let [date, setDate] = useState(new Date());
  //let [time, setTime] = useState(new Date());

  const [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("Paris");

  const [unit, setUnit] = useState("celsius");

  const [weatherData, setWeatherData] = useState({});
  const [icons, setIcons] = useState([]);
  const [weekDay, setWeekDay] = useState([]);
  const [weeklyTemp, setWeeklyTemp] = useState([]);

  function displayByCity(response) {
    /*
    setIcons({
      mon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      tues: `http://openweathermap.org/img/wn/${response.data.list[6].weather[0].icon}@2x.png`,
      wed: `http://openweathermap.org/img/wn/${response.data.list[13].weather[0].icon}@2x.png`,
      thur: `http://openweathermap.org/img/wn/${response.data.list[20].weather[0].icon}@2x.png`,
      fri: `http://openweathermap.org/img/wn/${response.data.list[28].weather[0].icon}@2x.png`,
      sat: `http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`,
      sun: `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`,
    });
    */
    setIcons([
      response.data.list[0].weather[0].icon,
      response.data.list[7].weather[0].icon,
      response.data.list[15].weather[0].icon,
      response.data.list[23].weather[0].icon,
      response.data.list[31].weather[0].icon,
    ]);
    setWeeklyTemp([
      Math.round(response.data.list[0].main.temp),
      Math.round(response.data.list[7].main.temp),
      Math.round(response.data.list[15].main.temp),
      Math.round(response.data.list[23].main.temp),
      Math.round(response.data.list[31].main.temp),
    ]);
    setWeekDay([
      response.data.list[0].dt,
      response.data.list[7].dt,
      response.data.list[15].dt,
      response.data.list[23].dt,
      response.data.list[31].dt,
    ]);
  }

  function convert(day) {
    let date = new Date(day * 1000);
    return daysOfWeek[date.getDay()];
  }

  function displayCels(event) {
    event.preventDefault();
    if (unit === "fahrenheit") {
      weatherData.temp = Math.round(convertToCels(weatherData.temp));
      setWeeklyTemp([
        Math.round(convertToCels(weeklyTemp[0])),
        Math.round(convertToCels(weeklyTemp[1])),
        Math.round(convertToCels(weeklyTemp[2])),
        Math.round(convertToCels(weeklyTemp[3])),
        Math.round(convertToCels(weeklyTemp[4])),
      ]);
      setUnit("celsius");
    }
  }

  function convertToCels(temp) {
    return ((temp - 32) * 5) / 9;
  }

  function convertToFahr(temp) {
    return temp * (9 / 5) + 32;
  }

  function displayFahr(event) {
    event.preventDefault();
    if (unit === "celsius") {
      weatherData.temp = Math.round(convertToFahr(weatherData.temp));
      setWeeklyTemp([
        Math.round(convertToFahr(weeklyTemp[0])),
        Math.round(convertToFahr(weeklyTemp[1])),
        Math.round(convertToFahr(weeklyTemp[2])),
        Math.round(convertToFahr(weeklyTemp[3])),
        Math.round(convertToFahr(weeklyTemp[4])),
      ]);
      setUnit("fahrenheit");
    } else return;
  }

  function showCurrent(response) {
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      //icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
    // weatherData.time = `${time.getHours()}:${time.getMinutes()}`;
    setDate(daysOfWeek[date.getDay()]);
    setLoaded(true);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiByCity).then(displayByCity);
    axios.get(apiUrl).then(showCurrent);
  }

  function changeByPos(response) {
    /*
    setIcons({
      mon: `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`,
      tues: `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`,
      wed: `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`,
      thur: `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`,
      fri: `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`,
      sat: `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`,
      sun: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
    });
    */
    setIcons([
      response.data.daily[0].weather[0].icon,
      response.data.daily[1].weather[0].icon,
      response.data.daily[2].weather[0].icon,
      response.data.daily[3].weather[0].icon,
      response.data.daily[4].weather[0].icon,
    ]);
    setWeeklyTemp([
      Math.round(response.data.daily[0].temp.day),
      Math.round(response.data.daily[1].temp.day),
      Math.round(response.data.daily[2].temp.day),
      Math.round(response.data.daily[3].temp.day),
      Math.round(response.data.daily[4].temp.day),
    ]);
    //response.data.daily[0].dt
    setWeekDay([
      response.data.daily[0].dt,
      response.data.daily[1].dt,
      response.data.daily[2].dt,
      response.data.daily[3].dt,
      response.data.daily[4].dt,
    ]);
  }

  function showByPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiDaysUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    let apiPosUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiPosUrl).then(showCurrent);
    axios.get(apiDaysUrl).then(changeByPos);
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(showByPosition);
  }

  if (loaded) {
    function updateCity(event) {
      event.preventDefault();
      setCity(event.target.value);
    }

    function searchByCity(event) {
      event.preventDefault();
      search();
    }

    return (
      <div className="cards">
        <div className="searching">
          <div className="form">
            <form onSubmit={searchByCity}>
              <input
                type="text"
                placeholder=" choose the sity..."
                onChange={updateCity}
              />
            </form>
          </div>
          <button id="current-location" onClick={getPosition}>
            <i className="fa-solid fa-location-dot" />
          </button>
        </div>
        <h1>{weatherData.city}</h1>
        <h4>
          <span id="week-Day">{date}</span>
          <span id="time"> {weatherData.time} </span>
          <br />
          humidity: <span id="humidity">{weatherData.humidity}</span>
          %<br />
          wind: <span id="wind-speed">{weatherData.wind}</span>
          km/hour
        </h4>
        <h2>now</h2>
        <span className="now_weather">
          <WeatherIcon code={weatherData.icon} />
          {/* <img id="cur-weather" src={weatherData.icon} alt="now-weather-icon" /> */}
        </span>
        <span className="now_temp">
          <span id="now-value"> {weatherData.temp} </span>
          <a href="#" className="link_celsius" onClick={displayCels}>
            ℃
          </a>{" "}
          |{" "}
          <a href="#" className="link_fahren" onClick={displayFahr}>
            ℉
          </a>
        </span>

        <div className="row">
          <WeatherCard
            day={convert(weekDay[0])}
            code={icons[0]}
            temp={weeklyTemp[0]}
          />

          <WeatherCard
            day={convert(weekDay[1])}
            code={icons[1]}
            temp={weeklyTemp[1]}
          />

          <WeatherCard
            day={convert(weekDay[2])}
            code={icons[2]}
            temp={weeklyTemp[2]}
          />

          <WeatherCard
            day={convert(weekDay[3])}
            code={icons[3]}
            temp={weeklyTemp[3]}
          />

          <WeatherCard
            day={convert(weekDay[4])}
            code={icons[4]}
            temp={weeklyTemp[4]}
          />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
