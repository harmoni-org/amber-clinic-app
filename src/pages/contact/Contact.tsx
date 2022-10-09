import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import logo from "../../assets/map.png";

const Contact: React.FC = () => {
  return (
    <SectionBox id="contact" title="İLETİŞİM">
      <Grid
        container
        sx={{ maxWidth: "90%" }}
        rowSpacing={6}
        columnSpacing={6}
      >
        <Grid item xs={12} sm={12} md={6}>
          <img
            src={logo}
            alt="Amber Ağız ve Diş Sağlığı Polikliniği"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            gutterBottom
            variant="body1"
            component="h4"
            sx={{ fontWeight: "bold", paddingBottom: 2 }}
          >
            ADRES
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ paddingBottom: 3 }}
          >
            Orhangazi, Esenyalı Orhangazi Mah, Alparslan Türkeş Cd No:2/A.
            Pendik/İstanbul
          </Typography>
          <ContactUsForm formOrigin="contact" />
        </Grid>
      </Grid>
    </SectionBox>
  );
};

export default Contact;
