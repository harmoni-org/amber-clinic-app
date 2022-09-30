import MainFeaturedPost from "../../components/MainFeaturedPost/MainFeaturedPost";
import AboutUs from "../about-us/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Blog from "../blog/Blog";

const Home: React.FC = () => {
  return (
    <>
      <MainFeaturedPost />
      <>
        <section
          id="about-us"
          style={{ backgroundColor: "red", height: "800px" }}
        >
          <AboutUs />
        </section>
        <section
          id="services"
          style={{ backgroundColor: "blue", height: "800px" }}
        >
          <Services />
        </section>
        <section
          id="contact"
          style={{ backgroundColor: "pink", height: "800px" }}
        >
          <Contact />
        </section>
        <section
          id="blog"
          style={{ backgroundColor: "purple", height: "700px" }}
        >
          <Blog />
        </section>
      </>
    </>
  );
};

export default Home;
