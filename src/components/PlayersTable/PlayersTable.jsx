import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./PlayersTable.module.scss";
import { deletePlayer } from "../../api/ApiMethods";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import moment from "moment";
import CustomButton from "./../CustomButton/CustomButton";

export default function PlayersTable({ players, pager, setPlayers }) {
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeletePlayer = async (playerId) => {
    confirm({
      description: "Are you sure you want to delete this player?",
    }).then(async () => {
      const res = await deletePlayer(playerId);
      if ((res.status = 200)) {
        enqueueSnackbar("Player was deleted!", { variant: "info" });
        setPlayers(players.filter(({ id }) => id !== playerId));
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
            <TableCell>BIRTHDATE</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>FOOT</TableCell>
            <TableCell>POSITION</TableCell>
            <TableCell>WEIGHT</TableCell>
            <TableCell>HEIGHT</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players?.map((player, i) => (
            <TableRow key={player.id}>
              <TableCell>#{++i + pager.startIndex}</TableCell>
              <TableCell scope="row">{player.Player?.firstName}</TableCell>
              <TableCell>{player.Player?.lastName}</TableCell>
              <TableCell>{formatBirthDate(player.birthDate)}</TableCell>
              <TableCell>{player.email}</TableCell>
              <TableCell>{player.Player?.city}</TableCell>
              <TableCell>{player.Player?.foot}</TableCell>
              <TableCell>{player.Player?.position}</TableCell>
              <TableCell>{player.Player?.weight}</TableCell>
              <TableCell>{player.Player?.height}</TableCell>
              <TableCell>
                <CustomButton
                  label="Delete"
                  variant="outlined"
                  color="#ff0000"
                  onClick={() => handleDeletePlayer(player.id)}
                  containerStyle={{ width: "100px", height: "40px" }}
                  labelStyle={{ fontSize: "12px" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const formatBirthDate = (date) => {
  const formatedDate = moment(date).format("DD MMM YYYY");
  if (moment(date).isValid()) return formatedDate;
  return "";
};
