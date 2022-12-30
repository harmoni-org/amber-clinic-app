import { useTranslation } from "react-i18next";
import { Container, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DentistCard from "../../components/UI/DentistCard/DentistCard";
import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { useQuery } from "@apollo/client";
import { Dentist } from "../../models/Dentist";
import { GET_DENTISTS } from "../../graphql-queries/Dentist";
import { useNavigate } from "react-router-dom";

const AboutUs= () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_DENTISTS);
  const navigate = useNavigate();
  const dentists = (data && data.dentists.nodes) as Dentist[];

  const handleCardClick = (dentistId: string) => {
    navigate(`/our-dentists/${dentistId}`);
    window.scrollTo(0, 0);
  } 

  return (
    <>
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
            {loading && (
              <Grid container columnSpacing={3} sx={{ width: "100%" }}>
                {[...Array(4)].map((e, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Skeleton variant="rectangular" width={223} height={350} />
                  </Grid>
                ))}
              </Grid>
            )}
            {(!loading && !error) && (
              <Grid container columnSpacing={3} sx={{ width: "100%" }}>
                {dentists.map((dentist) => (
                  <Grid item xs={12} sm={6} md={3} key={dentist.id}>
                    <DentistCard key={dentist.id} dentist={dentist} onClick={handleCardClick}/>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Container>
      </SectionBox>
    </>
  );
};

export default AboutUs;
