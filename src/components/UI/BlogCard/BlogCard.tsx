import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import logo from "../../../assets/vector.png";
import { Blog } from "../../../models/Blog";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

type BlogCardProps = {
  blog: Blog
  onClick?: () => void
};

const BlogCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  const {i18n} = useTranslation();

  const { title, shortDescription } = useMemo(() => {
    let title = "";
    let shortDescription = "";

    switch(i18n.language.toUpperCase()) {
      case 'EN':
        title = props.blog.acm_fields.titleEN;
        shortDescription = props.blog.acm_fields.shortDescriptionEN;
        break;
      case 'TR':
        title = props.blog.acm_fields.titleTR;
        shortDescription = props.blog.acm_fields.shortDescriptionTR;
        break;
      default:
        title = props.blog.acm_fields.titleTR;
        shortDescription = props.blog.acm_fields.shortDescriptionTR;
    }
    return {title, shortDescription};
  }, [i18n.language])


  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.blog.acm_fields.image.source_url}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          padding: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{ fontSize: 21, mt: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "left", display: "grid", padding: 0 }}>
        <Button size="small" onClick={props.onClick ? (() => props.onClick?.()) : (() => {})}>
          Tümünü Oku
        </Button>
        <img src={logo} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
      </CardActions>
    </Card>
  );
};

export default BlogCard;
