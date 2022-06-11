import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-text-forte-white.png";

import React from "react";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" width={219} className={styles.image} />
    </div>
  );
};
export default Header;
