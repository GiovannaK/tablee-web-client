import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#CA6702',
      light: '#11A4AD',
      dark: '#1C1C1C',
    },
    background: {
      default: '#ECECEC',
      paper: '#ECECEC',
    },
    secondary: {
      main: '#5A189A',
      light: '#D8B14D',
      dark: '#E04D4D'
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#00C853',
    },
  },
  typography: {
    fontFamily: 'Open Sans, "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1.25rem',
    },
    body2: {
      fontSize: '1rem',
    }
  },
});

export default theme;
