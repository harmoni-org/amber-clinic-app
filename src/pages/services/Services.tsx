import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Service } from "../../models/Service";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";

interface ServicesProps {
  data: Service[];
}

const Services = (props: ServicesProps) => {
  const navigate = useNavigate();


  return (
    <>
    {(
      <SectionBox id="services" title="SERVICES">
        <Box sx={{ width: "90%" }}>
          <Grid container rowSpacing={3} columnSpacing={2} sx={{ width: "100%" }}>
            {props.data.map((service) => (
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
