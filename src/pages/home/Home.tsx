import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import MainFeaturedPost from "../../components/MainFeaturedPost/MainFeaturedPost";
import AboutUs from "../about-us/AboutUs";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";

import * as Scroll from "react-scroll";

import "./Home.scss";
import { useLoaderData } from "react-router-dom";

function ScrollTop() {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

const Home: React.FC = () => {
  const Element = Scroll.Element;
  const dentist = useLoaderData();

  console.log("Service data from laoder",dentist)
  
  return (
    <>
      <div id="back-to-top-anchor" />
      <ScrollTop />
      <MainFeaturedPost />
      <>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <section id="services">
          <Services />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </>
    </>
  );
};

export default Home;
