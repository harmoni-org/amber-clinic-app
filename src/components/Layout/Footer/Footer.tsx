import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import logo from "../../../assets/images/amber-logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        2019 Dentmasters Dental Clinic | All Rights Reserved.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const title = "Footer";
  const description = "Something here to give the footer a purpose!";

  return (
    // <Box component="footer" sx={{ bgcolor: "primary", py: 6, flexGrow: 1}}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //       {title}
    //     </Typography>
    //     <Typography
    //       variant="subtitle1"
    //       align="center"
    //       color="text.secondary"
    //       component="p"
    //     >
    //       {description}
    //     </Typography>
    //     <Copyright />
    //   </Container>
    // </Box>

    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        py: 6,
        flexGrow: 1,
        bottom: "0",
      }}
    >
      <Grid container spacing={3} sx={{ color: "white" }}>
        <Grid item xs>
          <Typography variant="body1" align="center" gutterBottom>
            <img
              src={logo}
              alt="Amber Ağız ve Diş Sağlığı Polikliniği"
              style={{ width: "50%" }}
            />
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1" align="center" component="p">
            0212 234 23 23
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            0212 343 54 54
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            0212 343 65 78
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1" align="center" component="div">
            <FacebookIcon color="secondary" sx={{ mr: 1 }} />
            Facebook
          </Typography>
          <Typography variant="subtitle1" align="center" component="div">
            <TwitterIcon color="secondary" sx={{ mr: 1 }} />
            Twitter
          </Typography>
          <Typography variant="subtitle1" align="center" component="div">
            <InstagramIcon color="secondary" sx={{ mr: 1 }} />
            Instagram
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1" align="center" component="p">
            Orhangazi, Esenyalı Orhangazi Mah, Alparslan Türkeş Cd No:2/A.
            Pendik/İstanbul
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            dmdentmasters@gmail.com
          </Typography>
        </Grid>
      </Grid>
      {/* <Divider
        component="div"
        role="presentation"
        sx={{
          color: "secondary",
          borderTop: `thick solid secondary`,
          
        }}
      /> */}
      <Divider sx={{ bgcolor: "secondary.light", mx: 9, my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            variant="subtitle1"
            align="center"
            component="p"
            color="white"
          >
            Kişisel Veri İzleme Politikası
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
  );
}
