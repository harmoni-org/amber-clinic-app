import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { shadows } from "@mui/system";
import logo from "../../../assets/vector.png";

type BlogCardProps = {
  id: number;
  title: string;
  imageName: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, title, imageName }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  }, [navigate]);

  const getImageUrlFromSlug = (slug: string) => {
    return `${slug.substring(8)}`;
  }

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
        image={'http://clinicamber.com/wordpress/wp-content/uploads/'+ getImageUrlFromSlug(imageName) + '.png'}
        alt={title}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          padding: 0,
        }}
      >
        <Typography
          sx={{ display: "inline", fontSize: "0.7em" }}
          component="span"
          variant="body2"
          color="text.secondary"
        >
          Ekim 1, 2022
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{ fontSize: 21 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {shortDesc} */}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "left", display: "grid", padding: 0 }}>
        <Button size="small" onClick={handleOnClick}>
          Tümünü Oku
        </Button>
        <img src={logo} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
      </CardActions>
    </Card>
  );
};

export default BlogCard;
