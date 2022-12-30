import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import notFound from "../../assets/images/not-found.png";

const Error: React.FC = () => {
  const { t } = useTranslation();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3D3732",
        dark: "#8F6429",
        light: "#585965",
      },
      text: { primary: "#0F0F0F", secondary: "#717171" },
    },
    typography: {
      fontFamily: [" PoppinsRegular"].join(","),
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/`);
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box textAlign="center" sx={{ width: "50%", margin: "auto", py: 6 }}>
          <img
            src={notFound}
            alt={t("navbar.TITLE")}
            style={{ width: "40%" }}
          />
          <br />
          404 |<Typography variant="h5">{t("not_found.TEXT")}</Typography>{" "}
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ marginTop: "1rem" }}
            onClick={handleOnClick}
          >
            {t("not_found.BUTTON_TEXT")}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Error;
