import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const CSelect = ({
  id = "1",
  options = [],
  label = "",
  required,
  error,
  field,
}) => {
  const handleChange = (event) => {
    if (field) field.onChange(event);
  };

  return (
    <>
      <div id={`cselect-${id}`} className={error ? "error" : ""}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {label}
            {required ? "*" : ""}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={label}
            onChange={handleChange}
          >
            {options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default CSelect;
