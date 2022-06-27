import styles from "./UserSelector.module.scss";

import React from "react";
import { MenuItem, Select } from "@mui/material";
import Avatar from "../Avatar/Avatar";

const UserSelector = ({
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
      onChange={onChange}
      defaultValue={"all"}
      variant="outlined"
      sx={{
        color: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#228176",
        },
        "& .MuiSelect-iconOutlined": {
          color: "#228176",
        },
      }}
    >
      <MenuItem key={"all"} value={"all"}>
        <div className={styles.optionStyle}>
          <span>All</span>
        </div>
      </MenuItem>
      {options?.map(({ label, value }, i) => (
        <MenuItem key={value} value={value}>
          <div className={styles.optionStyle}>
            <Avatar name={label} size={35} />
            <span>{label}</span>
          </div>
        </MenuItem>
      ))}
    </Select>
  );
};
export default UserSelector;
