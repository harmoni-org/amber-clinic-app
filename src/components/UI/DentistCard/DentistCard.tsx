import React, { useMemo } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Dentist } from "../../../models/Dentist";
import { useTranslation } from "react-i18next";

export interface DentistCardProps {
  dentist: Dentist;
  onClick?: (dentistId: string) => void;
}

const DentistCard: React.FC<DentistCardProps> = ({ dentist, onClick }) => {
  const {i18n} = useTranslation();

  const { title, subtitle } = useMemo(() => {
    let title = "";
    let subtitle = "";

    switch(i18n.language.toUpperCase()) {
      case 'EN':
        title= dentist.acm_fields.fullName;
        subtitle= dentist.acm_fields.roleEN;
        break;
      case 'TR':
        title= dentist.acm_fields.fullName;
        subtitle= dentist.acm_fields.roleTR
        break;
      default:
        title= dentist.acm_fields.fullName;
        subtitle= dentist.acm_fields.roleTR
    }
    return {title, subtitle};
  }, [i18n.language])

  

  return (
    <ImageList sx={{ width: 450, height: 350 }}>
      <ImageListItem
        sx={{ cursor: 'pointer'}}
        onClick={onClick ? () => onClick(dentist.slug) : () => {}}
        key={dentist.slug}
      >
        <img
          src={dentist.acm_fields.image.source_url}
          alt={dentist.acm_fields.image.alt_text}
          loading="lazy"
        />
        <ImageListItemBar
          title={title}
          subtitle={subtitle}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${dentist.slug}`}
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
