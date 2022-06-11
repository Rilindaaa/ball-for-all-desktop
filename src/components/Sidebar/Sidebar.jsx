import styles from "./Sidebar.module.scss";
import { ReactComponent as Player } from "../../assets/svg/players.svg";
import { ReactComponent as Club } from "../../assets/svg/clubs.svg";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/player"
        className={({ isActive }) =>
          styles.subContainer + (isActive ? " " + styles.linkActive : "")
        }
      >
        <div className={styles.item}>
          <Player className={styles.icon} />
          <span className={styles.sectionText}>Players</span>
        </div>
      </NavLink>
      <NavLink
        to="/club"
        className={({ isActive }) =>
          styles.subContainer + (isActive ? " " + styles.linkActive : "")
        }
      >
        <div className={styles.item}>
          <Club className={styles.icon} />
          <span className={styles.sectionText}>Clubs</span>
        </div>
      </NavLink>
    </div>
  );
};
export default Sidebar;
