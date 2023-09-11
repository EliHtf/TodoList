import ButtonMD from "@mui/material/Button";

const Button = ({ children, variant, type, onClick, ...props }) => {
  return (
    <ButtonMD
      variant={variant}
      type={type}
      onClick={(e) => onClick && onClick(e)}
      {...props}
    >
      {children}
    </ButtonMD>
  );
};

Button.defaultProps = {
  variant: "outlined",
  type: "button",
};

export default Button;
