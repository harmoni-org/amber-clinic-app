import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DentistCard from "../../components/UI/DentistCard/DentistCard";
import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { ServiceItem } from "../services/Services";

interface Props {
  data: ServiceItem[];
}

const AboutUs = (props: Props) => {
  const { t } = useTranslation();

  return (
    <SectionBox id="about-us" title="ABOUT_US">
      <Container
        maxWidth="xl"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{ fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}
          >
            {t("about_us.TEXT", { ns: "common" })}
          </Typography>
        }
        <Box
          sx={{
            margin: "auto",
            width: "90%",
          }}
        >
          <Grid container columnSpacing={3} sx={{ width: "100%" }}>
            {props.data &&
              props.data.map((dentist) => (
                <Grid item xs={12} sm={6} md={3} key={dentist.id}>
                  <DentistCard key={dentist.id} dentist={dentist} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </SectionBox>
  );
};

export default AboutUs;
