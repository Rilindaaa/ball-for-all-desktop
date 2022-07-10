import styles from "./CustomCheckBox.module.scss";
import { Controller } from "react-hook-form";

import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckBox = ({
  defaultValue,
  label,
  control,
  name,
  rules,
  errors,
  type,
  multiline,
}) => {
  console.log("defaultValue", defaultValue);
  return (
    <div className={styles.container}>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value = true } }) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={onChange}
                value={value}
                defaultChecked={
                  defaultValue === undefined ? true : defaultValue
                }
              />
            }
            label={label}
            labelPlacement="end"
          />
        )}
      />
      <span className={styles.error}>{errors?.[name]?.message}</span>
    </div>
  );
};
export default CustomCheckBox;
