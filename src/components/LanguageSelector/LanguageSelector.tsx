import React from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { capitalizeFirstLetter } from "../../utils/common";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log("HAHHAHA", options[index]["lang"]);
    i18n.changeLanguage(options[index]["translationCode"]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();
  const options = [
    {
      lang: t("language.TURKISH"),
      code: "tr",
      translationCode: "tr",
    },
    { lang: t("language.ENGLISH"), code: "gb", translationCode: "en" },
  ];

  return (
    <div>
      <List
        component="nav"
        aria-label="Language selection"
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <Flag
            code={options[selectedIndex]["code"]}
            style={{ width: 25, marginRight: 4 }}
          />
          <ListItemText
            secondary={capitalizeFirstLetter(options[selectedIndex]["lang"])}
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "primary",
            }}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.code}
            // disabled={index === 0}
            // selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <Flag code={option.code} style={{ width: 25, marginRight: 4 }} />
            {capitalizeFirstLetter(option.lang)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSelector;
