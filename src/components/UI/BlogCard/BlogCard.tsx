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

  const handleOnClick = useCallback(() => navigate(`/blog/${1} `), [navigate]);

  return (
    <Card
      sx={{
        maxWidth: 600,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={require("../../../assets/images/blog/" + imageName + ".png")}
        alt={title}
      />
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography gutterBottom variant="h5" component="p">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {shortDesc} */}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "left", display: "grid" }}>
        <Button size="small" onClick={handleOnClick}>
          Tümünü Oku
        </Button>
        <img src={logo} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
      </CardActions>
    </Card>
  );
};

export default BlogCard;
