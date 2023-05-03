import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GET_SERVICES } from "../../graphql-queries/Service";
import { useQuery } from "@apollo/client";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { Service, ServiceWithShortDescription } from "../../models/Service";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";
import { Skeleton } from "@mui/material";

const Services = () => {
  // const { loading, error, data } = useQuery(GET_SERVICES);
  const navigate = useNavigate();
  const services = useRouteLoaderData('root') as Service[];

  console.log("Service data from laoder",services)
  // const services = (data && data.services.nodes) as ServiceWithShortDescription[] || [];

  return (
    <>
    {(
      <SectionBox id="services" title="SERVICES">
        <Box sx={{ width: "90%" }}>
          <Grid container rowSpacing={3} columnSpacing={2} sx={{ width: "100%" }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.slug}>
                <ServiceCard key={service.slug} service={service} onClick={() => navigate("/our-services/" + service.slug)}/>
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
