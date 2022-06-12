import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import logo from "../../assets/images/logo-text-forte-white.png";

import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { handleSignOut } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <Logo width={280} height={60} />
      <span className={styles.logout} onClick={() => handleSignOut()}>
        Logout
      </span>
    </div>
  );
};
export default Header;
