import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ServiceItem } from "../../pages/services/Services";
import Categories from "../../assets/settings/categories";
import { MainPageContent } from "../../utils/routeLoaders";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3732",
      dark: "#8F6429",
      light: "#585965",
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
  const { services, blogs, dentists } = useLoaderData() as MainPageContent;
  const [languageFilteredServices, setLanguageFilteredServices] = useState<
    ServiceItem[]
  >([]);
  const [languageFilteredBlogs, setLanguageFilteredBlogs] = useState<
    ServiceItem[]
  >([]);
  const [languageFilteredDentists, setLanguageFilteredDentists] = useState<
    ServiceItem[]
  >([]);
  const { i18n } = useTranslation();

  const applyLanguageFilter = (services: ServiceItem[]) => {
    return services.filter((item) => {
      const index = item.categories.indexOf(Categories[i18n.language]);
      if (index > -1) {
        return true;
      } else return false;
    });
  };

  useEffect(() => {
    setLanguageFilteredBlogs(applyLanguageFilter(blogs));
  }, [blogs, i18n.language]);

  useEffect(() => {
    setLanguageFilteredServices(applyLanguageFilter(services));
    console.log(applyLanguageFilter(services));
  }, [services, i18n.language]);

  useEffect(() => {
    setLanguageFilteredDentists(applyLanguageFilter(dentists));
  }, [dentists, i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <MainNavigation services={languageFilteredServices} />
        <AppointmentForm />
        <Outlet
          context={[
            languageFilteredServices,
            languageFilteredBlogs,
            languageFilteredDentists,
          ]}
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
