import React from "react";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import CInput from "../CInput";

const CMaskField = ({
  control,
  name = "",
  required = false,
  rules = {},
  mask = "99999",
  label,
  placeholder = "",
  defaultValue = "",
  alwaysShowMask = false,
  maskChar = "",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      label={label}
      placeholder={placeholder}
      rules={{
        required: required ? "required_field" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          value={value}
          alwaysShowMask={alwaysShowMask}
          onChange={onChange}
        >
          {(props) => (
            <CInput
              label={label}
              error={error}
              required={required}
              defaultValue={value}
              placeholder={placeholder}
              {...props}
            />
          )}
        </InputMask>
      )}
    ></Controller>
  );
};

export default CMaskField;
