import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { ServiceWithShortDescription } from "../../../models/Service";
import { HTMLReactParserOptions, domToReact } from "html-react-parser";
import { Element } from "html-react-parser";
import { useTranslation } from "react-i18next";
import Renderer from "../../Renderer"

interface Props {
  service: ServiceWithShortDescription;
  onClick?: (serviceId: string) => void;
}

const titleParserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    let element = domNode as Element;

    if (element.attribs && element.type === 'tag') {
      switch (element.name) {
        case 'p':
          return (
            <Typography 
              color="text.secondary"
              sx={{ fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}
            >
              {domToReact(element.children)}
            </Typography>
          )
      }
    }
  }
}

const ServiceCard = (props: Props) => {
  const { t } = useTranslation();
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
        src={props.service.image.mediaItemUrl}
        alt={props.service.slug}
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
          <Renderer translate nodes={props.service.serviceTitle.nodes} />
        </Typography>
        <Renderer translate parseAndSanitize nodes={props.service.shortDescription.nodes} parserOptions={titleParserOptions} />
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
