import React, { useEffect, useState } from "react";
import styles from "./Vacancy.module.scss";
import VacancyTable from "../../components/Vacancy/VacancyTable";
import UserSelector from "../../components/UserSelector/UserSelector";
import { getAllClubs, getAllVacancies } from "../../api/ApiMethods";
import { CircularProgress } from "@mui/material";

export default function Vacancy() {
  const [clubs, setClubs] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVacancies = async (id) => {
    setLoading(true);
    try {
      const vacancies = await getAllVacancies({ id });
      setVacancies(vacancies.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchClubs = async () => {
    const clubs = await getAllClubs();
    setClubs(
      clubs?.map(({ Club }) => {
        return {
          label: Club.clubName,
          value: Club.clubId,
        };
      })
    );
  };

  useEffect(() => {
    fetchVacancies();
    fetchClubs();
  }, []);

  const handleClubFilter = (data) => {
    const id = data.target.value === "all" ? "" : data.target.value;
    fetchVacancies(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topText}>Vacancies</p>
        <UserSelector options={clubs} onChange={handleClubFilter} />
      </div>
      {!loading ? (
        vacancies?.length ? (
          <VacancyTable vacancies={vacancies} setVacancies={setVacancies} />
        ) : (
          <h4>No vacancies found!</h4>
        )
      ) : (
        <CircularProgress size={55} style={{ alignSelf: "center" }} />
      )}
    </div>
  );
}
