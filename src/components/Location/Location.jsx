import React from "react";
import styles from "./Location.module.scss";

const Location = ({ currentLocation }) => {
  const { coord, name, sys } = currentLocation;
  return (
    <div className={styles.container}>
      <div className={styles.location}>{`${name}/${sys.country}`}</div>
      <div
        className={styles.coordinate}
      >{`${coord.lat}LAT ${coord.lon}LON`}</div>
    </div>
  );
};

export default Location;
