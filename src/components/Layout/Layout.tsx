import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3732",
      light: "#8F6429",
    },
    secondary: { main: "#F2A81D", light: "#F5B80D" },
    error: { main: "#D32F2F" },
    text: { primary: "#0F0F0F", secondary: "#717171" },
  },
  typography: {
    fontFamily: [" PoppinsRegular"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <MainNavigation />
        <AppointmentForm />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
