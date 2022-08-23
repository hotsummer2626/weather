import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./CurrentWeatherConditions.module.scss";

const CurrentWeatherConditions = ({ conditions }) => {
  const { main, visibility, wind } = conditions;
  const infoList = [
    {
      name: "Temperature",
      value: `${parseFloat(main.temp - 273.15).toFixed(1)}°C`,
    },
    { name: "Humidity", value: `${main.humidity}%` },
    { name: "Pressure", value: `${main.pressure}hPa` },
    { name: "Wind Speed", value: `${wind.speed}m/s` },
    { name: "Visibility", value: `${visibility}m` },
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        {infoList.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentWeatherConditions;
