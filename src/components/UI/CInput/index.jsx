import { TextField } from "@mui/material";

const CInput = ({ label, required, error, ...props }) => {
  return (
    <div id="cInput" className={error ? "error" : ""}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...props}
      />
    </div>
  );
};

export default CInput;
