import React from "react";
import styles from "./CurrentWeatherConditions.module.scss";

const CurrentWeatherConditions = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.item}>
          <span className={styles.name}>Humidity</span>
          <span className={styles.value}>30%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Humidity</span>
          <span className={styles.value}>30%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Humidity</span>
          <span className={styles.value}>30%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Humidity</span>
          <span className={styles.value}>30%</span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentWeatherConditions;
