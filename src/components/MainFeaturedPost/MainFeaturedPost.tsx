import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const MainFeaturedPost: React.FC = () => {
  const { t } = useTranslation();

  const post = {
    title: t("main_featured_post.TITLE"),
    description: t("navbar.TITLE"),
    imgUrl: "./dentist-slider.png",
    imageText: "main image description",
  };

  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.imgUrl})`,
        height: "560px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          height: "100%",
        }}
      />
    </Paper>
  );
};

export default MainFeaturedPost;
