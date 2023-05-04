import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Blog as BlogModel } from "../../models/Blog";
import BlogCard from "../../components/UI/BlogCard/BlogCard";
import { useNavigate } from "react-router-dom";

interface BlogProps {
  data: BlogModel[]
}

const Blog = (props: BlogProps) => {
  const navigate = useNavigate();
  
  return (
    <>
      <SectionBox id="blog" title="BLOG">
        <Box sx={{ width: "90%" }} textAlign="left">
          <Grid container rowSpacing={6} columnSpacing={6}>
            {props.data.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.slug}>
                <BlogCard
                  blog={blog}
                  onClick={() => navigate("blog/" + blog.slug)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </SectionBox>
    </>
    
  );
};

export default Blog;
