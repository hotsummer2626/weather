import React from "react";
import styles from "./CurrentWeatherConditions.module.scss";
import Loading from "../Loading/Loading";

const CurrentWeatherConditions = ({ conditions }) => {
  let infoList = "";

  if (conditions) {
    const { main, visibility, wind } = conditions;
    infoList = [
      {
        name: "Temperature",
        value: `${parseFloat(main.temp - 273.15).toFixed(1)}°C`,
      },
      { name: "Humidity", value: `${main.humidity}%` },
      { name: "Pressure", value: `${main.pressure}hPa` },
      { name: "Wind Speed", value: `${wind.speed}m/s` },
      { name: "Visibility", value: `${visibility}m` },
    ];
  }

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        {infoList ? (
          infoList.map((item, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.value}>{item.value}</span>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default CurrentWeatherConditions;
