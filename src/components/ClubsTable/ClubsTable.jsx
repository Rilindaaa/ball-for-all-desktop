import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ClubsTable.module.scss";
import { getAllClubs, deleteClub } from "../../api/ApiMethods";
import { useEffect, useState } from "react";
import { useConfirm } from "material-ui-confirm";

export default function ClubsTable() {
  const [clubs, setClubs] = useState([]);
  const confirm = useConfirm();

  const fetchClubs = async () => {
    const clubs = await getAllClubs();
    setClubs(clubs);
  };

  const handleDeleteClub = async (clubId) => {
    confirm({
      description: "Are you sure you want to delete this club?",
    }).then(async () => {
      await deleteClub(clubId);
      await fetchClubs();
    });
  };

  useEffect(() => {
    fetchClubs();
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
            <TableCell>CLUBNAME</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>STADIUM</TableCell>
            <TableCell>LEAGUE LEVEL</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubs?.map((club, i) => (
            <TableRow key={club.Club.clubId}>
              <TableCell>{++i}</TableCell>
              <TableCell scope="row">{club.Club?.clubName}</TableCell>
              <TableCell>{club.Club?.city}</TableCell>
              <TableCell>{club.Club?.clubName}</TableCell>
              <TableCell>{club.Club?.leagueLevel}</TableCell>
              <TableCell>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteClub(club.id)}
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
