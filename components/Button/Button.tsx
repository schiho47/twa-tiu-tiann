import MuiButton from "@mui/material/Button";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  variant: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  sx?: object;
  onClick?: () => void;
  icon?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  size,
  color = "primary",
  sx,
  onClick,
  icon,
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {icon}
      {text}
    </MuiButton>
  );
};

export default Button;
