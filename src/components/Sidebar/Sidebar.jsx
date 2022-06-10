import styles from "./Sidebar.module.scss";
import { ReactComponent as Player } from "../../assets/svg/players.svg";
import { ReactComponent as Club } from "../../assets/svg/clubs.svg";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Link to="/player" className={styles.subContainer}>
        <div className={styles.item}>
          <Player className={styles.icon} />
          <span className={styles.sectionText}>Players</span>
        </div>
      </Link>
      <Link to="/club" className={styles.subContainer}>
        <div className={styles.item}>
          <Club className={styles.icon} />
          <span className={styles.sectionText}>Clubs</span>
        </div>
      </Link>
    </div>
  );
};
export default Sidebar;
