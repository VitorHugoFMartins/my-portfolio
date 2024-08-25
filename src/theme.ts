import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#87CEFA',
    },
    secondary: {
      main: '#40E0D0',
    },
  },
  typography:{
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);
export default theme;