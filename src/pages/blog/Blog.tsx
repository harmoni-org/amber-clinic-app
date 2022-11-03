import BlogList from "../../components/Blog/BlogList";
import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { ServiceItem } from "../services/Services";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Categories from "../../assets/settings/categories";
import BlogCard from "../../components/UI/BlogCard/BlogCard";

interface Props {
  data: ServiceItem[]
}

const Blog = (props: Props) => {
  const [blogs, setBlogs] = useState<ServiceItem[]>([]);
  const {i18n} = useTranslation();

  useEffect(() => {
    setBlogs(props.data.filter((item) => item.categories.indexOf(Categories[i18n.language])))
  }, [props.data])
  
  return (
    <SectionBox id="blog" title="BLOG">
      <Box sx={{ width: "90%" }} textAlign="left">
      <Grid container rowSpacing={6} columnSpacing={6}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title.rendered}
              imageName={blog.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </SectionBox>
  );
};

export default Blog;
