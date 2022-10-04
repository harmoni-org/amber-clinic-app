import * as React from "react";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { shadows } from "@mui/system";

type ServiceCardProps = {
  id: number;
  name: string;
  shortDesc: string;
  imageName: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  shortDesc,
  imageName,
}) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 250, boxShadow: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../../assets/images/services/" + imageName + ".png")}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" size="small" color="primary">
          Daha Fazlası
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
