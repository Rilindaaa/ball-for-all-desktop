import * as React from "react";
import styles from "./VacancyTable.module.scss";
import { deleteVacancy } from "../../api/ApiMethods";
import { useConfirm } from "material-ui-confirm";
import { positions } from "../../data/positions";
import CustomButton from "./../CustomButton/CustomButton";
import { ReactComponent as Applications } from "../../assets/svg/applications.svg";
import Avatar from "./../Avatar/Avatar";

export default function VacancyTable({ vacancies, setVacancies }) {
  const confirm = useConfirm();

  const handleDeleteVacancies = async (vacancyId) => {
    confirm({
      description: "Are you sure you want to delete this vacancy?",
    }).then(async () => {
      await deleteVacancy(vacancyId);
      setVacancies(vacancies.filter(({ id }) => id !== vacancyId));
    });
  };

  return (
    <div className={styles.vacancies}>
      {vacancies?.map((vacancy, i) => (
        <div className={styles.vacancy} key={vacancy.id}>
          <div className={styles.club}>
            <div className={styles.clubData}>
              <Avatar size={45} name={vacancy.Club.clubName} />
              <h2>{vacancy.Club.clubName}</h2>
            </div>
            <CustomButton
              label="Delete"
              variant="outlined"
              color="#ff0000"
              onClick={() => handleDeleteVacancies(vacancy.id)}
              containerStyle={{ width: "100px", height: "40px" }}
              labelStyle={{ fontSize: "12px" }}
            />
          </div>
          <div className={styles.position}>
            <h3>
              {
                positions.find(({ value }) => value === vacancy?.position)
                  ?.label
              }
            </h3>
          </div>
          <div className={styles.about}>
            <h4>About:</h4>
            <p>{vacancy?.about}</p>
          </div>
          <div className={styles.characteristics}>
            <div className={styles.characteristicsLabel}>
              <span>Age:</span>
              <span>Foot:</span>
              <span>Minimum height:</span>
            </div>
            <div className={styles.characteristicsValue}>
              <span>
                {vacancy?.ageFrom} - {vacancy?.ageTo}
              </span>
              <span>{vacancy?.foot}</span>
              <span>{vacancy?.height} cm</span>
            </div>
          </div>
          <div className={styles.applications}>
            <Applications className={styles.applicationsIcon} />
            {vacancy.VacancyApplications.length} applications
          </div>
        </div>
      ))}
    </div>
  );
}
