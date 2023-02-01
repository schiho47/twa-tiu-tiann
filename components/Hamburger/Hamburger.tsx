import MenuIcon from "@mui/icons-material/Menu";

interface HamburgerProps {
  onClick: () => void;
}
const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  return (
    <MenuIcon onClick={onClick} fontSize="large" sx={{ cursor: "pointer" }} />
  );
};

export default Hamburger;
