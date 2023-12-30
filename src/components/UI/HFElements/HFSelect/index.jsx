import { Controller } from "react-hook-form";
import CSelect from "../../CElements/CSelect";

const HFSelect = ({
  name,
  control,
  rules,
  defaultValue,
  required = false,
  options = [],
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: required ? "required_field" : false,
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <CSelect
          field={field}
          options={options}
          error={error}
          label={label}
          required={required}
        />
      )}
    />
  );
};

export default HFSelect;
