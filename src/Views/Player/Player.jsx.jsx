import React from "react";
import styles from "./Player.module.scss";
import PlayersTable from "../../components/PlayersTable/PlayersTable";

export default function Player() {
  return (
    <div className={styles.container}>
      <p className={styles.topText}>Players</p>
      <PlayersTable />
    </div>
  );
}
