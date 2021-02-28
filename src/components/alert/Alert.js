import React from "react";
import styles from "./Alert.module.css";

const Alert = () => {
  return (
    <div className={styles.alert}>
      <h2 className={styles.descr}>This name exist!</h2>
    </div>
  );
};

export default Alert;
