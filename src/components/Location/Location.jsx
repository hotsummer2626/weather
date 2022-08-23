import React from "react";
import styles from "./Location.module.scss";
import Loading from "../Loading/Loading";

const Location = ({ currentLocation }) => {
  const { coord, name, sys } = currentLocation;
  return (
    <div className={styles.container}>
      {currentLocation ? (
        <>
          <div className={styles.location}>{`${name}/${sys.country}`}</div>
          <div
            className={styles.coordinate}
          >{`${coord.lat}LAT ${coord.lon}LON`}</div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Location;
