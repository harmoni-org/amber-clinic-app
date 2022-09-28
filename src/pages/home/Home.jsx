import MainFeaturedPost from "../../components/MainFeaturedPost/MainFeaturedPost";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const mainFeaturedPost = {
    title: t('main_featured_post.TITLE'),
    description:
      "Amber ağız ve diş sağlığı kliniği.",
    image: './pexels-julia-avamotive.png',
    // image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  return (
    <MainFeaturedPost post={mainFeaturedPost} />
  );
};

export default Home;
