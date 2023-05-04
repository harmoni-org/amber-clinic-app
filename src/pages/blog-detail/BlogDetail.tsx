import { useLoaderData } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { Blog } from "../../models/Blog";
import "./BlogDetail.scss";
import { useTranslation } from "react-i18next";
import { AxiosResponse } from "axios";
import parse from "html-react-parser";

const BlogDetail: React.FC = () => {
  const {i18n} = useTranslation();

  const blog = ((useLoaderData() as AxiosResponse).data[0] as Blog);

  const { title, content } = React.useMemo(() => {
    let title = "";
    let content = "";

    switch(i18n.language.toUpperCase()) {
      case 'EN':
        title = blog.acm_fields.titleEN;
        content = blog.acm_fields.descriptionEN;
        break;
      case 'TR':
        title = blog.acm_fields.titleTR;
        content = blog.acm_fields.descriptionTR;
        break;
      default:
        title = blog.acm_fields.titleTR;
        content = blog.acm_fields.descriptionTR;
    }
    return {title, content};
  }, [i18n.language])

  return (
    <>
      <Container className="" maxWidth="lg" sx={{marginTop: '10px'}}>
        <Grid container spacing={1}>
          <Grid xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
            <img 
              className="picture" 
              width="100%" 
              height="auto" 
              src={blog.acm_fields.image.source_url} 
              alt={blog.acm_fields.image.alt_text}
            />
          </Grid>
          <Grid xs={12} xsOffset={1} sm={12} smOffset={1} md={12} sx={{mt: '10px'}}>
            <h3 className="subtitle">
              {title}
            </h3>
            <div className="content">
              {parse(content)}
            </div>
          </Grid>
        </Grid>
      </Container>
   </>
  );
};

export default BlogDetail;
