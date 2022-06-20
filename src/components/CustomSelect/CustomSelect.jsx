import styles from "./CustomSelect.module.scss";

import React from "react";
import { MenuItem, Select } from "@mui/material";

const CustomSelect = ({
  label,
  options,
  onChange,
  containerStyle,
  optionStyle,
  defaultValue,
}) => {
  return (
    <Select
      className={styles.select}
      style={containerStyle}
      label={label}
      onChange={onChange}
      defaultValue={defaultValue}
      variant="standard"
      sx={{
        color: "white",
        "& .MuiInput-underline": {
          borderColor: "white",
        },
      }}
    >
      {options?.map(({ label, value }, i) => (
        <MenuItem key={value} style={optionStyle} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
export default CustomSelect;
