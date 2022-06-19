import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./VacancyTable.module.scss";
import { getAllVacancies, deleteVacancy } from "../../api/ApiMethods";
import { useEffect, useState } from "react";
import { useConfirm } from "material-ui-confirm";
import { positions } from "../../data/positions";

export default function VacancyTable() {
  const [vacancies, setVacancies] = useState([]);
  const confirm = useConfirm();

  const fetchVacancies = async () => {
    const vacancies = await getAllVacancies();
    setVacancies(vacancies);
  };

  const handleDeleteVacancies = async (vacancyId) => {
    confirm({
      description: "Are you sure you want to delete this vacancy?",
    }).then(async () => {
      await deleteVacancy(vacancyId);
      await fetchVacancies();
    });
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  return (
    <TableContainer
      style={{
        backgroundColor: "#1f1f1f",
        border: "0.5px solid rgba(173,173,173,0.3)",
        borderRadius: "6px",
      }}
      component={Paper}
    >
      <Table
        sx={{ minWidth: 650, borderCollapse: 0 }}
        style={{ borderCollapse: "0px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className={styles.tableHeadRow}>
            <TableCell>NR</TableCell>
            <TableCell>ABOUT</TableCell>
            <TableCell>HEIGHT</TableCell>
            <TableCell>FOOT</TableCell>
            <TableCell>POSITION</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vacancies?.map((vacancy, i) => (
            <TableRow key={vacancy.id}>
              <TableCell>{++i}</TableCell>
              <TableCell scope="row">{vacancy?.about}</TableCell>
              <TableCell>{vacancy?.height}</TableCell>
              <TableCell>{vacancy?.foot}</TableCell>
              <TableCell>
                {" "}
                {
                  positions.find(({ value }) => value === vacancy?.position)
                    ?.label
                }
              </TableCell>
              <TableCell>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteVacancies(vacancy.id)}
                >
                  Delete
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
