import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export interface DentistCardProps {
  item: any;
}

const DentistCard: React.FC<DentistCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate(`/our-dentists/${item.id} `),
    [navigate]
  );

  return (
    <Card sx={{ maxWidth: 250, mt: 5 }} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../../assets/images/dentists/" +
            item.sections[0].content +
            ".png")}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="body2" component="div">
            {t(`${item.id}.${item.name}`, { ns: "dentists" })}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t(`${item.specialization}`, { ns: "common" })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DentistCard;
