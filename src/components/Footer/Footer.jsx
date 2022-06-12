import styles from "./Footer.module.scss";
import copyright from "../../assets/svg/copyright.svg";

import React from "react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.textContainer}>
        <p>Copyright</p>
        <img src={copyright} alt="Logo" className={styles.space} />
        <p>2022</p>
        <p className={styles.name}>Ball for all.</p>
        <p>All rights reserved</p>
      </span>
    </div>
  );
};
export default Footer;
