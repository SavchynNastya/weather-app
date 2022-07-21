import React, { useState } from "react";
import axios from "axios";

import "./index.css";
import "./search_form_style.css";

export default function WeekDayCards() {
  let apiKey = "1dbaf30f100bc3f17acbc909606b0e7f";

  let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  let [date, setDate] = useState(new Date());
  let [time, setTime] = useState(new Date());

  const [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("Paris");

  const [weatherData, setWeatherData] = useState({});
  const [icons, setIcons] = useState({});
  const [weeklyTemp, setWeeklyTemp] = useState({});

  function displayByCity(response) {
    setIcons({
      mon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      tues: `http://openweathermap.org/img/wn/${response.data.list[6].weather[0].icon}@2x.png`,
      wed: `http://openweathermap.org/img/wn/${response.data.list[13].weather[0].icon}@2x.png`,
      thur: `http://openweathermap.org/img/wn/${response.data.list[20].weather[0].icon}@2x.png`,
      fri: `http://openweathermap.org/img/wn/${response.data.list[28].weather[0].icon}@2x.png`,
      sat: `http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`,
      sun: `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`,
    });
    setWeeklyTemp({
      mon: Math.round(response.data.list[0].main.temp),
      tues: Math.round(response.data.list[6].main.temp),
      wed: Math.round(response.data.list[13].main.temp),
      thur: Math.round(response.data.list[20].main.temp),
      fri: Math.round(response.data.list[28].main.temp),
      sat: Math.round(response.data.list[32].main.temp),
      sun: Math.round(response.data.list[39].main.temp),
    });
  }

  function displayCels() {
    weatherData.temp = Math.round(((weatherData.temp - 32) * 5) / 9);
    setWeeklyTemp({
      mon: Math.round(((weeklyTemp.mon - 32) * 5) / 9),
      tues: Math.round(((weeklyTemp.tues - 32) * 5) / 9),
      wed: Math.round(((weeklyTemp.wed - 32) * 5) / 9),
      thur: Math.round(((weeklyTemp.thur - 32) * 5) / 9),
      fri: Math.round(((weeklyTemp.fri - 32) * 5) / 9),
      sat: Math.round(((weeklyTemp.sat - 32) * 5) / 9),
      sun: Math.round(((weeklyTemp.sun - 32) * 5) / 9),
    });
  }

  function displayFahr() {
    weatherData.temp = Math.round(weatherData.temp * (9 / 5) + 32);
    setWeeklyTemp({
      mon: Math.round(weeklyTemp.mon * (9 / 5) + 32),
      tues: Math.round(weeklyTemp.tues * (9 / 5) + 32),
      wed: Math.round(weeklyTemp.wed * (9 / 5) + 32),
      thur: Math.round(weeklyTemp.thur * (9 / 5) + 32),
      fri: Math.round(weeklyTemp.fri * (9 / 5) + 32),
      sat: Math.round(weeklyTemp.sat * (9 / 5) + 32),
      sun: Math.round(weeklyTemp.sun * (9 / 5) + 32),
    });
  }

  function showCurrent(response) {
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
    setTime(`${time.getHours()}:${time.getMinutes()}`);
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
    setIcons({
      mon: `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`,
      tues: `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`,
      wed: `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`,
      thur: `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`,
      fri: `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`,
      sat: `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`,
      sun: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
    });
    setWeeklyTemp({
      mon: Math.round(response.data.daily[1].temp.day),
      tues: Math.round(response.data.daily[2].temp.day),
      wed: Math.round(response.data.daily[3].temp.day),
      thur: Math.round(response.data.daily[4].temp.day),
      fri: Math.round(response.data.daily[5].temp.day),
      sat: Math.round(response.data.daily[6].temp.day),
      sun: Math.round(response.data.daily[0].temp.day),
    });
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
          <span id="time"> {time} </span>
          <br />
          humidity: <span id="humidity">{weatherData.humidity}</span>
          %<br />
          wind: <span id="wind-speed">{weatherData.wind}</span>
          km/hour
        </h4>
        <h2>now</h2>
        <span className="now_weather">
          <img id="cur-weather" src={weatherData.icon} alt="now-weather-icon" />
        </span>
        <span className="now_temp">
          <span id="now-value">{weatherData.temp}</span>
          <span className="temp_sign"></span>{" "}
          <span className="link_celsius" onClick={displayCels}>
            ℃
          </span>{" "}
          |{" "}
          <span className="link_fahren" onClick={displayFahr}>
            ℉
          </span>
        </span>

        <div className="row">
          <div className="col">
            <div className="Mon">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Mon</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="mon-icon" src={icons.mon} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="monTemp">{weeklyTemp.mon}</span>°
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Tues">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Tues</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="tues-icon" src={icons.tues} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="tuesTemp">{weeklyTemp.tues}</span>°
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Wed">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Wed</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="wed-icon" src={icons.wed} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="wedTemp">{weeklyTemp.wed}</span>°
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Thur">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Thur</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="thur-icon" src={icons.thur} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="thurTemp">{weeklyTemp.thur}</span>°
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Fri">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Fri</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="fri-icon" src={icons.fri} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="friTemp">{weeklyTemp.fri}</span>°
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Sat">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Sat</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="sat-icon" src={icons.sat} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="satTemp">{weeklyTemp.sat}</span>°
                    </span>
                  </h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Sun">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "80px" }}
              >
                <div className="card-header">Sun</div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    <img id="sun-icon" src={icons.sun} alt="weather-icon" />
                    <br />
                    <span className="temp">
                      <span id="sunTemp">{weeklyTemp.sun}</span>°
                    </span>
                  </h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
