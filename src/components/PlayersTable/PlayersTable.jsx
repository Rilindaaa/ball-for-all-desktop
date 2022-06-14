import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./PlayersTable.module.scss";
import { getAllPlayers, deletePlayer } from "../../api/ApiMethods";
import { useEffect, useState } from "react";
import { useConfirm } from "material-ui-confirm";

export default function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const confirm = useConfirm();

  const fetchPlayers = async () => {
    const players = await getAllPlayers();
    setPlayers(players);
    console.log("players", players);
  };

  const handleDeletePlayer = async (playerId) => {
    confirm({
      description: "Are you sure you want to delete this player?",
    }).then(async () => {
      await deletePlayer(playerId);
      await fetchPlayers();
    });
  };

  useEffect(() => {
    fetchPlayers();
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
            <TableRow key={player.UserId}>
              <TableCell>{++i}</TableCell>
              <TableCell scope="row">{player.Player?.firstName}</TableCell>
              <TableCell>{player.Player?.lastName}</TableCell>
              <TableCell>{player.birthDate}</TableCell>
              <TableCell>{player.email}</TableCell>
              <TableCell>{player.Player?.city}</TableCell>
              <TableCell>{player.Player?.foot}</TableCell>
              <TableCell>{player.Player?.position}</TableCell>
              <TableCell>{player.Player?.weight}</TableCell>
              <TableCell>{player.Player?.height}</TableCell>
              <TableCell>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeletePlayer(player.id)}
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
