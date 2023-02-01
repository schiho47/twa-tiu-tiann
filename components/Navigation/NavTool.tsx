import React, { useContext, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@components/Avatar/Avatar";
import style from "./Navigation.module.scss";
import AuthContext from "context/auth-context";
import Dialog from "@components/Dialog/Dialog";
import Button from "@components/Button/Button";
import HamStatusContext from "context/ham-status-context";
import LanguageList from "./LanguageList";
import { cartReducer } from "store/cart";
import { CartStateType } from "type/cart";

interface NavToolProps {
  isHamLogIn: boolean;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const IconStyle = {
  color: "#101010",
  padding: "6px",
};

const NavTool: React.FC<NavToolProps> = ({ isHamLogIn }) => {
  const router = useRouter();
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  const { isHamOpen } = useContext(HamStatusContext);
  const [showDialog, setShowDialog] = useState(false);
  const [showLanList, setShowLanList] = useState(false);
  const cart = useSelector((state: CartStateType) => state.cart);
  const avatarSrc = useRef<string>("");
  const userName = useRef<string>("");
  const handleLogOut = () => {
    setShowDialog(true);
  };
  const confirmLogOut = () => {
    setShowDialog(false);
    onLogout();
  };
  const handleToggleLanguageList = () => {
    setShowLanList(!showLanList);
  };
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item: { quantity: number }) => {
      total += item.quantity;
    });
    return total;
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userInfo = JSON.parse(localStorage.getItem("user")!);
      avatarSrc.current = userInfo.userPicture;
      userName.current = userInfo.name;
    }
  });
  return (
    <>
      <div className={style.tools}>
        {(!isHamLogIn || isHamOpen) && (
          <IconButton aria-label="languageIcon" size="large" sx={IconStyle}>
            <LanguageIcon onClick={handleToggleLanguageList} />
          </IconButton>
        )}
        {showLanList && <LanguageList isOpen={showLanList} />}
        {(!isHamLogIn || isHamOpen) && (
          <IconButton
            aria-label="cart"
            size="large"
            sx={IconStyle}
            onClick={() => router.push("./shopping-cart")}
          >
            <StyledBadge badgeContent={getTotalQuantity()} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        )}
        {!isLoggedIn && (
          <IconButton
            aria-label="personIcon"
            size="large"
            sx={IconStyle}
            onClick={() => router.push("./login")}
          >
            <PersonIcon />
          </IconButton>
        )}
        {isLoggedIn && !isHamOpen && (
          <>
            <Avatar src={avatarSrc.current} userName={userName.current} />
            <IconButton
              aria-label="Logout"
              size="large"
              sx={IconStyle}
              onClick={handleLogOut}
            >
              <LogoutIcon />
            </IconButton>
          </>
        )}
        {showDialog && (
          <Dialog
            open={showDialog}
            onClose={() => setShowDialog(false)}
            id={"log-out"}
            maxWidth="lg"
          >
            <div className={style.dialog}>
              <h1>確定要登出嗎？</h1>
              <div style={{ marginTop: "2rem" }}>
                <Button
                  text={"取消"}
                  variant={"outlined"}
                  size={"large"}
                  onClick={() => {
                    setShowDialog(false);
                  }}
                  sx={{ marginRight: "1rem" }}
                />
                <Button
                  text={"確定"}
                  variant={"contained"}
                  size={"large"}
                  onClick={confirmLogOut}
                />
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </>
  );
};

export default NavTool;
