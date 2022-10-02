import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import dentist from "../../assets/images/dentists/group-miray-uz.png";

type DentistDetailProps = {
  item: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
};

const DentistDetail: React.FC = () => {
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
          Dr. Miray Öz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Container>
      <img src={dentist} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
    </Container>
  );
};

export default DentistDetail;
