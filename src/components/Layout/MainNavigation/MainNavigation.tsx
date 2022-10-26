import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Scroll, { Link as Link1 } from "react-scroll";
import Link from "@mui/material/Link";
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

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorElSubMenu, setAnchorElSubMenu] =
    React.useState<null | HTMLElement>(null);
  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSubMenu(event.currentTarget);
  };
  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (page: string, id: any) => {
      navigate(`/${page}/${id}`);
      // setAnchorEl(null);
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
    { title: t("navbar.BLOG"), url: "blog" },
    { title: t("navbar.CONTACT"), url: "contact" },
  ];
  const goToMainAndScroll = async (title: string) => {
    const sectionArray = sections.map((item) => item.title);
    let index = sectionArray.indexOf(title);
    const y = index * 10000 + window.scrollY;

    await closeMobile();
    navigate(`/`);
    const scroller = Scroll.scroller;

    // await scroller.scrollTo("contact", {
    //   duration: 1500,
    //   delay: 100,
    //   smooth: true,
    //   offset: 15,
    // });
    console.log("scroll", sectionArray);
    window.scrollTo({ top: y, left: 0, behavior: "smooth" });
  };

  const closeMobile = () => {};

  return (
    <AppBar
      component="nav"
      position="static"
      sx={{ bgcolor: "white", borderBottom: 1, borderColor: "#CECECE" }}
    >
      <Container
        maxWidth={false}
        sx={{ m: "auto", maxWidth: "90%", letterSpacing: "0.45px" }}
      >
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
                    <Link1
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                    </Link1>
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
                  onMouseEnter={handleOpenSubMenu}
                  onMouseLeave={handleCloseSubMenu}
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
                    {location.length === 0 ? (
                      <Link1
                        key={section.title}
                        activeClass="active"
                        to={section.url}
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {section.title}
                      </Link1>
                    ) : (
                      <Link
                        key={section.title}
                        component="button"
                        variant="body2"
                        onClick={() => goToMainAndScroll(section.title)}
                        underline="none"
                        sx={{ fontSize: "1rem" }}
                      >
                        {section.title}
                      </Link>
                    )}
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
                      open={Boolean(anchorElSubMenu)}
                      id="demo-customized-menu"
                      anchorEl={anchorElSubMenu}
                      onClose={handleCloseSubMenu}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          display: { xs: "none", md: "flex" },
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
                        <MenuItem
                          onClick={() =>
                            handleNavigate("our-services", item.url)
                          }
                        >
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
                  {location.length === 0 ? (
                    <Link1
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                    </Link1>
                  ) : (
                    <Link
                      key={section.title}
                      component="button"
                      variant="body2"
                      onClick={() => goToMainAndScroll(section.title)}
                      underline="none"
                      sx={{ fontSize: "1rem" }}
                    >
                      {section.title}
                    </Link>
                  )}
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
