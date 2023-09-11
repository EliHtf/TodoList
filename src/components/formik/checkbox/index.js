import CheckboxMD from "@mui/material/Checkbox";

const Checkbox = ({ onChange, checked, item, ...props }) => {
  return (
    <>
      <CheckboxMD
        onChange={() => onChange(item.id)}
        checked={checked}
        {...props}
      />
    </>
  );
};
Checkbox.defaultProps = {
  checked: false,
};
export default Checkbox;
