import React from "react";
import styles from "./Location.module.scss";

const Location = () => {
  return <div className={styles.container}>
    <div className={styles.location}>Asia/Kolkata</div>
    <div className={styles.coordinate}>6453875</div>
  </div>;
};

export default Location;
