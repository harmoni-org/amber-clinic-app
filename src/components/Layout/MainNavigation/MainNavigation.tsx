import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../../assets/images/amber-logo.png";
import "./MainNavigation.scss";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const MainNavigation = () => {
  const { t } = useTranslation();

  //
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseOn = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (id: any) => {
      console.log("id", id);
      navigate(`/our-services/${id} `);
      setAnchorEl(null);
    },
    [navigate]
  );
  //

  const sections = [
    { title: t("navbar.HOME_PAGE"), url: "home" },
    { title: t("navbar.ABOUT_US"), url: "about-us" },
    {
      title: t("navbar.SERVICES"),
      url: "services",
      //TODO: Son iki item eksik, oğuzhan branch merge sonrası test et
      submenu: [
        {
          title: t("services:implant-surgery.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:smile-design.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:prosthesis.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:pedodontics.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:orthodontics.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:endodontics.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:teeth-whitening.TITLE"),
          url: "web-design",
        },
        {
          title: t("services:maxillofacial-surgery.TITLE"),
          url: "web-design",
        },
      ],
    },
    { title: t("navbar.CONTACT"), url: "contact" },
    { title: t("navbar.BLOG"), url: "blog" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 6,
            }}
          >
            <img src={logo} alt={t("navbar.TITLE")} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section.title}
                  onClick={handleCloseNavMenu}
                  sx={[
                    {
                      transition: "background 0.35s, color 0.35s",
                      "&:hover": {
                        color: "secondary.main",
                        cursor: "pointer",
                        backgroundColor: "white",
                      },
                    },
                  ]}
                >
                  <Typography textAlign="center">
                    <Link
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt={t("navbar.TITLE")} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "50px" },
              alignItems: "baseline",
            }}
          >
            {sections.map((section) =>
              section.submenu ? (
                <Typography
                  onMouseEnter={handleMouseOn}
                  onMouseLeave={handleClose}
                  textAlign="center"
                  sx={[
                    {
                      transition: "background 0.45s, color 0.45s",
                      "&:hover": {
                        color: "secondary.main",
                        cursor: "pointer",
                      },
                    },
                  ]}
                >
                  <>
                    <Link
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                      <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                    </Link>
                    <Menu
                      elevation={0}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      id="demo-customized-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 2,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            zIndex: 0,
                          },
                        },
                      }}
                    >
                      {section.submenu.map((item) => (
                        <MenuItem onClick={() => handleNavigate(item.url)}>
                          {item.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                </Typography>
              ) : (
                <Typography
                  textAlign="center"
                  sx={[
                    {
                      transition: "background 0.45s, color 0.45s",
                      "&:hover": {
                        color: "secondary.main",
                        cursor: "pointer",
                      },
                    },
                  ]}
                >
                  <Link
                    key={section.title}
                    activeClass="active"
                    to={section.url}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {section.title}
                  </Link>
                </Typography>
              )
            )}
          </Box>
          <LanguageSelector />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavigation;
