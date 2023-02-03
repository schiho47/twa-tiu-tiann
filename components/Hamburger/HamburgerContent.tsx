import { useContext } from "react";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../Navigation/Navigation.module.scss";
import Image, { StaticImageData } from "next/image";
import Typography from "@components/Typography/Typography";
import NavTool from "@components/Navigation/NavTool";
import CloseIcon from "@mui/icons-material/Close";
import HamStatusContext from "context/ham-status-context";
interface HamburgerContentProps {
  pages: { title: string; path: string; image: StaticImageData }[];
}
const HamburgerContent: React.FC<HamburgerContentProps> = ({ pages }) => {
  const { asPath } = useRouter();
  const { handleToggleHamStatus } = useContext(HamStatusContext);
  return (
    <div className={style.hamContainer}>
      <div className={style.logo}>
        <Link href="/">
          <Image
            src={"/assets/index/logo.png"}
            width="120"
            height="40"
            alt="logo"
            style={{ marginRight: "1rem" }}
            priority
          />
        </Link>
        <CloseIcon
          fontSize="large"
          onClick={handleToggleHamStatus}
          sx={{ cursor: "pointer", marginRight: "1rem" }}
        />
      </div>
      <div className={style.content}>
        <div className={style.hamTools}>
          <MenuItem>
            <Typography variant="button" sx={{ margin: "0 auto" }}>
              <NavTool isHamLogIn={true} />
            </Typography>
          </MenuItem>
        </div>
        {pages.map((page) => (
          <Link href={page.path} key={page.path}>
            <div
              className={
                asPath === `/${page.path}` ? style.activeHam : style.pathContent
              }
            >
              <Typography
                variant="h6"
                sx={{ margin: "2rem auto", textAlign: "center" }}
              >
                {page.title}
              </Typography>
              <div className={style.navItemsImg}>
                <Image
                  src={page.image}
                  alt={page.path}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerContent;
