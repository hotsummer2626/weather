import React from "react";
import styles from "./ForcastWeatherList.module.scss";
import { weeks, weeks_short } from "../../constants";
import Loading from "../Loading/Loading";

const ForcastWeatherList = ({ currentWeather, forcastWeather }) => {
  const { main, dt, weather } = currentWeather;
  const currentDay = dt ? weeks[new Date(dt * 1000).getDay()] : "";
  const maxTemp = main
    ? `${parseFloat(main.temp_max - 273.15).toFixed(2)}°C`
    : "";
  const minTemp = main
    ? `${parseFloat(main.temp_min - 273.15).toFixed(2)}°C`
    : "";

  const displayWeather = forcastWeather ? forcastWeather.daily.slice(1, 7) : "";

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.item}>
          {currentWeather ? (
            <>
              <div className={styles.icon}>
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <div className={styles.details}>
                <div className={styles.week}>{currentDay}</div>
                <div className={styles.temp}>
                  <div className={styles.max}>Max - {maxTemp}</div>
                  <div>Min - {minTemp}</div>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}{" "}
        </li>
        {displayWeather
          ? displayWeather.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.icon}>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.week}>
                    {weeks_short[new Date(item.dt * 1000).getDay()]}
                  </div>
                  <div className={styles.temp}>
                    <div>
                      Max -{" "}
                      {`${parseFloat(item.temp.max - 273.15).toFixed(2)}°C`}
                    </div>
                    <div>
                      Min -{" "}
                      {`${parseFloat(item.temp.min - 273.15).toFixed(2)}°C`}
                    </div>
                  </div>
                </div>
              </li>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <li key={index} className={styles.item}>
                <Loading />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ForcastWeatherList;
