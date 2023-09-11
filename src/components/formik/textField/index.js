import React from "react";
import TextFieldMD from "@mui/material/TextField";
const TextField = ({
  name,
  value,
  onChange,
  placeholder,
  variant,
  id,
  label,
  ...props
}) => {
  return (
    <>
      <TextFieldMD
        id={id && id}
        label={label && label}
        name={name && name}
        value={value && value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        variant={variant}
        {...props}
      />
    </>
  );
};

TextField.defaultProps = { variant: "outlined", placeholder: "text ..." };
export default TextField;
