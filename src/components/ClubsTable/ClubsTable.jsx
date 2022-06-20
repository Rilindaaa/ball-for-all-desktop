import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ClubsTable.module.scss";
import { deleteClub } from "../../api/ApiMethods";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";

export default function ClubsTable({ clubs, pager, setClubs }) {
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteClub = async (clubId) => {
    confirm({
      description: "Are you sure you want to delete this club?",
    }).then(async () => {
      const res = await deleteClub(clubId);
      if ((res.status = 200)) {
        enqueueSnackbar("Club was deleted!", { variant: "info" });
        setClubs(clubs.filter(({ id }) => id !== clubId));
      } else {
        enqueueSnackbar("Please try again!", { variant: "error" });
      }
    });
  };

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
            <TableCell></TableCell>
            <TableCell>FIRSTNAME</TableCell>
            <TableCell>LASTNAME</TableCell>
            <TableCell>CLUBNAME</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>STADIUM</TableCell>
            <TableCell>LEAGUE LEVEL</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubs?.map((club, i) => (
            <TableRow key={club.Club?.clubId}>
              <TableCell>#{++i + pager.startIndex}</TableCell>
              <TableCell>{club.Club?.firstName}</TableCell>
              <TableCell>{club.Club?.lastName}</TableCell>
              <TableCell>{club.Club?.clubName}</TableCell>
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
