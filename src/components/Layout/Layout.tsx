import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3732",
    },
    secondary: { main: "#F9B01D" },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        {/* <Header title={title} sections={sections} /> */}
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default Layout;
