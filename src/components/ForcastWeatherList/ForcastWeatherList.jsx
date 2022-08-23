import React from "react";
import styles from "./ForcastWeatherList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const ForcastWeatherList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.item}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className={styles.details}>
            <div className={styles.week}>Monday</div>
            <div className={styles.temp}>
              <div className={styles.night}>Night - 24.98</div>
              <div className={styles.day}>Day - 31.1</div>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          {" "}
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className={styles.details}>
            <div className={styles.week}>Mon</div>
            <div className={styles.temp}>
              <div className={styles.night}>Night - 24.98</div>
              <div className={styles.day}>Day - 31.1</div>
            </div>
          </div>
        </li>
        <li className={styles.item}>adfadsfdsf</li>
        <li className={styles.item}>adfadsfdsf</li>
        <li className={styles.item}>adfadsfdsf</li>
        <li className={styles.item}>adfadsfdsf</li>
        <li className={styles.item}>adfadsfdsf</li>
      </ul>
    </div>
  );
};

export default ForcastWeatherList;
