import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
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
import { ServiceItem } from "../../../pages/services/Services";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

interface Props {
  services: ServiceItem[];
}

const MainNavigation = (props: Props) => {
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
    { title: t("navbar.BLOG"), url: "blog" },
    { title: t("navbar.CONTACT"), url: "contact" },
  ];
  const goToMainAndScroll = async (title: string) => {
    const sectionArray = sections.map((item) => item.title);
    let index = sectionArray.indexOf(title);
    const y = index * 10000 + window.scrollY;

    await closeMobile();
    navigate(`/`);
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
        sx={{ m: "auto", maxWidth: "100%", letterSpacing: "0.45px" }}
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
                    <ScrollLink
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                    </ScrollLink>
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
              justifyContent: "center",
            }}
          >
            {sections.map((section) =>
              section.submenu ? (
                <Box
                  key={section.title}
                  onMouseEnter={handleOpenSubMenu}
                  onMouseLeave={handleCloseSubMenu}
                  component="div"
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
                      <ScrollLink
                        key={section.title}
                        activeClass="active"
                        to={section.url}
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {section.title}
                      </ScrollLink>
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
                      hideBackdrop
                      MenuListProps={{ onMouseLeave: handleCloseSubMenu }}
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
                      {props.services.map((item) => (
                        <MenuItem
                          key={item.slug}
                          onClick={() =>
                            handleNavigate("our-services", item.slug)
                          }
                        >
                          {item.title.rendered}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </Box>
              ) : (
                <Typography
                  key={section.title}
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
                    <ScrollLink
                      key={section.title}
                      activeClass="active"
                      to={section.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {section.title}
                    </ScrollLink>
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
            <LanguageSelector />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavigation;
