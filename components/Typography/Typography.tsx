import { ReactNode } from "react";
import MuiTypography from "@mui/material/Typography";
interface TypographyProps {
  children?: ReactNode;
  variant:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  gutterBottom?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  styles?: object;
  sx?: object;
  classes?: object;
}
const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  align,
  gutterBottom,
  styles,
  sx,
  ...others
}) => {
  return (
    <MuiTypography
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      style={styles}
      sx={sx}
      {...others}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
