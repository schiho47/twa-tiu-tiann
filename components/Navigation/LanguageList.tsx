import { useContext } from "react";
import { MenuList, MenuItem, Typography } from "@mui/material";
import HamStatusContext from "context/ham-status-context";
interface LanguageListProps {
  isOpen: boolean;
}

const LanguageList: React.FC<LanguageListProps> = ({ isOpen }) => {
  // const languages = ["English", "日本語", "한국어"];
  const languages = ["English"];
  const { isHamOpen } = useContext(HamStatusContext);

  return (
    <>
      {!isHamOpen && (
        <div
          style={{
            position: "absolute",
            top: "2.5rem",
            zIndex: "10",
            backgroundColor: "white",
            borderRadius: "10px",
            display: isOpen ? "block" : "none",
          }}
        >
          <MenuList>
            {languages.map((lan) => (
              <MenuItem key={lan} onClick={() => {}}>
                <Typography textAlign="center">{lan}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        </div>
      )}
      {isHamOpen && (
        <div
          style={{
            position: "absolute",
            width: "250px",
            top: "3rem",
            zIndex: "10",
            backgroundColor: "white",
            borderRadius: "10px",
            display: isOpen ? "flex" : "none",
          }}
        >
          {languages.map((lan) => (
            <MenuItem key={lan} onClick={() => {}}>
              <Typography textAlign="center">{lan}</Typography>
            </MenuItem>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageList;
