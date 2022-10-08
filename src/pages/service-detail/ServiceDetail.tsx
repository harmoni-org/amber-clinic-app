import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import dentist from "../../assets/images/dentists/group-miray-uz.png";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

type ServiceDetailProps = {
  item: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
};

const ServiceDetail: React.FC = () => {
  function getDentist(id: any) {
    return {
      item: {
        description: "string",
        image: "string",
        imageText: "string",
        linkText: "string",
        title: "string",
      },
    };
  }

  //  TODO:  After implement static data mapping, get data dynamically.

  // const params = useParams();

  // useEffect(() => {
  //   const id = { params };
  //   getDentist(id);
  // }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        mt: 10,
      }}
    >
      <Container sx={{ py: 6 }}>
        <Typography gutterBottom variant="h3" component="div">
          jhsxhsdh
        </Typography>
        <Typography variant="body1" color="text.secondary">
          1995 Tekirdağ doğumludur. 2013 yılında Tekirdağ Fen Lisesini
          bitirdikten sonra aynı yılda İstanbul Üniversitesi Diş Hekimliği
          Fakültesini kazandı. 2018 yılında ‘Maksiller Defektli Hastalarda
          Tedavi Yöntemleri’ isimli tez çalışmasıyla mezun olmuştur.
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ mt: 4, mb: 2 }}
        >
          Katıldığı Kongre, Seminer ve Kurslar
        </Typography>
        <List sx={{ bgcolor: "background.paper" }}>
          <ListItem sx={{ py: 0 }}>
            2. Dental Tribune Türkiye Sempozyumu IDEX
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2017" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            TDB 23. Uluslararası Diş Hekimliği Kongresi
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2017" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Ağıziçi Porselen Tamiri- Kompozit Tabakalama Tekniği ve Makyaj
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2018" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            İmplantüstü Protezler
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2019" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Anterior Direk Restorasyonlar Temel Konseptlerden Yeniliklere
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2019" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Canlı Pulpadan Periapikal Cerrahiye Endodonti
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2020" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Fiber Destekli Adeziv Köprüler
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2020" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            GC&Serhat Köken Kompozit Restorasyonlar
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2020" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Straumann&Estetik Bölge İmplant Uygulamalarında 5 Temel İpucu,
            İstanbul
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2020" />
          </ListItem>
          <ListItem sx={{ py: 0 }}>
            Straumann&Dijital Diş Hekimliği
            <ListItemText sx={{ pl: 4 }} secondary="İstanbul, 2020" />
          </ListItem>
        </List>
      </Container>

      <img src={dentist} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
    </Container>
  );
};

export default ServiceDetail;
