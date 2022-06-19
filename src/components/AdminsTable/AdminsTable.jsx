import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./AdminsTable.module.scss";
import { getAllAdmins, deleteAdmin } from "../../api/ApiMethods";
import { useEffect, useState } from "react";
import { useConfirm } from "material-ui-confirm";

export default function AdminsTable() {
  const [admins, setAdmins] = useState([]);
  const confirm = useConfirm();

  const fetchAdmins = async () => {
    const admins = await getAllAdmins();
    setAdmins(admins);
  };

  const handleDeleteAdmin = async (adminId) => {
    confirm({
      description: "Are you sure you want to delete this admin?",
    }).then(async () => {
      await deleteAdmin(adminId);
      await fetchAdmins();
    });
  };

  useEffect(() => {
    fetchAdmins();
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
            <TableCell>EMAIL</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins?.map((admin, i) => (
            <TableRow key={admin.id}>
              <TableCell>{++i}</TableCell>
              <TableCell scope="row">{admin.Admin.firstName}</TableCell>
              <TableCell>{admin.Admin.lastName}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteAdmin(admin.id)}
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
