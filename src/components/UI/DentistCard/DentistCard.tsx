import { CardActionArea } from "@mui/material";
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
  imageName: string;
}

const DentistCard: React.FC<DentistCardProps> = ({
  id,
  name,
  specialist,
  imageName,
}) => {
  const styles = {
    media: {
      height: "310px",
    },
  };
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate(`/our-dentists/${id} `),
    [navigate]
  );

  return (
    // <Card sx={{ width: 255, mt: 5 }} onClick={handleOnClick}>
    //   <CardMedia
    //     component="img"
    //     alt={name}
    //     height="100"
    //     style={styles.media}
    //     image={require("../../../assets/images/dentists/" + imageName + ".png")}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {specialist}
    //     </Typography>
    //   </CardContent>
    // </Card>
    <Card sx={{ width: 255, mt: 5 }} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={styles.media}
          height="140"
          image={require("../../../assets/images/dentists/" +
            imageName +
            ".png")}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
