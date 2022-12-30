import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GET_SERVICES } from "../../graphql-queries/Service";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ServiceWithShortDescription } from "../../models/Service";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";
import { Skeleton } from "@mui/material";

const Services = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);
  const navigate = useNavigate();
  const services = (data && data.services.nodes) as ServiceWithShortDescription[] || [];

  return (
    <>
    {loading && (
      <Grid container columnSpacing={3} sx={{ width: "100%" }}>
        {[...Array(4)].map((e, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Skeleton variant="rectangular" width={223} height={350} />
          </Grid>
        ))}
      </Grid>
    )}
    {(!loading && !error) && (
      <SectionBox id="services" title="SERVICES">
        <Box sx={{ width: "90%" }}>
          <Grid container rowSpacing={3} columnSpacing={2} sx={{ width: "100%" }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <ServiceCard key={service.id} service={service} onClick={() => navigate("/our-services/" + service.slug)}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </SectionBox>
    )}
    </>
  );
};

export default Services;
