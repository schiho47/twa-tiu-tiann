import "../styles/globals.scss";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { AuthContextProvider } from "context/auth-context";
import { ErrorDialogContextProvider } from "context/error-dialog-context";
import { HamStatusContextProvider } from "context/ham-status-context";
import { Provider } from "react-redux";
import store from "../store/store";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "next-i18next.config";
import { SessionProvider } from "next-auth/react";
export default appWithTranslation(function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthContextProvider>
        <HamStatusContextProvider>
          <ErrorDialogContextProvider>
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </ThemeProvider>
          </ErrorDialogContextProvider>
        </HamStatusContextProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
},
nextI18nConfig);
