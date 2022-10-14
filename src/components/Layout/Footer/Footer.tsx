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
      <Link color="inherit" sx={{ textDecoration: "none" }}>
        2019 Dentmasters Dental Clinic | All Rights Reserved.
      </Link>
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const title = "Footer";
  const description = "Something here to give the footer a purpose!";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        py: 6,
        flexGrow: 1,
        bottom: "0",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          color: "white",
          alignItems: "center",
          maxWidth: "95%",
          margin: "auto",
        }}
      >
        <Grid item xs={2}>
          <Typography variant="body1" align="center" gutterBottom>
            <img
              src={logo}
              alt="Amber Ağız ve Diş Sağlığı Polikliniği"
              style={{ width: "80%" }}
            />
          </Typography>
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={2}>
          <Typography variant="subtitle1" component="div">
            <FacebookIcon color="secondary" sx={{ mr: 1 }} />
            Facebook
          </Typography>
          <Typography variant="subtitle1" component="div">
            <TwitterIcon color="secondary" sx={{ mr: 1 }} />
            Twitter
          </Typography>
          <Typography variant="subtitle1" component="div">
            <InstagramIcon color="secondary" sx={{ mr: 1 }} />
            Instagram
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" component="p">
            Orhangazi, Esenyalı Orhangazi Mah, Alparslan Türkeş Cd No:2/A.
            Pendik/İstanbul
          </Typography>
          <Typography variant="subtitle1" component="p">
            dmdentmasters@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "secondary.light", mx: 9, my: 2 }} />
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "100%",
          margin: "auto",
        }}
      >
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
