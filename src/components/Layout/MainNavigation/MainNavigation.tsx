import React, { useCallback } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
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

const MainNavigation = () => {
  const { t } = useTranslation();

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
      navigate(`/our-services/${id}`);
      setAnchorEl(null);
    },
    [navigate]
  );

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
          url: "implant-surgery",
        },
        {
          title: t("services:smile-design.TITLE"),
          url: "smile-design",
        },
        {
          title: t("services:prosthesis.TITLE"),
          url: "prosthesis",
        },
        {
          title: t("services:pedodontics.TITLE"),
          url: "pedodontics",
        },
        {
          title: t("services:orthodontics.TITLE"),
          url: "orthodontics",
        },
        {
          title: t("services:endodontics.TITLE"),
          url: "endodontics",
        },
        {
          title: t("services:teeth-whitening.TITLE"),
          url: "teeth-whitening",
        },
        {
          title: t("services:maxillofacial-surgery.TITLE"),
          url: "maxillofacial-surgery",
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
    <AppBar
      component="nav"
      position="static"
      sx={{ bgcolor: "white", borderBottom: 1, borderColor: "#CECECE" }}
    >
      <Container maxWidth={false} sx={{ m: "auto", maxWidth: "90%" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={logo} alt={t("navbar.TITLE")} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
                      color: "primary",
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
              display: { xs: "none", md: "flex", gap: "60px" },
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            {sections.map((section) =>
              section.submenu ? (
                <Typography
                  onMouseEnter={handleMouseOn}
                  onMouseLeave={handleClose}
                  textAlign="center"
                  color="primary.main"
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
                  <div style={{ display: "flex", alignItems: "center" }}>
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
                    <KeyboardArrowDownIcon
                      color="primary"
                      sx={{ fontSize: 20 }}
                    />
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
                  </div>
                </Typography>
              ) : (
                <Typography
                  textAlign="center"
                  color="primary.main"
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavigation;
