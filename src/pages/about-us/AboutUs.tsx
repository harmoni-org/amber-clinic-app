import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import DentistList from "../../components/OurDentists/DentistList";
import SectionBox from "../../components/UI/SectionBox/SectionBox";

const AboutUs: React.FC = () => {
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
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}
        >
          {t("about_us.TEXT", { ns: "common" })}
        </Typography>
        <DentistList />
      </Container>
    </SectionBox>
  );
};

export default AboutUs;
