import { useContext } from "react";
import { useRouter } from "next/router";
import { MenuList, MenuItem, Typography } from "@mui/material";
import HamStatusContext from "context/ham-status-context";
import Link from "next/link";

interface LanguageListProps {
  isOpen: boolean;
}

const LanguageList: React.FC<LanguageListProps> = ({ isOpen }) => {
  // const languages = ["English", "日本語", "한국어"];
  const router = useRouter();
  const { pathname, query } = router;
  const nextLocale = router.locale === "en" ? "zh-TW" : "en";
  const languages = [
    { language: "繁體中文", locale: "zh" },
    { language: "English", locale: "en" },
  ];
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
              <MenuItem key={lan.locale}>
                <Link locale={nextLocale} href={{ pathname, query }}>
                  <Typography textAlign="center">{lan.language}</Typography>
                </Link>
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
            <MenuItem key={lan.locale}>
              <Link locale={nextLocale} href={{ pathname, query }}>
                <Typography textAlign="center">{lan.language}</Typography>
              </Link>
            </MenuItem>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageList;
