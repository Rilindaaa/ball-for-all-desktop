import { LoadingButton } from "@mui/lab";
import styles from "./CustomButton.module.scss";

import React from "react";

const CustomButton = ({
  label,
  loading,
  onClick,
  containerStyle,
  labelStyle,
  startIcon,
  variant = "contained",
  color = "#228176",
}) => {
  return (
    <LoadingButton
      variant={variant}
      className={styles.container}
      style={containerStyle}
      onClick={onClick}
      loading={loading}
      type="submit"
      sx={{
        borderColor: color,
        color: variant !== "contained" ? color : "white",
        "&:hover": {
          backgroundColor: color,
          borderColor: color,
          color: "white",
        },
      }}
      startIcon={startIcon}
    >
      <span style={labelStyle} className={styles.label}>
        {label}
      </span>
    </LoadingButton>
  );
};
export default CustomButton;
