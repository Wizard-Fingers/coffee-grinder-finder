import React from "react";
import styles from "./banner.module.css";
const Banner = (props) => {


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
           <span className={styles.title2}> Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>discover your nearest coffee spots!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}
        handleOnClick={props.button}>
           {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
