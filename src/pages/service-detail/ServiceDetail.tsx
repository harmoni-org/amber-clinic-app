import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_SERVICE } from "../../graphql-queries/Service";
import Grid from "@mui/material/Unstable_Grid2";
import { ServiceWithDescription } from "../../models/Service";
import "./ServiceDetail.scss";
import Renderer from "../../components/Renderer";

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SERVICE, { variables: { id }});
  const service = (data && data.service) as ServiceWithDescription;

  return (
    <>
    {loading && (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px' }}>
        <CircularProgress color='secondary' size={60}/>
      </Box>
    )}
    {!loading && !error && (
      <Container className="" maxWidth="lg" sx={{marginTop: '10px'}}>
        <Grid container spacing={1}>
          <Grid xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
            <img className="picture" width="100%" height="auto" src={service.image.mediaItemUrl} alt={service.image.altText}/>
          </Grid>
          <Grid xs={12} xsOffset={1} sm={12} smOffset={1} md={12} sx={{mt: '10px'}}>
            {/* <h3 className="subtitle">
              <Renderer translate nodes={service.serviceTitle.nodes} />
            </h3> */}
            <div className="content">
              <Renderer translate parseAndSanitize nodes={service.description.nodes} />
            </div>
          </Grid>
        </Grid>
      </Container>
    )}
   </>
  );
};

export default ServiceDetail;
