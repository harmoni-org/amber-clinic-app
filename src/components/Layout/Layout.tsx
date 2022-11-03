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
import { MainPageContent } from "../Utils/routeLoaders";

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
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

const Layout = () => {
  const {services, blogs, dentists} = useLoaderData() as MainPageContent;
  const { i18n } = useTranslation();

  const applyLanguageFilter = (services: ServiceItem[]) => {
    return services.filter((item) => item.categories.indexOf(Categories[i18n.language]))
  }

  const filteredServices = applyLanguageFilter(services);
  const filteredBlogs = blogs;
  const filteredDentists = dentists;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <MainNavigation services={filteredServices} />
        <AppointmentForm />
        <Outlet context={[filteredServices, filteredBlogs, filteredDentists]}/>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
