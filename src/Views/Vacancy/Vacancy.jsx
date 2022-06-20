import React from "react";
import styles from "./Vacancy.module.scss";
import VacancyTable from "../../components/Vacancy/VacancyTable";

export default function Vacancy() {
  return (
    <div className={styles.container}>
      <p className={styles.topText}>Vacancies</p>
      <VacancyTable />
    </div>
  );
}
