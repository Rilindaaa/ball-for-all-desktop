import Button from "@mui/material/Button";
import styles from "./CustomButton.module.scss";

import React from "react";

const CustomInput = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      className={styles.container}
      onClick={onClick}
      type="submit"
    >
      <span className={styles.label}>{label}</span>
    </Button>
  );
};
export default CustomInput;
