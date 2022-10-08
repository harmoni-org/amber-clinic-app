import { CardActionArea } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export interface DentistCardProps {
  id: number;
  name: string;
  specialist: string;
  imageName: string;
}

const DentistCard: React.FC<DentistCardProps> = ({
  id,
  name,
  specialist,
  imageName,
}) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate(`/our-dentists/${id} `),
    [navigate]
  );

  return (
    <Card sx={{ maxWidth: 250, mt: 5 }} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../../assets/images/dentists/" +
            imageName +
            ".png")}
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {specialist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DentistCard;
