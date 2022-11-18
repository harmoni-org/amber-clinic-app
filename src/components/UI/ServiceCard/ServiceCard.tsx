import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { ServiceItem } from "../../../pages/services/Services";

type ServiceCardProps = {
  item: ServiceItem;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(`/our-services/${item.id}`);
    window.scrollTo(0, 0);
  }, [navigate]);

  const getImageUrlFromSlug = (slug: string) => {
    return `${slug.substring(3)}`;
  };

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
        src={
          "http://clinicamber.com/wordpress/wp-content/uploads/" +
          getImageUrlFromSlug(item.slug) +
          ".jpg"
        }
        alt={item.title.rendered}
      />
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color="primary.main"
          sx={{ fontSize: "1rem", fontWeight: 700 }}
        >
          {item.title.rendered}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
          ></span>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "left", display: "grid", paddingLeft: 2 }}
      >
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          endIcon={<NavigateNextIcon color="secondary" sx={{ mr: 1 }} />}
          onClick={handleOnClick}
          sx={{ textTransform: "none", borderColor: "secondary", border: 1.5 }}
        >
          {t("more")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
