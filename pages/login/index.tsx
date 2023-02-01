import { useState, useContext, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@styles/LogIn.module.scss";
import Navigation from "@components/Navigation/Navigation";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Input from "@components/FormControl/Input";
import Button from "@components/Button/Button";
import AuthContext from "context/auth-context";
import HamStatusContext from "context/ham-status-context";
import Footer from "@components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { signIn, useSession } from "next-auth/react";

interface LogInPageProps {}

const LogIn: NextPage<LogInPageProps> = () => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const { data: session } = useSession();
  const { handleClose } = useContext(HamStatusContext);
  const [userLogIn, setUserLogIn] = useState({ email: "", password: "" });
  const [logInError, setLogInError] = useState({
    email: false,
    password: false,
  });
  const [isMobile, setIsMobile] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setLogInError({
      email: false,
      password: false,
    });
  };
  const checkLogIn = () => {
    if (userLogIn.email === "") {
      setLogInError((prev) => ({ ...prev, email: true }));
      return;
    }
    if (userLogIn.password === "") {
      setLogInError((prev) => ({ ...prev, password: true }));
      return;
    }

    if (userLogIn.email !== "" && userLogIn.password !== "") {
      localStorage.setItem("user", JSON.stringify(userLogIn));
      auth.onLogin();
    }
  };
  const handleLineLogin = () => {
    signIn("line");
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  useEffect(() => {
    handleClose();
  }, []);
  useEffect(() => {
    if (session) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: session.user?.name,
          emailAddress: session.user?.email,
          userPicture: session.user?.image,
        })
      );
      auth.onLogin();
    }
  }, [session]);
  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
          setIsMobile(true);
          return;
        }
        setIsMobile(false);
      });
    }
  }, [typeof window === "object" && window.innerWidth]);

  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.formContainer}>
          <Image
            src="/assets/login/login.jpg"
            alt="log-in"
            width={700}
            height={500}
          ></Image>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 auto",
              "& > :not(style)": {
                width: !isMobile ? 600 : 350,
                height: !isMobile ? 500 : 550,
              },
            }}
          >
            <Paper elevation={3}>
              <div className={styles.form}>
                <h1>登入</h1>
                <Input
                  title={"Email"}
                  id={"email"}
                  style={{ display: "flex", margin: "2rem 0" }}
                  value={userLogIn.email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  error={logInError.email}
                />
                <Input
                  title={"密碼"}
                  id={"password"}
                  style={{ display: "flex", margin: "2rem 0" }}
                  value={userLogIn.password}
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  error={logInError.password}
                />
                <div className={styles.buttonSection}>
                  <Button
                    text="取消"
                    variant="outlined"
                    size="large"
                    color="secondary"
                    onClick={() => router.push("/")}
                  />
                  <Button
                    text="登入"
                    variant="contained"
                    size="large"
                    onClick={checkLogIn}
                  />
                </div>
                <div className={styles.otherLogInSection}>
                  <button onClick={handleLineLogin}>
                    <Image
                      src="/assets/login/btn_line.png"
                      alt="line-login"
                      width={180}
                      height={50}
                    />
                  </button>
                  <button onClick={handleGoogleLogin}>
                    <Image
                      src="/assets/login/btn_google.png"
                      alt="line-login"
                      width={200}
                      height={50}
                    />
                  </button>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default LogIn;

export const getStaticProps: GetStaticProps<LogInPageProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
