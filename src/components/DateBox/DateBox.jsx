import React, { useState, useEffect } from "react";
import styles from "./DateBox.module.scss";
import { weeks, months } from "../../constants";

const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  let strTime = hours + ":" + minutes;
  return (
    <div className={styles.time}>
      {strTime}
      <span>{ampm}</span>
    </div>
  );
};

const formatDate = (date) => {
  let month = date.getMonth();
  let day = date.getDate();
  let week = date.getDay();
  day = day.toString().padStart(2, "0");
  return (
    <div
      className={styles.date}
    >{`${weeks[week]}, ${day} ${months[month]}`}</div>
  );
};

const DateBox = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className={styles.container}>
      {formatTime(time)}
      {formatDate(time)}
    </div>
  );
};

export default DateBox;
