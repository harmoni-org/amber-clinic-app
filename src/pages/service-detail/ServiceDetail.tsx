import { Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Service, ServiceWithDescription } from "../../models/Service";
import "./ServiceDetail.scss";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const ServiceDetail: React.FC = () => {

  const service = (useLoaderData() as ServiceWithDescription[])[0];
  
  const {i18n} = useTranslation();
  
  console.log(i18n.language.toUpperCase() )
  return (
    <>
      <Container className="" maxWidth="lg" sx={{marginTop: '10px'}}>
        <Grid container spacing={1}>
          <Grid xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
            <img className="picture" width="100%" height="auto" src={service?.acm_fields?.image.source_url} alt={service?.acm_fields?.image.alt_text}/>
          </Grid>
          <Grid xs={12} xsOffset={1} sm={12} smOffset={1} md={12} sx={{mt: '10px'}}>
            <h3 className="subtitle">
              {i18n.language.toUpperCase() === 'EN' && service?.acm_fields?.titleEN}
              {i18n.language.toUpperCase() === 'TR' && service?.acm_fields?.titleTR}
            </h3>
            <div className="content">
              {i18n.language.toUpperCase() === 'EN' && parse(service?.acm_fields?.descriptionEN || '')}
              {i18n.language.toUpperCase() === 'TR' && parse(service?.acm_fields?.descriptionTR || '')}
            </div>
          </Grid>
        </Grid>
      </Container>
   </>
  );
};

export default ServiceDetail;
