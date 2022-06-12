import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./PlayersTable.module.scss";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Rilinda Xhaqkaj", "15/03/2001", "rx47891@ubt-uni.net"),
  createData(2, "Rilinda Xhaqkaj", "15/03/2001", "rx47891@ubt-uni.net"),
  createData(3, "Rilinda Xhaqkaj", "15/03/2001", "rx47891@ubt-uni.net"),
  createData(4, "Rilinda Xhaqkaj", "15/03/2001", "rx47891@ubt-uni.net"),
  createData(5, "Rilinda Xhaqkaj", "15/03/2001", "rx47891@ubt-uni.net"),
];

export default function PlayersTable() {
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
          <TableRow>
            <TableCell>NR</TableCell>
            <TableCell align="left">FULLNAME</TableCell>
            <TableCell align="left">DATE OF BIRTH</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="left">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left" style={{ color: "red" }}>
                Delete
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
