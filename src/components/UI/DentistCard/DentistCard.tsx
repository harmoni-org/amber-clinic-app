import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export interface DentistCardProps {
  item: any;
}

const DentistCard: React.FC<DentistCardProps> = ({ item }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(`/our-dentists/${item.id}`);
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <ImageList sx={{ width: 450, height: 350 }}>
      <ImageListItem key={item.title}>
        <img
          src={require("../../../assets/images/dentists/" +
            item.sections[0].content +
            ".png")}
          srcSet={require("../../../assets/images/dentists/" +
            item.sections[0].content +
            ".png")}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={t(`${item.id}.${item.name}`, { ns: "dentists" })}
          subtitle={t(`${item.specialization}`, { ns: "common" })}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.name}`}
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
