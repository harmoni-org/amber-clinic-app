import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Dentist } from "../../../models/Dentist";
import Renderer from "../../Renderer";

export interface DentistCardProps {
  dentist: Dentist;
  onClick?: (dentistId: string) => void;
}

const DentistCard: React.FC<DentistCardProps> = ({ dentist, onClick }) => {

  return (
    <ImageList sx={{ width: 450, height: 350 }}>
      <ImageListItem
        sx={{ cursor: 'pointer'}}
        onClick={onClick ? () => onClick(dentist.id) : () => {}}
        key={dentist.id}
      >
        <img
          src={dentist.dentistImage.mediaItemUrl}
          alt={''}
          loading="lazy"
        />
        <ImageListItemBar
          title={dentist.name}
          subtitle={<Renderer nodes={dentist.branchTitle.nodes} translate/>}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${dentist.id}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    </ImageList>
  );
};

export default DentistCard;
