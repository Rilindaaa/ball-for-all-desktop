import React from "react";
import styles from "./Clubs.module.scss";
import ClubsTable from "../../components/ClubsTable/ClubsTable";

export default function Club() {
  return (
    <div className={styles.container}>
      <p className={styles.topText}>Clubs</p>
      <ClubsTable />
    </div>
  );
}
