import MainFeaturedPost from "../../components/MainFeaturedPost/MainFeaturedPost";
import { useTranslation } from "react-i18next";
import AboutUs from "../about-us/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Blog from "../blog/Blog";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const mainFeaturedPost = {
    title: t("main_featured_post.TITLE"),
    description: "Amber ağız ve diş sağlığı kliniği.",
    image: "./pexels-julia-avamotive.png",
    // image: 'https://source.unsplash.com/random',
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
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
