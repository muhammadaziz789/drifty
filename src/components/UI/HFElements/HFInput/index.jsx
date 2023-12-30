import { TextField } from "@mui/material";
import CInput from "components/UI/CInput";
import { Controller } from "react-hook-form";

export const HFInput = ({
  name = "",
  label = "",
  placeholder = "",
  defaultValue = "",
  required = false,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? "required_field" : false,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CInput
          onChange={onChange}
          required={required}
          value={value}
          error={error}
          label={label}
          placeholder={placeholder}
        />
      )}
    ></Controller>
  );
};
