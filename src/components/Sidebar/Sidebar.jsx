import styles from "./Sidebar.module.scss";
import { ReactComponent as Player } from "../../assets/svg/players.svg";
import { ReactComponent as Club } from "../../assets/svg/clubs.svg";
import { ReactComponent as Admin } from "../../assets/svg/admins.svg";
import { ReactComponent as Vacancy } from "../../assets/svg/vacancy.svg";
import { ReactComponent as Reports } from "../../assets/svg/reports.svg";
import { ReactComponent as Ads } from "../../assets/svg/ads.svg";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { loading, authData } = useContext(AuthContext);

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
      {!loading && authData?.Admin?.isSuperAdmin && (
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            styles.subContainer + (isActive ? " " + styles.linkActive : "")
          }
        >
          <div className={styles.item}>
            <Admin className={styles.icon} />
            <span className={styles.sectionText}>Admins</span>
          </div>
        </NavLink>
      )}
      <NavLink
        to="/vacancy"
        className={({ isActive }) =>
          styles.subContainer + (isActive ? " " + styles.linkActive : "")
        }
      >
        <div className={styles.item}>
          <Vacancy className={styles.icon} width={27} height={25} />
          <span className={styles.sectionText}>Vacancies</span>
        </div>
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          styles.subContainer + (isActive ? " " + styles.linkActive : "")
        }
      >
        <div className={styles.item}>
          <Reports className={styles.icon} width={27} height={25} />
          <span className={styles.sectionText}>Reports</span>
        </div>
      </NavLink>
      <NavLink
        to="/ads"
        className={({ isActive }) =>
          styles.subContainer + (isActive ? " " + styles.linkActive : "")
        }
      >
        <div className={styles.item}>
          <Ads className={styles.icon} width={27} height={25} />
          <span className={styles.sectionText}>Ads</span>
        </div>
      </NavLink>
    </div>
  );
};
export default Sidebar;
