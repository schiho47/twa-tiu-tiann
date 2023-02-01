import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import AuthContext from "context/auth-context";
import Image from "next/image";
import style from "./Navigation.module.scss";
import AppBar from "@mui/material/AppBar";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Hamburger from "@components/Hamburger/Hamburger";
import NavTool from "@components/Navigation/NavTool";
import history from "../../public/assets/index/pageSmallTing/history.png";
import tour from "../../public/assets/index/pageSmallTing/camera.png";
import shop from "../../public/assets/index/pageSmallTing/shop.png";
import event from "../../public/assets/index/pageSmallTing/event.png";
import { useRouter } from "next/router";
import HamburgerContent from "@components/Hamburger/HamburgerContent";
import HamStatusContext from "context/ham-status-context";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = ({}) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { isHamOpen, handleToggleHamStatus } = useContext(HamStatusContext);
  const { asPath } = useRouter();
  const { t } = useTranslation(["common"]);
  const pages = [
    {
      title: t("history"),
      path: "history",
      image: history,
    },
    {
      title: t("stores_and_tours"),
      path: "stores_and_tours",
      image: tour,
    },
    {
      title: t("online-shop"),
      path: "online-shop",
      image: shop,
    },
    {
      title: t("events"),
      path: "events",
      image: event,
    },
  ];
  useEffect(() => {
    localStorage.setItem("hamStatus", `${isHamOpen}`);
  }, [isHamOpen]);
  return (
    <div className={style.background}>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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

            {pages.map((page) => (
              <Link key={page.path} href={page.path} className={style.path}>
                <MenuItem
                  className={
                    asPath === `/${page.path}` ? style.active : style.navItems
                  }
                >
                  <Typography textAlign="center">{page.title}</Typography>
                  <div className={style.navItemsImg}>
                    <Image
                      src={page.image}
                      alt={page.path}
                      width={15}
                      height={15}
                    />
                  </div>
                </MenuItem>
              </Link>
            ))}

            <div className={style.navTools}>
              <NavTool isHamLogIn={false} />
            </div>

            <div className={style.hamburger}>
              <Hamburger onClick={handleToggleHamStatus} />
              {isLoggedIn && <NavTool isHamLogIn={true} />}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {isHamOpen && <HamburgerContent pages={pages} />}
    </div>
  );
};

export default Navigation;
