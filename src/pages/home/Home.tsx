import MainFeaturedPost from "../../components/MainFeaturedPost/MainFeaturedPost";
import ScrollToTop from "react-scroll-to-top";
import AboutUs from "../about-us/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Blog from "../blog/Blog";

const Home: React.FC = () => {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <MainFeaturedPost />
      <>
        <section id="about-us">
          <AboutUs />
        </section>
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
