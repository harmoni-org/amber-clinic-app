import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { Blog } from "../../models/Blog";
import Renderer from "../../components/Renderer";
import "./BlogDetail.scss";

const BlogDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <>
    {/* {loading && (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px' }}>
        <CircularProgress color='secondary' size={60}/>
      </Box>
    )}
    {!loading && !error && (
      <Container className="" maxWidth="lg" sx={{marginTop: '10px'}}>
        <Grid container spacing={1}>
          <Grid xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
            <img className="picture" width="100%" height="auto" src={blog.image.mediaItemUrl} alt={blog.image.altText}/>
          </Grid>
          <Grid xs={12} xsOffset={1} sm={12} smOffset={1} md={12} sx={{mt: '10px'}}>
            <h3 className="subtitle">
              <Renderer translate nodes={blog.blogTitle.nodes} />
            </h3>
            <div className="content">
              <Renderer translate parseAndSanitize nodes={blog.content.nodes} />
            </div>
          </Grid>
        </Grid>
      </Container>
    )} */}
   </>
  );
};

export default BlogDetail;
