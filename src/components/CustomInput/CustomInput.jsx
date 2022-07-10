import TextField from "@mui/material/TextField";
import styles from "./CustomInput.module.scss";
import { Controller } from "react-hook-form";

import React from "react";

const CustomInput = ({
  defaultValue,
  label,
  control,
  name,
  rules,
  errors,
  type,
  multiline,
}) => {
  return (
    <div className={styles.container}>
      <Controller
        defaultValue={defaultValue || ""}
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            className={styles.inputContainer}
            value={value}
            onChange={onChange}
            type={type}
            multiline={multiline}
            sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#228176",
                },
              },
            }}
          />
        )}
      />
      <span className={styles.error}>{errors?.[name]?.message}</span>
    </div>
  );
};
export default CustomInput;
