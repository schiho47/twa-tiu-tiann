import MuiChip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ChipProps {
  label: string;
  variant?: "outlined" | "filled";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  sx?: object;
  onClick: (e?: any) => void;
}
const Chip: React.FC<ChipProps> = ({
  label,
  variant = "outlined",
  color,
  sx,
  onClick,
}) => {
  return (
    <Stack direction="row" spacing={1} onClick={onClick}>
      <MuiChip label={label} variant={variant} color={color} sx={sx} />
    </Stack>
  );
};

export default Chip;
