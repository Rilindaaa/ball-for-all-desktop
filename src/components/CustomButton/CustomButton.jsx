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
}) => {
  return (
    <LoadingButton
      variant="contained"
      className={styles.container}
      style={containerStyle}
      onClick={onClick}
      loading={loading}
      type="submit"
      startIcon={startIcon}
    >
      <span style={labelStyle} className={styles.label}>
        {label}
      </span>
    </LoadingButton>
  );
};
export default CustomButton;
