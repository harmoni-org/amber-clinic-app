import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Service } from "../../../models/Service";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";


interface Props {
  service: Service;
  onClick?: (serviceId: string) => void;
}

const ServiceCard = (props: Props) => {
  const { i18n, t } = useTranslation();

  return (
    <Card
      // @ts-ignore
      onClick={props.onClick ? () => props.onClick(props.service.id) : () => {}}
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
        width="200"
        src={props.service.acm_fields.image.source_url}
        alt={props.service.acm_fields.image.alt_text}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          pb: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color="primary.main"
          sx={{ fontSize: "1rem", fontWeight: 700 }}
        >
          {i18n.language === 'en' && props.service.acm_fields.titleEN}
          {i18n.language === 'tr' && props.service.acm_fields.titleTR}
        </Typography>
          {i18n.language === 'en' && parse(props.service.acm_fields.shortDescriptionEN)}
          {i18n.language === 'tr' && parse(props.service.acm_fields.shortDescriptionTR)}
      </CardContent>
      <CardActions sx={{ justifyContent: "left", paddingLeft: 2, height: 50 }}>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          endIcon={<NavigateNextIcon color="secondary" sx={{ mr: 1 }} />}
           // @ts-ignore
          onClick={props.onClick ? () => props.onClick(props.service.id) : () => {}}
          sx={{ textTransform: "none", borderColor: "secondary"}}
        >
          {t("dentistCard.moreButton")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
