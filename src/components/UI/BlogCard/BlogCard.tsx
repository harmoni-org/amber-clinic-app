import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import logo from "../../../assets/vector.png";
import { Blog } from "../../../models/Blog";
import Renderer from "../../Renderer";

type BlogCardProps = {
  blog: Blog
  onClick?: () => void
};

const BlogCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.blog.image.mediaItemUrl}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          padding: 0,
        }}
      >
        <Typography
          sx={{ display: "inline", fontSize: "0.7em" }}
          component="span"
          variant="body2"
          color="text.secondary"
        >
          Ekim 1, 2022
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{ fontSize: 21 }}
        >
          <Renderer translate nodes={props.blog.blogTitle.nodes}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {shortDesc} */}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "left", display: "grid", padding: 0 }}>
        <Button size="small" onClick={props.onClick ? (() => props.onClick?.()) : (() => {})}>
          Tümünü Oku
        </Button>
        <img src={logo} alt="Amber Ağız ve Diş Sağlığı Polikliniği" />
      </CardActions>
    </Card>
  );
};

export default BlogCard;
