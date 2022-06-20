import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./AdminsTable.module.scss";
import { deleteAdmin } from "../../api/ApiMethods";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import CustomButton from "./../CustomButton/CustomButton";

export default function AdminsTable({ admins, setAdmins, pager }) {
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteAdmin = async (adminId) => {
    confirm({
      description: "Are you sure you want to delete this admin?",
    }).then(async () => {
      const res = await deleteAdmin(adminId);
      if ((res.status = 200)) {
        enqueueSnackbar("Admin was deleted!", { variant: "info" });
        setAdmins(admins.filter(({ id }) => id !== adminId));
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
            <TableCell>EMAIL</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins?.map((admin, i) => (
            <TableRow key={admin.id}>
              <TableCell>#{++i + pager.startIndex}</TableCell>
              <TableCell scope="row">{admin.Admin.firstName}</TableCell>
              <TableCell>{admin.Admin.lastName}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>
                <CustomButton
                  label="Delete"
                  variant="outlined"
                  color="#ff0000"
                  onClick={() => handleDeleteAdmin(admin.id)}
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
