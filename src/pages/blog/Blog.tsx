import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Blog as BlogModel } from "../../models/Blog";
import BlogCard from "../../components/UI/BlogCard/BlogCard";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* {loading && (
        <Grid container columnSpacing={3} sx={{ width: "100%" }}>
          {[...Array(4)].map((e, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Skeleton variant="rectangular" width={223} height={350} />
            </Grid>
          ))}
        </Grid>
      )} */}
      {/* {(!loading && !error) && (
        <SectionBox id="blog" title="BLOG">
          <Box sx={{ width: "90%" }} textAlign="left">
            <Grid container rowSpacing={6} columnSpacing={6}>
              {!loading && blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <BlogCard
                    blog={blog}
                    onClick={() => navigate("blog/" + blog.modelSlug)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </SectionBox>
      )} */}
    </>
    
  );
};

export default Blog;
