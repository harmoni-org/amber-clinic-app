import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

import DentistList from "../../components/OurDentists/DentistList";
import SectionBox from "../../components/UI/SectionBox/SectionBox";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionBox id="about-us" title="HAKKIMIZDA">
      <Container
        maxWidth="xl"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {/* TODO: This static text will be defined as constant. */}
          {t(
            "Bizim tutkumuz hastalarımızın ağız ve diş sağlığını korumak ve tedavi etmektir. Bu tutkumuzu hayata geçirirken alanında uzman diş hekimleriyle birlikte çalışır, en ileri teknolojiyi kullanır ve uluslararası standartlarında hizmet veririz.Amacımız hastalarımıza heağlığı hizmetini sunabilmek ve her hastamızın kliniklerimizden sağlıklı ve gülerek çıkmasını sağlamaktır."
          )}
        </Typography>
        <DentistList />
      </Container>
    </SectionBox>
  );
};

export default AboutUs;
