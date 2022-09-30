import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const theme = createTheme();

const Layout = () => {
  const { t } = useTranslation();

  const sections = [
    { title: t("navbar.HOME_PAGE"), url: "home" },
    { title: t("navbar.ABOUT_US"), url: "about-us" },
    { title: t("navbar.SERVICES"), url: "services" },
    { title: t("navbar.CONTACT"), url: "contact" },
    { title: t("navbar.BLOG"), url: "blog" },
  ];

  const title = t("navbar.TITLE");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Header title={title} sections={sections} />
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
