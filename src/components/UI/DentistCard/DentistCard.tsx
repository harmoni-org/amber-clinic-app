import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface DentistCardProps {
  id: number;
  name: string;
  specialist: string;
  imgUrl: any;
}

const DentistCard: React.FC<DentistCardProps> = ({
  name,
  specialist,
  imgUrl,
}) => {
  const styles = {
    media: {
      height: "70%",
    },
  };
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/our-dentists", { state: { id: 1, name: "gvh" } }),
    [navigate]
  );

  return (
    <Card sx={{ maxWidth: 205 }} onClick={handleOnClick}>
      <CardMedia
        component="img"
        alt={name}
        height="100"
        style={styles.media}
        image={require("../../../assets/images/dentists/miray-uz.png")}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {specialist}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DentistCard;
