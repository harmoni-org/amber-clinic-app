import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { shadows } from "@mui/system";

type ServiceCardProps = {
  item: any
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  item
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate(`/our-services/${item.id} `),
    [navigate]
  );
  // sx={{
  //   maxWidth: "100%",
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   border: "none",
  //   boxShadow: "none",
  // }}
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: 1,
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={require("../../../assets/images/services/" + item.id + ".png")}
        alt={item.title}
      />
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {t(`${item.id}.${item.title}`, { ns: "services" })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(`${item.id}.${item.shortDescription}`, { ns: "services" })}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "left", display: "grid", paddingLeft: 2 }}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          endIcon={<NavigateNextIcon color="primary" sx={{ mr: 1 }} />}
          onClick={handleOnClick}
          sx={{ textTransform: "none", borderColor: "secondary", border: 1.5 }}
        >
          Daha Fazlası
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
