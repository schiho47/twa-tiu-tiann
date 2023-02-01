import { createTheme, darken, PaletteOptions } from "@mui/material";
import { red, yellow, brown } from "@mui/material/colors";

const font = `'Noto Sans TC', Roboto, sans-serif`;

export const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main:'#be3128',
    },
    secondary: {
      main:'#d4ac86',
    },
    info: {
      main: '#101010',
    },
    error: {
      dark: darken("#B00020", 0.3),
      main: "#B00020",
      light: "#CF6679",
    },
  },
});

