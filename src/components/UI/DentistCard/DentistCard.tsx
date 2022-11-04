import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { ServiceItem } from "../../../pages/services/Services";
import DentistTitleData from "../../../assets/data/dentists.json";

interface DentistData {
  [id:string]: {
    title: string;
  } 
}

export interface DentistCardProps {
  dentist: ServiceItem;
}

const DentistCard: React.FC<DentistCardProps> = ({ dentist }) => {
  const navigate = useNavigate();

  const getImageUrlFromSlug = (slug: string) => {
    return `${slug.substring(11)}`;
  }

  const handleOnClick = useCallback(() => {
    navigate(`/our-dentists/${dentist.id}`);
    window.scrollTo(0, 0);
  }, [navigate, dentist.id]);

  return (
    <ImageList sx={{ width: 450, height: 350 }}>
      <ImageListItem key={dentist.id}>
        <img
          src={'http://clinicamber.com/wordpress/wp-content/uploads/'+ getImageUrlFromSlug(dentist.slug) + '.png'}
          alt={dentist.slug}
          loading="lazy"
        />
        <ImageListItemBar
          title={dentist.title.rendered}
          subtitle={(DentistTitleData as DentistData)[dentist.id.toString()].title}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${dentist.id}`}
              onClick={handleOnClick}
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
